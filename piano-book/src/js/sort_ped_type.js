

import React from 'react';
import { useParams } from "react-router-dom";

import scoreDefs from "../data/score_defs.json"



export function threeNoteTitles() {
    /*
    Filter the imported JSON object for songs using only three notes and alphabetize the resulting list.
    These titles will be used for the left-hand navigation on the 3-Note page.
    */
    
    let title_list = []
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.pedagogical_score_type === '3-Note') {
            title_list.push(scoreDefs[next_song].score_data.title)
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
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.pedagogical_score_type === '4-Note') {
            title_list.push(scoreDefs[next_song].score_data.title)
        }
    }
    return title_list
}

export function fiveFingerTitles() {
    /*
    Filter the imported JSON object for songs using only four notes and alphabetize the resulting list.
    These titles will be used for the left-hand navigation on the 4-Note page.
    */
    
    let title_list = []
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.pedagogical_score_type === '5-Finger') {
            title_list.push(scoreDefs[next_song].score_data.title)
        }
    }
    return title_list
}

export function pentatonicTitles() {
    /*
    Filter the imported JSON object for songs using only four notes and alphabetize the resulting list.
    These titles will be used for the left-hand navigation on the 4-Note page.
    */
    
    let title_list = []
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.pedagogical_score_type === 'Pentatonic') {
            title_list.push(scoreDefs[next_song].score_data.title)
        }
    }
    return title_list
}

export function diatonicTitles() {
    /*
    Filter the imported JSON object for songs using only four notes and alphabetize the resulting list.
    These titles will be used for the left-hand navigation on the 4-Note page.
    */
    
    let title_list = []
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.pedagogical_score_type === 'Diatonic') {
            title_list.push(scoreDefs[next_song].score_data.title)
        }
    }
    return title_list
}

export function minorTitles() {
    /*
    Filter the imported JSON object for songs using only four notes and alphabetize the resulting list.
    These titles will be used for the left-hand navigation on the 4-Note page.
    */
    
    let title_list = []
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.pedagogical_score_type === 'minor') {
            title_list.push(scoreDefs[next_song].score_data.title)
        }
    }
    return title_list
}

export function allTitles() {
    
    let title_list = []
    for (const next_song in scoreDefs) {
        title_list.push(scoreDefs[next_song].score_data.title)
    }
    return title_list
}

export function getTitle(title) {
    
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.title === title) {
            return scoreDefs[next_song]
        }
    }
}





