import React from 'react';
import { useParams } from "react-router-dom";


let score_defs = {
    "Hot Cross Buns": {
        "notes": [
            {"pitch": "Mi", "duration": "short", "lyric": "Hot"},
            {"pitch": "Re", "duration": "short", "lyric": "cross"},
            {"pitch": "Do", "duration": "medium", "lyric": "buns"},
        ],
        "score_data": {
            "html_page_map": "duple_template_fingerings.html",
            "meter": "duple",
            "pedagogical_score_type": "3 Note",
            "score_def_timestamp": "2022-07-05 13:05:36",
            "score_def_version": 1.0,
            "title": "Hot Cross Buns"
        }
    },
    "Au Claire de la Lune": {
        "notes": [
            {"pitch": "Do", "duration": "short", "lyric": "In"},
            {"pitch": "Do", "duration": "short", "lyric": "the"},
            {"pitch": "Do", "duration": "short", "lyric": "even-"},
            {"pitch": "Re", "duration": "short", "lyric": "ing"},
        ],
        "score_data": {
            "html_page_map": "duple_template_fingerings.html",
            "meter": "duple",
            "pedagogical_score_type": "3 Note",
            "score_def_timestamp": "2022-07-05 13:05:36",
            "score_def_version": 1.0,
            "title": "Au Claire de la Lune"
        }
    },
    "I Have a Dog": {
        "notes": [
            {"pitch": "Mi", "duration": "medium", "lyric": "I"},
            {"pitch": "Mi", "duration": "short", "lyric": "have"},
            {"pitch": "Re", "duration": "short", "lyric": "a"},
            {"pitch": "Do", "duration": "medium", "lyric": "dog"},
        ],
        "score_data": {
            "html_page_map": "duple_template_fingerings.html",
            "meter": "duple",
            "pedagogical_score_type": "4 Note",
            "score_def_timestamp": "2022-07-05 13:05:36",
            "score_def_version": 1.0,
            "title": "I Have a Dog"
        }
    },
}

/*
TODO:
    1) Alphabetize the returned lists
    2) Integrate the live program data
    3) Expand to include pentatonic and diatonic titles
    4) Refactor to have one function doing all the filtering
*/

export function threeNoteTitles() {
    /*
    Filter the imported JSON object for songs using only three notes and alphabetize the resulting list.
    These titles will be used for the left-hand navigation on the 3-Note page.
    */
    let title_list = []
    for (const next_song in score_defs) {
        if (score_defs[next_song].score_data.pedagogical_score_type === '3 Note') {
            title_list.push(score_defs[next_song].score_data.title)
            title_list.sort()
        }
    }
    return title_list
}

export function fourNoteTitles() {
    /*
    Filter the imported JSON object for songs using only four notes and alphabetize the resulting list.
    These titles will be used for the left-hand navigation on the 4-Note page.
    */
    let title_list = []
    for (const next_song in score_defs) {
        if (score_defs[next_song].score_data.pedagogical_score_type === '4 Note') {
            title_list.push(score_defs[next_song].score_data.title)
        }
    }
    return title_list
}

export function allTitles() {
    let title_list = []
    for (const next_song in score_defs) {
        title_list.push(score_defs[next_song].score_data.title)
    }
    return title_list
}

export function getTitle(title) {
    for (const next_song in score_defs) {
        if (next_song === title) {
            return score_defs[title]
        }
    }
}







