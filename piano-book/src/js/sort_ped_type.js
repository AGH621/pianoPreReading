/*
Sort By Pedagogical Type
Created By: Anne Hamill
Date: 29 May 2022
Description: Take the imported JSON data and sort it into units based on the value of pedagogical_score_type.
Return arrays of songs title with the same type.
TODO: Can all these functions (save the last) be combined into one and still return the correct array?
*/

//External imports
import React from 'react';
import { useParams } from "react-router-dom";

//Internal imports
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
    These titles will be used for the left-hand navigation on the 5-Finger page.
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
    These titles will be used for the left-hand navigation on the pentatonic page.
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
    These titles will be used for the left-hand navigation on the diatonic page.
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
    These titles will be used for the left-hand navigation on the minor page.
*/
    
    let title_list = []
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.pedagogical_score_type === 'Natural Minor') {
            title_list.push(scoreDefs[next_song].score_data.title)
        }
    }
    return title_list
}

export function allTitles() {
/*
    Return an array of all titles regardless of pedagogical type.
*/
    let title_list = []
    
    //Use this code block for all songs including minor ones.
    // for (const next_song in scoreDefs) {
    //     title_list.push(scoreDefs[next_song].score_data.title)
    // }
    
    //Use this code block to disable rendering minor songs.
    for (const next_song in scoreDefs) {
            if (scoreDefs[next_song].score_data.pedagogical_score_type !== 'Natural Minor') {
                title_list.push(scoreDefs[next_song].score_data.title)
            }
        }
    return title_list
}

export function getTitle(title) {
/*
    Return the whole ScoreDef entry for a given title.
*/
    for (const next_song in scoreDefs) {
        if (scoreDefs[next_song].score_data.title === title) {
            return scoreDefs[next_song]
        }
    }
}





