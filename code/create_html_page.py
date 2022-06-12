#!/usr/bin/env /usr/local/bin/python3
"""

Created by Jim Kaubisch on 2022-06-02.

"""

import music21 as m21_lib
from tabulate import tabulate

from pprint import pprint
from load_m21_lib import get_local_corpus


class UnknownNoteElementError(ValueError):
    def __init__(self, our_msg=None):
        self.our_msg = our_msg if our_msg else "???"
    # __str__ is to print() the value 
    def __str__(self): 
        return(f'{self.our_msg}')



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

def is_score_convertable(this_meta_entry, result_list, verbose=True, show_score=False, log_results=False, debug=False):
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

    if debug:
        print(f'is_convertable: metadataEntry source path = {this_meta_entry.sourcePath}')
        print(f'\tour_metadata title= {our_metadata.title}')
        print(f'\tpart_count        = {our_part_count:}\t - type = {type(our_part_count)}')
        print(f'\tlowest_pitch      = {our_metadata.pitchLowest}\t - type = {type(this_meta_entry.metadata.pitchLowest)}')
        print(f'\thighest_pitch     = {our_metadata.pitchHighest}\t - type = {type(this_meta_entry.metadata.pitchHighest)}')
        print(f"\tmax_interval name = {max_interval.name}\t - type = {type(max_interval.name)}")
        print(f'\tts_numerator      = {our_ts_numerator}  - type = {type(our_ts_numerator)}')
        print()

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
                                        result_list.append(['Pass', '---', this_meta_entry.sourcePath])
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
                                        result_list.append(['Pass', '---', this_meta_entry.sourcePath])
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
def get_convertable_list(corpus_name, show_score=False, verbose=True, debug=False):
    """
    Get the list of all scores in the local corpus that are elligible to be converted to the keyboard html
    """
    result_list = [['Result', 'Reason', 'Path']]

    the_metadata = m21_lib.metadata.bundles.MetadataBundle(corpus_name)
    the_metadata.read()
    #return the_metadata

    for metadata_item in the_metadata: #the_metadata: #range(len(localBundle)):
        is_score_convertable(metadata_item, result_list, verbose=True, show_score=show_score, log_results=True, debug=debug)

    # We want to return 2 lists - one for those scores that are accepted, the other for those that didn't
    # So we'll move the successful ones into a new list and remove them from the result list
    # But need to do that from the bottom up, since we're removing them from the list we're iterating over
    #
    if result_list:
        pass_list = [['Path']]
        for index, next_element in reversed(list(enumerate(result_list))):
            if next_element[0] == "Pass": # Move success entries to success list
                # Append to the success list
                pass_list.append([next_element[2]])

                # And delete from the result_list (which is becoming the failed list as a result)
                del result_list[index]

    return pass_list, result_list


#
# --------------------------------------------------------------
#

def convert_score_to_html(the_score, show_score=False, verbose=True, debug=False):
    """
    Convert each score in the score_list to the html of the corresponding keyboard
    """
    #debug = True

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
    #debug = True

    converted_list = []

    if score_list:
        for next_score in score_list:
            # Do the conversions
            pass

    return converted_list


#
# --------------------------------------------------------------
#

if __name__ == '__main__':
    import sys
    print(f'globals: Python  Version: {sys.version.split("(")[0]}')
    print(f'globals: Music21 Version: {m21_lib.VERSION_STR}\n')

    # get the local corpus
    #
    local_corpus = get_local_corpus(debug=False)

    # And get list to convert
    #
    pass_list, fail_list = get_convertable_list(local_corpus, show_score=True, verbose=True, debug=False)

    print()
    print(f"Successs:\n{tabulate(pass_list, headers='firstrow', tablefmt='fancy_grid', numalign=('decimal'), floatfmt='.2f')}")
    print()
    print(f"Fail:\n{tabulate(fail_list, headers='firstrow', tablefmt='fancy_grid', numalign=('decimal'), floatfmt='.2f')}")

    # And convert
    #
    converted_list = convert_scores_to_html(pass_list, show_score=False, verbose=True, debug=False)


