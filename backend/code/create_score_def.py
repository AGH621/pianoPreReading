#!/usr/bin/env /usr/local/bin/python3
"""

Created by Jim Kaubisch on 2022-06-02.

Version 0.3
    Changes: 
        - added get_keysignature and knockon changes to display tables; clean up

"""

import os
import sys
import music21 as m21_lib
import json

from time         import strftime, gmtime
from pprint       import pprint

from time         import strftime, gmtime
from datetime     import datetime

from operator     import itemgetter
from shutil                 import rmtree

from tabulate     import tabulate

from ppr_globals  import config

from load_m21_lib import get_local_corpus
from ScoreDef     import ScoreDef
from ScoreDef     import pedagogical_type_to_notes_map




# Create time stamp of current GMT time
dt_gmt = strftime("%Y-%m-%d_%H_%M", gmtime())

# the (zero-based) table of scores that pass our tests are are deemed appropriate 
# for this application has four columns. The last is the score_data dict 
SCORE_DATA_POS = 3

# _share is the directory containing the data exchange between the backend and frontend
#
SHAREPATH = config["ppr_create"]['sharepath']
#print(f'SHAREPATH = {SHAREPATH}')

MAX_SCORE_DEFS_FILES = int(config["ppr_create"]['max_score_defs_versions'])
#print(f'type of MAX_SCORE_DEFS_FILES = {type(MAX_SCORE_DEFS_FILES)}')

# This is the directory that holds our result passed to the frontend
#
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

class UnknownPedagogyStyleError(ValueError):
    def __init__(self, our_msg=None):
        self.our_msg = our_msg if our_msg else "???"
    # __str__ is to print() the value 
    def __str__(self): 
        return(f'{self.our_msg}')

# --------------------------------------------------------------
# Functions
# --------------------------------------------------------------
#
"""
def trim_score_defs():
    " ""
    if, by adding this backup, we exeed the max number of backups to keep, delete the oldest
    " ""
    max_backups = configuration.get('mfm.max_backups')

    # What's in our list and how long is it
    bup_list  = [bup_set for bup_set in os.listdir(session.backup_folder) 
                                if os.path.isdir(os.path.join(session.backup_folder, bup_set))\
                                and bup_set.startswith('bup')]
                                
    if len(bup_list) <= max_backups:
        return bup_list
    else:
        # first get the timestamps for each of the backups
        bup_by_datetime = []
        for bup_name in bup_list:
             bup_by_datetime.append((datetime.fromtimestamp(os.path.getmtime(os.path.join(session.backup_folder, bup_name))), bup_name))

        # sort them in descending time order (most recent -> oldest)
        bup_by_datetime = sorted(bup_by_datetime, key=itemgetter(0), reverse=True)

        # trim the list
        while len(bup_by_datetime) > max_backups:
            rmtree(os.path.join(backup_folder, bup_by_datetime.pop()[1]), ignore_errors=True)
            
        # and return the list of remaining backups, most recent first
        trimmed_list = []
        for next in bup_by_datetime:
            trimmed_list.append(next[1])
        return trimmed_list
"""
#
# -------------------------------------------------------------------------------
#
def trim_score_defs(debug=False):
    """
    if, by adding this backup, we exeed the max number of backups to keep, delete the oldest
    """

    # What's in our list and how long is it
    score_defs_list  = [score_defs_set for score_defs_set in os.listdir(SHAREPATH) 
                                        if os.path.isfile(os.path.join(SHAREPATH, score_defs_set))\
                                        and score_defs_set.startswith('score_defs_20')]
    if debug:
        print('score_defs_list:')
        pprint(score_defs_list)
    
    # first get the timestamps for each of the backups
    defs_by_datetime = []
    for def_name in score_defs_list:
         defs_by_datetime.append((datetime.fromtimestamp(os.path.getmtime(os.path.join(SHAREPATH, def_name))), def_name))

    # sort them in descending time order (most recent -> oldest)
    defs_by_datetime = sorted(defs_by_datetime, key=itemgetter(0), reverse=True)
    if debug:
        print('\ndefs_by_datetime:')
        pprint(defs_by_datetime, width=180)

    trimmed_list = []
    if len(score_defs_list) <= MAX_SCORE_DEFS_FILES:
        for next in defs_by_datetime:
            trimmed_list.append(next[1])
            if debug:
                    print('\ntrimmed_list, no trim needed:')
                    pprint(trimmed_list, width=80)
            
        return trimmed_list
    else:
        # trim the list
        # format of list
        #   defs_by_datetime:
        #       [(datetime.datetime(2022, 7, 15, 9, 29, 46, 996381), 'score_defs_2022-07-15_16_29.json'),
        #        (datetime.datetime(2022, 7, 15, 9, 14, 18, 463488), 'score_defs_2022-07-15_16_14.json'),
        #
        while len(defs_by_datetime) > MAX_SCORE_DEFS_FILES:
            os.remove(os.path.join(SHAREPATH, defs_by_datetime.pop()[1]))
            
        # and return the list of remaining backups, most recent first
        
        for next in defs_by_datetime:
            trimmed_list.append(next[1])
        if debug:
                print('\ntrimmed_list after trim:')
                pprint(trimmed_list, width=80)
        return trimmed_list


