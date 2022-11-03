/*
Remove Specific Songs
Created By: Anne Hamill
Date: 22 October 2022
Description: Remove songs from the Score Defs JSON that should not be in the piano book,
but cannot be discovered by Music21.
*/

import scoreDefs from "../data/score_defs.json"
import {cutList} from "../data/cut_list"

export default function removeSong() {
    
    for (let song in scoreDefs) {
        if (cutList.includes(song)) {
            delete scoreDefs[song]
        }
    }
} 