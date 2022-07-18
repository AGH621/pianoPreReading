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
import pytz
from datetime import datetime
tz = pytz.timezone('US/Pacific')
the_time = datetime.now(tz).strftime("%Y-%m-%d %H:%M:%S")

import json

from pprint import pprint

score_def = {'score_data': {}, 'notes':  []}

#---------------------------------------------------------------
# ------      ScoreDef  Class    ------------------------
#---------------------------------------------------------------

class ScoreDef():
    """
    note_info = () # e.g. ('note_id', 'duration', 'lyrics', 'chord', 'note_map_id')
    score_def = {'score_data': {
                                  'title'                 : None,
                                  'pedagogical_score_type': None,
                                  'meter'                 : None,
                                  'html_page_map'         : None
                                 },

                   'notes':      [note_info]

                  }

    """
    #----------------------------------------------
    # ------    Class Constants/Variables    ------
    #
    note_info_def = ('note_id', 'duration', 'lyrics', 'chord', 'note_map_id')

    NOTE_ID_POS     = note_info_def.index('note_id'), 
    DURATION_POS    = note_info_def.index('duration'), 
    LYRICS_POS      = note_info_def.index('lyrics'), 
    CHORD_POS       = note_info_def.index('chord'), 
    NOTE_MAP_ID_POS = note_info_def.index('note_map_id')

    #----------------------------------------------
    # ----------  Private methods  ----------------
    #
    def __init__(self, title                 ='tbd',
                       pedagogical_score_type='',
                       meter                 ='',
                       html_page_map         =''):
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
                                          'html_page_map'         : html_page_map,
                                          'score_def_version'     : self.DEF_VERSION,
                                          'score_def_timestamp'   : the_time
                                        },

                          'notes'     : [()]

                         }


    #----------------------------------------------
    # ----------  Public methods  -----------------
    #

    def get_score_title(self):
        """
        """
        return self.score_def['score_data']['title']


    def add_note_def(self, note_id, duration, lyrics, chord, note_map_id):
        """
        """
        self.score_def['notes'].append((note_id, duration, lyrics, chord, note_map_id))


    def json_of_note_def(self):
        """
        """
        json_object = json.dumps(self.score_def, indent = 4)
        return json_object


    def export_json_of_note_def(self):
        """
        """
        json_object = json.dumps(self.score_def, indent = 4)
        return json_object


#
# --------------------------------------------------------------
#

if __name__ == '__main__':
    """
    """
    
    ThisScore = ScoreDef(title                 ='First Try',
                         pedagogical_score_type='Type 1',
                         meter                 ='',
                         html_page_map         ='pattern 1')
                         
    ThisScore.add_note_def('A_flat' , 'eigth'   , 'abc'   , 'I'    , 'whatever')
    ThisScore.add_note_def('B_sharp', 'quarter' , 'cde'   , 'V7'   , 'whatever else')

    pprint(ThisScore.json_of_note_def())


