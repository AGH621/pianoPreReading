#!/usr/bin/env /usr/local/bin/python3
"""

Created by Jim Kaubisch on 2022-06-02.

"""

import music21 as m21_lib
from tabulate import tabulate

from pprint import pprint
from load_m21_lib import get_local_corpus


#
# --------------------------------------------------------------
#

def is_convertable(this_meta_entry, result_table, verbose=True, show_score=False, log_results=False, debug=False):
    """
    Should this score be converted?
        Analyze the score with Music21 to answer the question.  Use these criteria:
            a. number of parts = 1

            b. range
            i. min = Major 3rd
                ii. max = Major 6th #Perfect 5th*

                c. time signature: top number must be divisible by 2 or 3

                d. rhythm
                i. if c = 2 but not 3: one or the other below must be true
                    1) piece contains ONLY: eighth, quarter, half notes
                    2) piece contains ONLY: quarter, half, whole notes
            ii. if c = 3: piece contains ONLY: eighth, quarter, dotted quarter, dotted half notes

            * only necessary for V.1.0


    in test scores:

    Pass List:
        1) a cup of tea
        2) a la ronda ronda

    """
    #debug = True

    RHYTHM_C_2_1 =     ['Half Note', 'Quarter Note', 'Eighth Note']
    RHYTHM_C_2_2 =     ['Whole Note', 'Half Note', 'Quarter Note']
    RHYTHM_C_2_3 =     ['Quarter Note', 'Eighth Note', 'Sixteenth Note']
    RHYTHM_C_3_1 =     ['Dotted Half Note', 'Quarter Note', 'Dotted Quarter Note', 'Eighth Note']

    convertable = False
    #print(f'type(this_meta_entry = {type(this_meta_entry)}')

    CHROMATIC_INTERVALS = ['A2', 'm3', 'M3', 'A3', 'd4', 'P4', 'A4', 'd5', 'P5', 'A5', 'd6', 'm6', 'M6']
    
    

    our_metadata = this_meta_entry.metadata

    our_score    = this_meta_entry.parse()

    # Look at score ?
    if False: #show_score:
        this_meta_entry.show()
    
    our_part_count = our_metadata.numberOfParts
    our_time_signature = our_metadata.timeSignatureFirst.split('/') if our_metadata.timeSignatureFirst else None
    our_ts_numerator = int(our_time_signature[0]) if our_time_signature else None
    lowest_pitch     = our_metadata.pitchLowest
    highest_pitch    = our_metadata.pitchHighest
    max_interval     = m21_lib.interval.Interval(noteStart=m21_lib.note.Note(lowest_pitch), 
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


    # Needs to only be 1 part
    #
    if len(our_score.parts) == 1:
        # Range 
        #
        if max_interval.name in CHROMATIC_INTERVALS:
            # Time signature exists and numerator is divisable by 2 or 3
            #
            if our_ts_numerator:
                if (our_ts_numerator % 3) == 0:
                    # code goes here
                    convertable = True
                    if log_results:
                            result_table.append(['Pass', '---', this_meta_entry.sourcePath])
                elif (our_ts_numerator % 2) == 0:
                    # code goes here
                    convertable = True
                    if log_results:
                            result_table.append(['Pass', '---', this_meta_entry.sourcePath])
                elif log_results:
                    result_table.append(['Fail', 'time signature numerator not 2 or 3', this_meta_entry.sourcePath])
            elif log_results:
                result_table.append(['Fail', 'No Time Signature', this_meta_entry.sourcePath])
        elif log_results:
            result_table.append(['Fail', f'Interval out of Range ({max_interval.name})', this_meta_entry.sourcePath])
    elif log_results:
        result_table.append(['Fail', f'Part count = {len(our_score.parts)}', this_meta_entry.sourcePath])

    print(f'\t>>>> score {our_score.metadata.title} is convertable == {convertable}\n')
    return convertable, result_table


#
# --------------------------------------------------------------
#

def convert_it(corpus_name, show_score=False, verbose=True, debug=False):
    """
    the_metadata = metadata.bundles.MetadataBundle('scoreLibrary')
    the_metadata.read()

    for x in range(len(the_metadata)):
        print(f'{the_metadata[x].metadata.sourcePath} - {the_metadata[x].metadata.pitchLowest}')
    """
    #debug = True
    
    converted_list = []
    result_table = [['Result', 'Reason', 'Path']]
    
    the_metadata = m21_lib.metadata.bundles.MetadataBundle(corpus_name)
    the_metadata.read()
    #return the_metadata

    for metadata_index in range(len(the_metadata)): #the_metadata: #range(len(localBundle)):
        #if is_convertable(localBundle[metadata_index], result_table, verbose=True, show_score=show_score, log_results=True, debug=True):
        if is_convertable(the_metadata[metadata_index], result_table, verbose=True, show_score=show_score, log_results=True, debug=True):
            pass
    
    if result_table:
        print(f"{tabulate(result_table, headers='firstrow', tablefmt='fancy_grid', numalign=('decimal'), floatfmt='.2f')}")
    
    return converted_list

#
# --------------------------------------------------------------
#

if __name__ == '__main__':
    import sys
    print(f'globals: Python Version: {sys.version.split("(")[0]}\n')
    
    # get the local corpus
    #
    local_corpus = get_local_corpus()

    # And convert them
    #
    converted_list = convert_it(local_corpus, show_score=True, verbose=True, debug=True)

