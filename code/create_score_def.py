#!/usr/bin/env /usr/local/bin/python3
"""

Created by Jim Kaubisch on 2022-06-02.

Version 0.2
    Changes: 
        - added get_keysignature and knockon changes to display tables; clean up
        

"""

import os
import sys
import music21 as m21_lib
import json
 
from time   import strftime, gmtime
from pprint import pprint

from tabulate     import tabulate

from load_m21_lib import get_local_corpus
from ScoreDef     import ScoreDef

from time import strftime, gmtime
dt_gmt = strftime("%Y-%m-%d_%H_%M", gmtime())

# the success table has four columns. The third is the score_data dict 
SCORE_DATA_POS = 3

SHAREPATH = '/Users/jimkaubisch/Projects/pianoPreReading/_share'
SCORE_DEF_FILE = f"score_defs_{dt_gmt}.json"


# --------------------------------------------------------------
# User Exceptions
# --------------------------------------------------------------

class UnknownNoteElementError(ValueError):
    def __init__(self, our_msg=None):
        self.our_msg = our_msg if our_msg else "???"
    # __str__ is to print() the value 
    def __str__(self): 
        return(f'{self.our_msg}')


# --------------------------------------------------------------
# Functions
# --------------------------------------------------------------

def export_score_defs(the_score_defs, verbose=False):
    """
    """
    # Save to the score_defs dict to a json file in _share
    #
    try:
        defs_file_path = os.path.join(SHAREPATH, SCORE_DEF_FILE)
        with open(defs_file_path, "w") as json_score_defs:
            if verbose:
                print(f"\n... creating {defs_file_path} ...", end="")
            json.dump(the_score_defs, json_score_defs, sort_keys=True)
        if verbose:
            print(f"- success\n")
    except Exception as why:
        if verbose:
            print(f"- failed with exception {why}\n")
        raise


#
# --------------------------------------------------------------
#
def solfege_of(the_pitch, the_key, the_tonality, debug=False):
    """
    Scale Degree	Solfege Syllable	C Major	B-flat Major	D Major
        1	            do	                C	    B-flat	        D
        2	            re	                D	    C	            E
        3	            mi	                E	    D	            F-sharp
        4	            fa	                F	    E-flat	        G
        5	            sol	                G	    F	            A
        6	            la	                A	    G	            B
        7	            ti	                B	    A	            C-sharp
        8	            do	                C	    B-flat	        D

    """

    # Note, within Music21, lower case for a key id indicates it's minor. Major is Uppercase
    #
    our_key = m21_lib.key.Key(the_key.upper() if the_tonality.lower() =='major' else the_key.lower())
    our_solfege_syllable  = our_key.solfeg(m21_lib.pitch.Pitch(the_pitch))
    if debug:
        print(f'solfege_of: our_key = {our_key}, pitch = {the_pitch}, solfege = {our_solfege_syllable}')

    return our_solfege_syllable


#
# --------------------------------------------------------------
#
def right_notes(the_score, the_right_list, debug=False):
    """
    """

    note_durations_we_have = set()
    note_durations_we_want = set(the_right_list)
    
    for next_element in the_score.recurse().getElementsByClass(m21_lib.note.GeneralNote):
        if debug:
            print(f"right_notes: {next_element.fullName}")
        element_parts = next_element.fullName.split(' ')
        
        if element_parts[-1] =='Note':      # add to the "we have" set
            note_durations_we_have.add(element_parts[-2])
        elif element_parts[-1] =='Rest':    # Anything with a rest is rejected
            return False
        elif element_parts[0] =='Chord':    # Ignore
            continue
        else:                               # a type we didn't expect. Time for a human
            raise UnknownNoteElementError(f'Unexpected note element in "{element_parts}"')

    if debug:
        print(f'right_notes:\tnote_durations_we_have: {note_durations_we_have}\n\t\tnote_durations_we_want: {note_durations_we_want}')
        print(f'\t\t\tresult: we_have is a subset of we_want? {note_durations_we_have.issubset(note_durations_we_want)}\n')

    return True if note_durations_we_have.issubset(note_durations_we_want) else False


