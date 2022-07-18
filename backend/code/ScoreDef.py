#!/usr/bin/env /usr/local/bin/python3
"""
Created by Jim Kaubisch on 2022-17-02.

Proposed structure of the Python Dictionary (after conversion to JSON Object) acting as interface
between the Python backend and JavaScript frontend reflecting the specification above

#!/usr/bin/env /usr/local/bin/python3
Created by Jim Kaubisch on 2022-17-02.

Proposed structure of the Python Dictionary (after conversion to JSON Object) acting as interface
between the Python backend and JavaScript frontend reflecting the specification above


    
"""
import os
import pytz
from datetime import datetime
tz = pytz.timezone('US/Pacific')
the_time = datetime.now(tz).strftime("%Y-%m-%d %H:%M:%S")

import json

from pprint import pprint

score_def = {'score_data': {}, 'notes':  []}

# Create a map from pitches in a score to a pedagogical_type
#   For each pedagogical_type, list the solfege pitches which define the type
#   The pitches are defined as a set of pitches, e.g. set(['do','re','mi'])
#   The map is a list of duples consisting of note sets and names for the corresponding pedagogical_type
#
pedagogical_type_to_notes_map = []

pedagogical_type_to_notes_map.append((set(['do','re','mi'])                 , '3-Note'))
pedagogical_type_to_notes_map.append((set(['mi','sol','la'])                , '3-Note'))
pedagogical_type_to_notes_map.append((set(['do','re','mi','sol'])           , '4-Note'))
pedagogical_type_to_notes_map.append((set(['do','re','mi','sol','la'])      , 'Pentatonic'))
pedagogical_type_to_notes_map.append((set(['do','re','mi','fa','sol'])      , 'Diatonic'))
pedagogical_type_to_notes_map.append((set(['do','re','mi','fa','sol','la']) , 'Extended Diatonic'))
pedagogical_type_to_notes_map.append((set(['do','re','mi','fa','sol','ti']) , 'Extended Diatonic'))

#---------------------------------------------------------------
# ------      ScoreDef  Class    ------------------------
#---------------------------------------------------------------

class ScoreDef():
    """
    note_info_def = {"pitch": "tbd", "duration": "tbd", "lyric": "tbd"}

    score_def = {'score_data': {
                                  'title'                 : None,
                                  'pedagogical_score_type': None,
                                  'meter'                 : None
                                 },

                 'notes':      [note_info_def]

                }

    """

    #----------------------------------------------
    # ------    Class Constants/Variables    ------
    #

    note_info_def = {"pitch": "tbd", "duration": "tbd", "lyric": "tbd"}

    #----------------------------------------------
    # ----------  Private methods  ----------------
    #
    def __init__(self, title                 ='tbd',
                       pedagogical_score_type='tbd',
                       meter                 ='tbd'):
        """
        """

        #
        #-------------------------------------------------
        # ------    Per Instance Variables    ------------
        #

        self.DEF_VERSION = 1.0
        self.score_def = {'score_data': {
                                          'title'                 : title,
                                          'pedagogical_score_type': pedagogical_score_type,
                                          'meter'                 : meter,
                                          'score_def_version'     : self.DEF_VERSION,
                                          'score_def_timestamp'   : the_time
                                        },

                          'notes'     : []

                         }


    #----------------------------------------------
    # ----------  Public methods  -----------------
    #

    def get_score_title(self):
        """
        """
        return self.score_def['score_data']['title']

 # ------
    def add_note_def(self, note_info_def):
        """
        """
        self.score_def['notes'].append(note_info_def)

 # ------
    def add_pedagogical_score_type(self, score_type):
        """
        """
        self.score_def['score_data']['pedagogical_score_type'] = score_type

 # ------
    def get_score_def(self):
        """
        """
        return self.score_def


#
# --------------------------------------------------------------
#
SHAREPATH = '/Users/jimkaubisch/Projects/pianoPreReading/_share'
SCORE_DEF_FILE = f"score_defs_test.json"

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
        return defs_file_path
    except Exception as why:
        if verbose:
            print(f"- failed with exception {why}\n")
        raise

def read_json_file(json_path):
    with open(json_path, "rb") as tempfile:
        try:
            try:
                # is it a string?
                return json.load(tempfile)
            except (JSONDecodeError, TypeError):
                # No
                pass
        except Exception as why:
            # We have no idea what went wrong
            exception_print(why)
            raise

if __name__ == '__main__':
    """
    """

    debug = True
    
    # Empty score_defs dict
    score_defs = {}

    # Create a sample ScoreDef
    #
    ThisScore = ScoreDef(title                 ="Hot Cross Buns",
                         pedagogical_score_type="3 Note",
                         meter                 ="duple"
                        )

    ThisScore.add_note_def({"pitch": "Mi", "duration": "Quarter", "lyric": "Hot"})
    ThisScore.add_note_def({"pitch": "Re", "duration": "Quarter", "lyric": "cross"})
    ThisScore.add_note_def({"pitch": "Do", "duration": "Half", "lyric": "buns"})

    # Add its score_def to the score_defs dict with key == to the score title
    #
    score_defs[ThisScore.get_score_title()] = ThisScore.score_def

    if debug:
        print(f'\nThis is the python dict of the score_defs:')
        pprint(score_defs)
        print()

    # Export it to where web side will pick it up (but really just a test file here)
    #
    json_path = export_score_defs(score_defs, verbose=False)
    if debug:
        print(f'json path: {json_path}')

    # Read it back in to see if all is well
    #
    json_object = read_json_file(json_path)
    
    print(f'\nRead file at "{json_path}" back in - ok')
    print(f" Here's the result)\n")
    pprint(json_object, indent=4)

    # All done

