import React from 'react';
import { useParams } from "react-router-dom";

let score_defs = {
    "Hot Cross Buns": {
        "notes": [
            {"pitch": "Mi", "duration": "Quarter", "lyric": "Hot"},
            {"pitch": "Re", "duration": "Quarter", "lyric": "cross"},
            {"pitch": "Do", "duration": "Half", "lyric": "buns"},
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
    "au_claire_de_la_lune": {
        "notes": [
            {"pitch": "Do", "duration": "Quarter", "lyric": "In"},
            {"pitch": "Do", "duration": "Quarter", "lyric": "the"},
            {"pitch": "Do", "duration": "Quarter", "lyric": "even-"},
            {"pitch": "Re", "duration": "Quarter", "lyric": "ing"},
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
    "i_have_a_dog": {
        "notes": [
            {"pitch": "Mi", "duration": "Quarter", "lyric": "I"},
            {"pitch": "Mi", "duration": "Eighth", "lyric": "have"},
            {"pitch": "Re", "duration": "Eighth", "lyric": "a"},
            {"pitch": "Do", "duration": "Quarter", "lyric": "dog"},
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

export function threeNoteTitles() {
    let title_list = []
    for (const next_song in score_defs) {
        if (score_defs[next_song].score_data.pedagogical_score_type === '3 Note') {
            title_list.push(score_defs[next_song].score_data.title)
        }
    }
    return title_list
}

export function fourNoteTitles() {
    let title_list = []
    for (const next_song in score_defs) {
        if (score_defs[next_song].score_data.pedagogical_score_type === '4 Note') {
            title_list.push(score_defs[next_song].score_data.title)
        }
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

export function xxxgetTitle(title) {
  return score_defs.find(
    (song) => score_defs === title
  );
}



export function xxxsongPage() {
    let params = useParams()
    let song = getTitle(params.songTitle);
    
    return (
        <main style={{ padding: "1rem" }}>
            <h2>{params.songTitle}</h2>
            <p> how now brown cow</p>
        </main>
    );
}