#
# --------------------------------------------------------------
#
def get_keysignature(our_score, verbose=False, debug=False):
    """
    """
    
    # These are the methods used to get key signatures
    #
    keysig_method_list = [ list(our_score.recurse().getElementsByClass('KeySignature')),
                           [our_score.analyze('key.krumhanslschmuckler')],
                           [our_score.analyze('key')]
                         ]

    # The "majority voting" code below works for "out of three"
    # As written it does not do the whole job for any other list size
    # For even-length lists, code concerning voting ties would need to be added
    # Even for odd length list greater than three, the possibility of ties exists e.g. 2/2/1
    # So assert the limitation we have
    #
    assert (len(keysig_method_list) == 3)

    key_list = []
    tonality_list = []

    # get the result from each of the methods
    #
    for keysig_options in keysig_method_list:
        # results are returned as string of the form "A major"
        # if a result list has more than one key signature, we just want the first one
        #
        key_parts = keysig_options[0].name.split(' ', 1)
        key_list.append(key_parts[0])
        tonality_list.append(key_parts[1])

    if debug:
        print(f'\nkey_list = {key_list}, tonality_list = {tonality_list}\n')

    majority = 2
    if debug:
        print(f'majority = {majority}')

    # If there no value that has a majority, here is the default result to choose
    #
    the_key, the_tonality = key_list[2], tonality_list[2]

    # Now look to see if any option in the list is in the majority (2 out of three in our case)
    #
    for next_possibility in set(key_list):
        if key_list.count(next_possibility) >= majority:
            the_key = next_possibility
            break

    for next_possibility in set(tonality_list):
        if tonality_list.count(next_possibility) >= majority:
            the_tonality = next_possibility
            break

    return the_key, the_tonality

#
# --------------------------------------------------------------
#

