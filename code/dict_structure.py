#!/usr/bin/env /usr/local/bin/python3
"""
Created by Jim Kaubisch on 2022-17-02.

Proposed structure of the Python Dictionary (after conversion to JSON Object) acting as interface 
between the Python backend and JavaScript frontend reflecting the specification above


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

from pprint import pprint

score_def = {'score_data': {}, 'notes':  []}

#
# --------------------------------------------------------------
#

if __name__ == '__main__':

    score_def['score_data'] = {'title': 'First Try', 
                                'pedagogical_score_type': 'Type 1',
                                'meter'                 : None,
                                'html_page_map'         : 'pattern 1'
                               }

    # note_info = () # e.g.   ('note_id', 'duration', 'lyrics', 'chord', 'note_map_id') 
    score_def['notes'].append(('A_flat' , 'eigth'   , 'abc'   , 'I'    , 'whatever'     ))
    score_def['notes'].append(('B_sharp', 'quarter' , 'cde'   , 'V7'   , 'whatever else'))

    pprint(score_def)

