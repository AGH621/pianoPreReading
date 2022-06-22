#!/usr/bin/env /usr/local/bin/python3
"""

Created by Jim Kaubisch on 2022-06-02.

Version 0.2
    Changes: 
        - added get_keysignature and knockon changes to display tables; clean up
        

"""

import os
import sys
 
from time   import strftime, gmtime
from pprint import pprint

import music21 as m21_lib

from tabulate     import tabulate

from load_m21_lib import get_local_corpus


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

def save_files(pass_list=None, fail_list=None, debug=False):
    """
    """

    from time import strftime, gmtime

    dt_gmt = strftime("%Y-%m-%d_%H_%M", gmtime())
    data_path = '/Users/jimkaubisch/Projects/pianoPreReading/_data'
    
    # Save to the output xlsx sheet
    #


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
        key_parts = keysig_options[0].name.split(' ', 1)
        key_list.append(key_parts[0])
        tonality_list.append(key_parts[1])

    if debug:
        print(f'\nkey_list = {key_list}, tonality_list = {tonality_list}\n')
    
    # key_list = ['G', 'A', 'E'], tonality_list = ['major', 'minor', 'minor']
    majority = 2
    if debug:
        print(f'majority = {majority}')

    # If there no value that has a majority, here is the default result to choose
    #
    the_key, the_tonality = key_list[2], tonality_list[2]

    # Now look to see if any option in the list is in the majority (2 out of three in our case)
    #
    #key_set = set(key_list)
    for next_possibility in set(key_list):
        if key_list.count(next_possibility) >= majority:
            the_key = next_possibility
            break
    
    #tonality_set = set(tonality_list)
    for next_possibility in set(tonality_list):
        if tonality_list.count(next_possibility) >= majority:
            the_tonality = next_possibility
            break

    return the_key, the_tonality


#
# --------------------------------------------------------------
#

def is_score_convertible(this_meta_entry, result_list, show_score=False, log_results=False, verbose=True, debug=False):
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

    our_part_count     = our_metadata.numberOfParts
    our_time_signature = our_metadata.timeSignatureFirst.split('/') if our_metadata.timeSignatureFirst else None
    our_ts_numerator   = int(our_time_signature[0]) if our_time_signature else None
    lowest_pitch       = our_metadata.pitchLowest
    highest_pitch      = our_metadata.pitchHighest
    max_interval       = m21_lib.interval.Interval(noteStart=m21_lib.note.Note(lowest_pitch), 
                                                   noteEnd  =m21_lib.note.Note(highest_pitch))
                                                   

    our_key, our_tonality = get_keysignature(our_score)

    if debug:
        print(f'\tkeySignatures     = {our_metadata.all()}')
        pprint(our_metadata.all())

    if verbose:
        print(f'is_convertable:')
        print(f'\tmetadataEntry path = {this_meta_entry.sourcePath}')
        print(f'\tour_metadata title = {our_metadata.title}')
        print(f'\tour_key            = {our_key}')
        print(f'\tour_tonality       = {our_tonality}')
        print(f'\tpart_count         = {our_part_count:}')
        print(f'\tkeySignature       = {our_metadata.keySignatures[0]}')
        print(f'\tlowest_pitch       = {our_metadata.pitchLowest}')
        print(f'\thighest_pitch      = {our_metadata.pitchHighest}')
        print(f"\tmax_interval name  = {max_interval.name}")
        print(f'\tts_numerator       = {our_ts_numerator}')
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
        if max_interval.name in CHROMATIC_INTERVALS:
            # A time signature must exists and its numerator must be divisable by 2 or 3
            #
            if our_ts_numerator:
                try:
                    if (our_ts_numerator % 3) == 0:
                        # Notes must all be from ONE of the lists
                        for next_possible in [RHYTHM_C_2_1, RHYTHM_C_2_2, RHYTHM_C_2_3]:
                            if right_notes(our_score, next_possible, debug=debug):
                                # Passed all the tests, so a success
                                convertable = True
                                if log_results:
                                        result_list.append(['Pass', f'{our_key} {our_tonality}', this_meta_entry.sourcePath])
                                return True, result_list
                            elif log_results:
                                result_list.append(['Fail', 'unwanted note element {}', this_meta_entry.sourcePath])
                    elif (our_ts_numerator % 2) == 0:
                        # Notes must all be from the list
                        for next_possible in [RHYTHM_C_3_1]:
                            if right_notes(our_score, next_possible, debug=debug):
                                # Passed all the tests, so a success
                                convertable = True
                                if log_results:
                                        result_list.append(['Pass', f'{our_key} {our_tonality}', this_meta_entry.sourcePath])
                                return True, result_list
                    elif log_results:
                        result_list.append(['Fail', 'time signature numerator not 2 or 3', this_meta_entry.sourcePath])
                except UnknownNoteElementError as why:
                    result_list.append(['Fail', why, this_meta_entry.sourcePath])
                    raise

            elif log_results:
                result_list.append(['Fail', 'No Time Signature', this_meta_entry.sourcePath])
        elif log_results:
            result_list.append(['Fail', f'Interval out of Range ({max_interval.name})', this_meta_entry.sourcePath])
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
        if completed_so_far % 50 == 0:
            print(f'{extra_new_line}get_convertable_list: Processed {completed_so_far:>4} of {the_metadata_len} scores{extra_new_line}')

        is_score_convertible(metadata_item, result_list, verbose=True, show_score=show_score, log_results=True, debug=debug)

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
                pass_list.append([next_element[0], next_element[1], next_element[2]])

                # And delete from the result_list (which is becoming the failed list as a result)
                del result_list[index]

    print(f'\nIdentified {len(pass_list)-1} score files that meet our criteria\n')

    return pass_list, result_list


#
# --------------------------------------------------------------
#

def convert_score_to_html(the_score, show_score=False, verbose=True, debug=False):
    """
    Convert each score in the score_list to the html of the corresponding keyboard
    """

    converted_score = ''

    # Do the conversions
    pass

    return converted_score


#
# --------------------------------------------------------------
#

def convert_score_list_to_html(score_list, show_score=False, verbose=True, debug=False):
    """
    Convert each score in the score_list to the html of the corresponding keyboard
    """

    converted_list = []

    if score_list:
        for next_score in score_list:
            # Do the conversions
            pass

    return converted_list


# --------------------------------------------------------------
# Main
# --------------------------------------------------------------


if __name__ == '__main__':
    """
    """

    print(f'\npianoPreReading: Python  Version: {sys.version.split("(")[0]}')
    print(f'pianoPreReading: Music21 Version: {m21_lib.VERSION_STR}\n')

    # get the local corpus
    #
    local_corpus, corpus_name = get_local_corpus(debug=False)

    # And get list to convert
    #
    pass_list, fail_list = get_convertable_list(local_corpus, corpus_name, show_score=True, verbose=True, debug=False)

    print()
    print(f"Successs ({len(pass_list)-1}):\n{tabulate(pass_list, headers='firstrow', tablefmt='fancy_grid', numalign=('decimal'), floatfmt='.2f')}")
    print()
    print(f"Fail ({len(fail_list)-1}):\n{tabulate(fail_list, headers='firstrow', tablefmt='fancy_grid', numalign=('decimal'), floatfmt='.2f')}")

    # And convert
    #
    converted_list = convert_score_list_to_html(pass_list, show_score=False, verbose=True, debug=False)