def is_score_convertible(this_meta_entry, result_list, show_score=False, log_results=False, verbose=False, debug=False):
    """
    Should this score be converted?
        Analyze the score with Music21 to answer the question.  Use these criteria:
            a. number of parts = 1

            b. range
              i. min = Major 3rd
             ii. max = Major 6th (only necessary for V.1.0)

            c. time signature: 
                 top number must be divisible by 2 or 3

            d. rhythm
                i. if c = 2 but not 3: one of the three below must be true
                    1) piece contains ONLY: eighth, quarter, half notes
                    2) piece contains ONLY: quarter, half, whole notes
                    3) piece contains ONLY: quarter, eighth, sixteenth
               ii. if c = 3: 
                    1) piece contains ONLY: eighth, quarter, dotted quarter, dotted half notes

    in test scores:

        Pass List:
            1) a cup of tea
            2) a la ronda ronda

    """
    #debug = True

    #  Acceptable rythms
    #
    RHYTHM_C_2_1 =     ['Half', 'Quarter', 'Eighth']
    RHYTHM_C_2_2 =     ['Whole', 'Half', 'Quarter']
    RHYTHM_C_2_3 =     ['Quarter', 'Eighth', 'Sixteenth']
    RHYTHM_C_3_1 =     ['Dotted Half', 'Quarter', 'Dotted Quarter', 'Eighth']

    # The list of scores that are converted
    #
    convertable = False

    # Our acceptable chromatic intervals
    #
    CHROMATIC_INTERVALS = ['A2', 'm3', 'M3', 'A3', 'd4', 'P4', 'A4', 'd5', 'P5', 'A5', 'd6', 'm6', 'M6']

    # The metadata for this MetadataBundle entry in our corpus
    #
    our_metadata = this_meta_entry.metadata

    # The score data for this MetadataBundle entry in our corpus
    #
    our_score    = this_meta_entry.parse()

    # Look at score ?
    if False: #show_score:
        this_meta_entry.show()

    # We need the data were using here for later in the case of scores that are convertable
    #
    score_data = {}
    score_data['our_part_count']      = our_metadata.numberOfParts
    score_data["our_time_signature"]  = our_metadata.timeSignatureFirst.split('/') if our_metadata.timeSignatureFirst else None
    score_data["our_ts_numerator"]    = int(score_data["our_time_signature"][0]) if score_data["our_time_signature"] else None
    score_data["lowest_pitch"]        = our_metadata.pitchLowest
    score_data["highest_pitch"]       = our_metadata.pitchHighest
    score_data["max_interval"]        = m21_lib.interval.Interval(noteStart=m21_lib.note.Note(score_data["lowest_pitch"]), 
                                                                  noteEnd  =m21_lib.note.Note(score_data["highest_pitch"]))
    score_data["keySignature"]        = our_metadata.keySignatures[0]
    score_data["our_metadata_title"]  = our_metadata.title
    score_data["metadata_entry_path"] = this_meta_entry.sourcePath

    score_data["our_key"], score_data["our_tonality"] = get_keysignature(our_score)

    if debug:
        print(f'\tkeySignatures     = {our_metadata.all()}')
        pprint(our_metadata.all())

    if verbose:
        print(f'is_convertable:')
        print(f'\tscore_data["metadata_entry_path"] = {score_data["metadata_entry_path"]}')
        print(f'\tscore_data["our_metadata_title"]  = {score_data["our_metadata_title"]}')
        print(f'\tscore_data["our_key"]             = {score_data["our_key"]}')
        print(f'\tscore_data["our_tonality"]        = {score_data["our_tonality"]}')
        print(f'\tscore_data["part_count"]          = {score_data["our_part_count"]}')
        print(f'\tscore_data["keySignature"]        = {score_data["keySignature"]}')
        print(f'\tscore_data["lowest_pitch"]        = {score_data["lowest_pitch"]}')
        print(f'\tscore_data["highest_pitch"]       = {score_data["highest_pitch"]}')
        print(f'\tscore_data["max_interval"] name   = {score_data["max_interval"].name}')
        print(f'\tts_numerator                      = {score_data["our_ts_numerator"]}')
        print()

    if debug:
        for a_note in our_score.recurse().getElementsByClass(m21_lib.note.GeneralNote):
            print(f"our_score: {a_note.fullName}, type: {type(a_note.fullName)}")
        print()

    # Our score needs to contain exactly 1 part
    #
    if len(our_score.parts) == 1:
        # and it needs to be in our permitted range 
        #
        if score_data["max_interval"].name in CHROMATIC_INTERVALS:
            # A time signature must exists and its numerator must be divisable by 2 or 3
            #
            if score_data["our_ts_numerator"]:
                try:
                    if (score_data["our_ts_numerator"] % 3) == 0:
                        # Notes must all be from ONE of the lists
                        for next_possible in [RHYTHM_C_2_1, RHYTHM_C_2_2, RHYTHM_C_2_3]:
                            if right_notes(our_score, next_possible, debug=debug):
                                # Passed all the tests, so a success
                                convertable = True
                                if log_results:
                                        result_list.append(['Pass', f'{score_data["our_key"]} {score_data["our_tonality"]}', this_meta_entry.sourcePath])
                                return True, result_list
                            elif log_results:
                                result_list.append(['Fail', 'unwanted note element {}', this_meta_entry.sourcePath, score_data])
                    elif (score_data["our_ts_numerator"] % 2) == 0:
                        # Notes must all be from the list
                        for next_possible in [RHYTHM_C_3_1]:
                            if right_notes(our_score, next_possible, debug=debug):
                                # Passed all the tests, so a success
                                convertable = True
                                if log_results:
                                        result_list.append(['Pass', f'{score_data["our_key"]} {score_data["our_tonality"]}', this_meta_entry.sourcePath, score_data])
                                return True, result_list
                    elif log_results:
                        result_list.append(['Fail', 'time signature numerator not 2 or 3', this_meta_entry.sourcePath])
                except UnknownNoteElementError as why:
                    result_list.append(['Fail', why, this_meta_entry.sourcePath])
                    raise

            elif log_results:
                result_list.append(['Fail', 'No Time Signature', this_meta_entry.sourcePath])
        elif log_results:
            result_list.append(['Fail', f'Interval out of Range ({score_data["max_interval"].name})', this_meta_entry.sourcePath])
    elif log_results:
        result_list.append(['Fail', f'Part count = {len(our_score.parts)}', this_meta_entry.sourcePath])

    if debug:
        print(f'\t>>>> score {our_score.metadata.title} is convertable == {convertable}\n')

    # Return whether THIS score is acceptable for conversion and the modified result table
    #
    return convertable, result_list


