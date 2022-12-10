# Piano Pre-Reading Book
## Deployment
Currently I'm using GitHub Pages: <a href="https://agh621.github.io/pianoPreReading/" target="_blank">Piano PreReading Book</a>

## Purpose
This project serves two purposes.
1. It is a portfolio project to demonstrate my web development skills and document what I've learned.  It will become more sophisticated as I get better at this.
2. It is a digital version of a piano book that I wrote many year ago, and still use in my music studio today.

## Progress
**December 2022**

Front End - Launched on Version 3.0 GitHub Pages.

Back End - Crossing t’s, dotting i’s

**November 2022**

Front End - Proofreading and minor appearance changes.

Back End
  1. Added rest lyrics
  2. Score ignore and manual keysignature override functionality
  3. Minor Key Pedagogical Category Research
  4. Minimum Unique Pitch

**October 2022**

Front End - Consulted with Madeline Tzifas (a visual arts student) on the color palette and adopted her suggestions.  Finalized the site theme.

Back End
  1. Added score file timestamps
  2. Updated ScoreDef (see _Footnote_)

**September 2022**

Front End - Continued working on MUI components. Wrote text of home, about, takadimi, and unit pages. Changed the color palette of the keyboard diagrams.

Back End - Refined score_pedagogical Categories determination

**August 2022**

Front End - Discovered Material UI (MUI) and decided to adopt it. Redesigned and rebuilt the site to utilize MUI library.

Back End
  1. Added slur lyrics
  2. Rests  
  3. Score analysis refinements

**July 2022**

Front End - Started using React to render site pages. Figured out how to create radio buttons for the song variations.  Attempted to add finger numbers for each song and the ability to change them based on the song variation being displayed. Put the feature on hiatus due to its complexity. 

Back End
  1. Started exporting data to frontend 
  2. Update ScoreDef

**June 2022** 

Front End - Designed and implemented some basic interactivity via JavaScript.
    1. Switch the notation between black and white keys
    2. Display chord notation instead of melody
    3. Start learning React, which will be used to do the page rendering.

Back End
  1. Verson 1 of score filters
  2. key signature
  3. ScoreDef
  4. solfège translation

**May 2022**

Streamlined and improved the CSS.  Improved this README with basic Markdown.

Started work on generating new pages automatically from an XML or musicXML file.  This feature is using Python and its Music21 library to determine whether a song should be included here and to extract music information from them.  My collaborator, Jim K, is doing the coding for these parts.  

**April 2022**

Launched Version 2.0 replacing the old, paper-based version dating from 2013. It is basic, hand-written, hand-designed HTML/CSS.

_Footnote_ - ScoreDef is a (Python) class defining all the relevant characteristics of a score used by the Book. These include primarily its Title, meter, key, tonality and pedagogical_score_type. The last is a categorization of its characteristics from a teaching perspective based on:
	 - tonality, 
	 - pitch set (and number of unique  pitches) and 
	 - rhythm- 
Sample values are 3-Note or Pentatonic

## License
The content of this project itself is licensed under the  <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>, and the underlying source code used to format and display that content is licensed under the <a href="https://github.com/github/choosealicense.com/blob/gh-pages/LICENSE.md">MIT license</a>.
