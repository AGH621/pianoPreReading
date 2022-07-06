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
    "Au Claire de la Lune": {
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
}

function getTitles() {
    //for (const next_song in score_defs)
        //console.log(score_defs[next_song].score_data)
    
    let title_list = []
    for (const next_song in score_defs)
        title_list.push(score_defs[next_song].score_data.title)
    console.log(title_list)
    return title_list
}

getTitles()