#
# --------------------------------------------------------------
#
def get_convertable_list(the_corpus, the_corpus_name, show_score=False, verbose=True, debug=False):
    """
    Get the list of all scores in the local corpus that are elligible to be converted to the keyboard html
    """
    print('\n\n')
    print('# ------------------------------------------------------------------------------------------------------------------')
    print('#')
    print('#                            Identifying score files meeting our criteria...')
    print('#')
    print('# ------------------------------------------------------------------------------------------------------------------')
    
    result_list = [['Result', 'Reason', 'Path']]

    completed_so_far = 0
    
    the_metadata = m21_lib.metadata.bundles.MetadataBundle(the_corpus)
    the_metadata.read()
    the_metadata_len = len(the_metadata)

    for metadata_item in the_metadata: #the_metadata: #range(len(localBundle)):
        extra_new_line = '\n' if verbose else ''
        if the_metadata_len > 50 and completed_so_far % 50 == 0:
            print(f'{extra_new_line}get_convertable_list: Processed {completed_so_far:>4} of {the_metadata_len} scores{extra_new_line}')

        is_score_convertible(metadata_item, result_list, verbose=False, show_score=show_score, log_results=True, debug=debug)

        completed_so_far += 1

    # We want to return 2 lists - one for those scores that are accepted, the other for those that didn't
    # So we'll move the successful ones into a new list and remove them from the result list
    # But need to do that from the bottom up, since we're removing them from the list we're iterating over
    #
    if result_list:
        pass_list = [['Result', 'Key Signature','Path']]
        for index, next_element in reversed(list(enumerate(result_list))):
            if next_element[0] == "Pass": # Move success entries to success list
                # Append to the success list
                pass_list.append([next_element[0], next_element[1], next_element[2], next_element[3]])

                # And delete from the result_list (which is becoming the failed list as a result)
                del result_list[index]

    print(f'\nIdentified {len(pass_list)-1} score files that meet our criteria\n')

    return pass_list, result_list


#
# --------------------------------------------------------------
#

def convert_score_to_score_def(the_score, show_score=False, verbose=True, debug=False):
    """
    Convert each score in the score_list to the html of the corresponding keyboard
    """

    score_data = the_score[SCORE_DATA_POS]

    if debug:
        print(f'\n score_data: type of score_data = {type(score_data)}')
        pprint(score_data, indent=4)
        print('\n')

    # Do the conversions
    pass
    converted_score = ScoreDef(title = score_data['our_metadata_title'])
    if debug:
        print('\n converted_score:')
        pprint(converted_score.score_def, indent=4)
        print('\n')

    return converted_score


#
# --------------------------------------------------------------
#

def convert_pass_list_to_score_defs(pass_list, show_score=False, verbose=True, debug=False):
    """
    Convert each score in the pass_list to the html of the corresponding keyboard
    """

    score_defs = {}

    if len(pass_list)>1:
        for next_score in pass_list[1:]:
            # Do the conversion
            next_def = convert_score_to_score_def(next_score, show_score=False, verbose=True, debug=False)
            if debug:
                print(f"\nnext_def: ")#"{next_def.score_def['score_data']['title']}")
                pprint(next_def.score_def)
                print()

            score_defs[next_def.score_def['score_data']['title']] = next_def.score_def

    return score_defs


# --------------------------------------------------------------
# Main
# --------------------------------------------------------------


if __name__ == '__main__':
    """
    """

    debug = False

    for key in ['C','B-', 'D']:
        syllable = solfege_of('A', key, 'major', debug=True)
        
    print(f'\npianoPreReading: Python  Version: {sys.version.split("(")[0]}')
    print(f'pianoPreReading: Music21 Version: {m21_lib.VERSION_STR}\n')

    # get the local corpus
    #
    local_corpus, corpus_name = get_local_corpus(debug=False)

    # And get list to convert
    #
    pass_list, fail_list = get_convertable_list(local_corpus, corpus_name, show_score=True, verbose=True, debug=False)
    print_pass = []
    for next_row in pass_list:
        print_pass.append(next_row[:3])

    print()
    print(f"Successs ({len(pass_list)-1}):\n{tabulate(print_pass, headers='firstrow', tablefmt='fancy_grid', numalign=('decimal'), floatfmt='.2f')}")
    print()
    print(f"Fail ({len(fail_list)-1}):\n{tabulate(fail_list, headers='firstrow', tablefmt='fancy_grid', numalign=('decimal'), floatfmt='.2f')}")

    # And convert
    #
    score_defs = convert_pass_list_to_score_defs(pass_list, show_score=False, verbose=True, debug=False)
    if debug:
        print(f'\nscore_defs')
        pprint(score_defs.keys())
        print()

    # And export to _share directory
    #
    #export_score_defs(score_defs, verbose=True)