#
# -------------------------------------------------------------------------------
#
def score_pedagogical_type_of(pitch_set, debug=False):
    """
    a. Pedagogical type of score
        We need to know this in order to use the correct HTML template in React & to update the site navigation
        i. 3-Note
            1. do/re/mi
            2. mi/sol/la

        ii. 4-Note
            1. do/re/mi/sol

        iii. Pentatonic
            1. do/re/mi/sol/la

        iv. Diatonic
            1. do/re/mi/fa/sol

        v. Extended Diatonic
            1. do/re/mi/fa/sol/la
            2. ti/do/re/mi/fa/sol
    """

    for note_set, score_type in pedagogical_type_to_notes_map:
        if pitch_set <= note_set:
            if debug:
                print(f'for the Score\'s pitch set "{pitch_set}" and Pedagogical note_set "{note_set}", the type is "{score_type}"')
            return score_type

    if debug:
        print(f'for pitch set "{pitch_set}" and note_set "{note_set}", the type is None (unrecognized)')

    return None


#
# --------------------------------------------------------------
#
def export_score_defs(the_score_defs, verbose=False):
    """
    """
    # Save to the score_defs dict to a json file in _share
    #
    try:
        defs_file_path = os.path.join(SHAREPATH, SCORE_DEF_FILE)
        with open(defs_file_path, "w") as json_score_defs:
            if verbose:
                print(f"\n... creating {defs_file_path} ...")
            json.dump(the_score_defs, json_score_defs, sort_keys=True)
        if verbose:
            print(f"\t- success\n")
            print('\nTrimming score_defs list')
            print(f"\t- success\n")
        the_list = trim_score_defs()

        return the_list[0]
    except Exception as why:
        if verbose:
            print(f"\t- failed with exception {why}\n")
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

    Note: Lyrics have four properties: text, number, identifier, syllabic (single, begin, middle, end, or (not in musicxml) composite)
    """
    
    #debug = True

    # --------------------------------------------------------------
    def add_notes(score_data, debug=False):
        """
        Relative Name		Quarter Length x 1000 
        			Use Case 1		Use Case 2		Use Case 3
        Tiny			250			500			    1000
        Short			500			1000			2000
        Kinda Short		750			1500			3000
        Medium			1000		2000			4000
        Kinda Long		1500		3000			6000
        Long			2000		4000			8000
        
        """

        # All the notes in the score...
        # Recover and set info provided by Music21
        # Later we'll m,assage some of that data for our app's needs
        #
        
        duration_set = set()
        
        for index, a_note in enumerate(our_score.recurse().getElementsByClass(m21_lib.note.GeneralNote)):
            if a_note.isNote:
                if debug:
                    print(f'\t{score_data["our_metadata_title"]} Notes:')

                # Convert note to solfege to facilitate score transposition
                #
                solfege_note = solfege_of(a_note.name, score_data["our_key"], score_data["our_tonality"], debug=False)
                
                # Collect its duration relative to a quarter note
                # And convert to an integer,by multipliying it by 1000 to shift the value into the positive natural number range and type convert to int
                #
                duration_set.add(int(a_note.duration.quarterLength*1000))

                # Add the processed note to the score_def (temp value for duration)
                score_data['notes'].append({"pitch": solfege_note, 
                                            "duration": int(a_note.duration.quarterLength*1000),
                                            "lyric": (a_note.lyrics[0].text) if a_note.lyrics[0].syllabic in ['single', 'end'] else a_note.lyrics[0].text + '-'})

                if debug:
                    print(f"\t{index+1:2} {score_data['notes'][-1]}")
                    print(f'"pitch": {solfege_note}, "duration": {a_note.duration.quarterLength}, "lyric": ({a_note.lyrics[0].number}, {a_note.lyrics[0].syllabic}, {a_note.lyrics[0].text})')
            elif a_note.isRest:
                if debug:
                    print(f"\t{index+1:2} Rest")
                raise ValueError

        
        # During the initial analysis, we collected the set of note durations for the score
        # Go back to score_data['notes'] where the duration field currently contains the absolute note durations
        # here we replace them by the relative durations, e.g. an egth note is probably considered of short duration, a whole note as long
        #
        relative_durations = ['Tiny', 'Short', 'Kinda_Short', 'Medium', 'Kinda_Long', 'Long']

        # What is the shortest duration in the score?
        #
        shortest_duration_in_score = sorted(list(duration_set))[0]

        if shortest_duration_in_score < 500:
            permitted_durations_list = [ 250, 500, 750, 1000, 1500, 2000]
        elif shortest_duration_in_score < 1000:
            permitted_durations_list = [500, 1000, 1500, 2000, 3000,4000]
        elif shortest_duration_in_score == 1000:
            permitted_durations_list = [1000, 1500, 2000, 3000,4000, 6000, 8000]
        else:
            raise ValueError

        permitted_durations_set = set(permitted_durations_list)
        
        # Figure out the relative duration (short medium long ...) to drive selection of keyboard displays in the front end
        #
        if debug:
            print(f'score duration_set: "{duration_set}" - "{permitted_durations_set}" (permitted_durations_set)')

        for next_note in score_data['notes']:
            # Are all the score's notes in our permitted list?
            if duration_set <= permitted_durations_set:
                
                # what's the index difference between the shortest_duration_in_score and this note in the permitted duration list?
                #
                shortest_duration_in_score_index = permitted_durations_list.index(shortest_duration_in_score)
                note_duration_index              = permitted_durations_list.index(next_note["duration"])
                if debug:
                    print(f'shortest_duration_in_score = {shortest_duration_in_score}, shortest_duration_in_score_index: {shortest_duration_in_score_index}, note duration index = {note_duration_index}')

                # Now do the mapping from an absolute duration to duration relative to rest of the durations in the score""
                #   - with the shortest_duration_in_score_index mapping onto relative_durations[0], what's the map for this note?
                #
                next_note["duration"] = relative_durations[shortest_duration_in_score_index:][note_duration_index]
                
                if debug:
                    print(f'next_note["duration"] = {next_note["duration"]}')
                    print(f'"pitch": {solfege_note}, "duration": {a_note.duration}, "lyric": ({a_note.lyrics[0].number}, {a_note.lyrics[0].syllabic}, {a_note.lyrics[0].text})')

        if debug:
            print('donedone')

        return score_data

    # --------------------------------------------------------------


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

    """
    if True: #debug:
        for a_note in our_score.recurse().getElementsByClass(m21_lib.note.GeneralNote):
            if a_note.isNote:
                print(f"\n\tour_score: {a_note}, type: {type(a_note)}")
                print(f"\t\tour_score: FullName : {a_note.fullName}, type: {type(a_note.fullName)}")
                print(f"\t\tour_score: Name     : {a_note.name}, type: {type(a_note.name)}")
                print(f"\t\tour_score: Pitch    : {a_note.pitch}, type: {type(a_note.pitch)}")
                print(f"\t\tour_score: Duration : {a_note.duration.type}, type: {type(a_note.duration.type)}")
                print(f"\t\tour_score: Quarter  : {a_note.duration.quarterLength}, type: {type(a_note.duration.quarterLength)}")
                print(f"\t\tour_score: Lyric    : \"{a_note.lyric}\", type: {type(a_note.lyric)}")
            elif a_note.isRest:
                pass

        print()
    """

    # Our score needs to contain exactly 1 part
    #
    if len(our_score.parts) == 1:
        score_data['notes'] = []
        
        

        # and it needs to be in our permitted range 
        #
        if score_data["max_interval"].name in CHROMATIC_INTERVALS:
            # A time signature must exists and its numerator must be divisable by 2 or 3
            #
            if score_data["our_ts_numerator"]:
                try:
                    if (score_data["our_ts_numerator"] % 3) == 0:
                        # Notes must all be from ONE of the lists
                        for next_possible in [RHYTHM_C_3_1]:
                            if right_notes(our_score, next_possible, debug=debug):
                                # Passed all the tests, so a success
                                convertable = True
                                score_data['meter'] ='Triple'
                                add_notes(score_data)
                                if log_results:
                                        result_list.append(['Pass', f'{score_data["our_key"]} {score_data["our_tonality"]}', this_meta_entry.sourcePath, score_data])
                                return True, result_list
                            elif log_results:
                                result_list.append(['Fail', 'unwanted note element {}', this_meta_entry.sourcePath])
                    elif (score_data["our_ts_numerator"] % 2) == 0:
                        # Notes must all be from the list
                        for next_possible in [RHYTHM_C_2_1, RHYTHM_C_2_2, RHYTHM_C_2_3]:
                            if right_notes(our_score, next_possible, debug=debug):
                                # Passed all the tests, so a success
                                convertable = True
                                score_data['meter'] ='Duple'
                                add_notes(score_data)
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
        print(f'\nconvert_score_to_score_def: raw score data:')
        pprint(score_data, indent=4)
        print('\n')

    # Do the conversions
    pitch_set = set()

    converted_score = ScoreDef(title=score_data['our_metadata_title'], meter=score_data['meter'])

    for next_note in score_data['notes']:
        converted_score.add_note_def(next_note)
        pitch_set.add(next_note['pitch'])

    if debug:
        print(f'pitch_set = {pitch_set}')

    converted_score.add_pedagogical_score_type(score_pedagogical_type_of(pitch_set))

    if debug:
        print('\nconvert_score_to_score_def: converted_score:')
        pprint(converted_score.score_def, width=180, indent=4)
        print('\n')

    return converted_score


#
# --------------------------------------------------------------
#
def convert_pass_list_to_score_defs(pass_list, show_score=False, verbose=True, debug=False):
    """
    Convert each score in the pass_list and collect them into score_defs
    score_defs is converted to and saved in a sJSON definition (export_score_defs()) used by the frontend (as defined in the ScoreDef class)
    """

    score_defs = {}

    if len(pass_list)>1:
        for index, next_score in enumerate(pass_list[1:]): # skip the pass_list heading row
            if debug:
                print(f'\nconvert_pass_list_to_score_defs: (Score {index+1}) ------------------------------------------------------------------------')

            # Do the conversion
            #
            next_def = convert_score_to_score_def(next_score, show_score=False, verbose=True, debug=debug)
            if debug:
                print(f"\nconvert_pass_list_to_score_defs: Adding \"{next_def.score_def['score_data']['title']}\" to score_defs")

            # Add the score_def to score_defs
            #
            score_defs[next_def.score_def['score_data']['title']] = next_def.get_score_def()

    return score_defs


# --------------------------------------------------------------
# Main
# --------------------------------------------------------------
#

if __name__ == '__main__':
    """
    """

    debug = False

    for key in ['C','B-', 'D']:
        syllable = solfege_of('A', key, 'major', debug=False)

    print(f'\npianoPreReading - Create Score Defs: Python  Version: {sys.version.split("(")[0]}')
    print(f'pianoPreReading - Create Score Defs: Music21 Version: {m21_lib.VERSION_STR}\n')

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
    print('\n\n')
    print('# ------------------------------------------------------------------------------------------------------------------')
    print('#')
    print('#                            Exporting Definitions to _share')
    print('#')
    print('# ------------------------------------------------------------------------------------------------------------------')
    
    export_score_defs(score_defs, verbose=True)
    
    print('\npianoPreReading - Create Score Defs: Done\n\n')


