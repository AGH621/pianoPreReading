/*
    Transpose
    Created by: Anne Hamill
    Created on: 1 December 2022
    App Version: 3.0
    Description: Collection of all the transposing functions
*/

export function black_transpose() {
/*
    Transponse the song to the black keys by remapping the solfege syllables to different diagrams.
*/
    //Find all the notes on the page by type.
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    //Change the diagram for each instance of each type.
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SingleFsharp
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = SingleGsharp
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = SingleAsharp
        }
    for (let x=0; x<the_bbs.length; x++){
        the_bbs[x].src = SingleB
        }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = SingleCsharp
        }
    for (let x=0; x<the_ds.length; x++){
        the_ds[x].src = SingleDsharp
        }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = SingleF
        } 
}


export function white_transpose() {
/*
    Transponse the song to the white keys by remapping the solfege syllables to different diagrams.
*/
    //Find all the notes on the page by type.
    let the_fsharps = document.getElementsByClassName('pitch do')
    let the_gsharps = document.getElementsByClassName('pitch re')
    let the_asharps = document.getElementsByClassName('pitch mi')
    let the_bs      = document.getElementsByClassName('pitch fa')
    let the_csharps = document.getElementsByClassName('pitch sol')
    let the_dsharps = document.getElementsByClassName('pitch la')
    let the_fs      = document.getElementsByClassName('pitch ti')
    
    //Change the diagram for each instance of each type.
    for (let x=0; x<the_fsharps.length; x++){
        the_fsharps[x].src = SingleF
        }
    for (let x=0; x<the_gsharps.length; x++){
        the_gsharps[x].src = SingleG
        }
    for (let x=0; x<the_asharps.length; x++){
        the_asharps[x].src = SingleA
        }
    for (let x=0; x<the_bs.length; x++){
        the_bs[x].src = SingleAsharp
        }
    for (let x=0; x<the_csharps.length; x++){
        the_csharps[x].src = SingleC
        }
    for (let x=0; x<the_dsharps.length; x++){
        the_dsharps[x].src = SingleD
        }
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SingleE
        }
}


export function white_2note_chords() {
/*
    Transponse the song to the white 2 note chords by remapping the solfege syllables to different diagrams.
*/
    //Find all the notes on the page by type.
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    //Change the diagram for each instance of each type.
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SimpleWhtI
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = SimpleWhtV7
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = SimpleWhtI
        }
    for (let x=0; x<the_bbs.length; x++){
            the_bbs[x].src = SimpleWhtIV
            }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = SimpleWhtV7
        }
    for (let x=0; x<the_ds.length; x++){
            the_ds[x].src = SimpleWhtIV
            }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = SimpleWhtV7
        }
}


export function black_2note_chords() {
/*
    Transponse the song to the black 2 note chords by remapping the solfege syllables to different diagrams.
*/
    //Find all the notes on the page by type.
    let the_fs = document.getElementsByClassName('pitch do')
    let the_gs = document.getElementsByClassName('pitch re')
    let the_as = document.getElementsByClassName('pitch mi')
    let the_bbs = document.getElementsByClassName('pitch fa')
    let the_cs = document.getElementsByClassName('pitch sol')
    let the_ds = document.getElementsByClassName('pitch la')
    let the_es = document.getElementsByClassName('pitch ti')
    
    //Change the diagram for each instance of each type.
    for (let x=0; x<the_fs.length; x++){
        the_fs[x].src = SimpleBlkI
        }
    for (let x=0; x<the_gs.length; x++){
        the_gs[x].src = SimpleBlkV7
        }
    for (let x=0; x<the_as.length; x++){
        the_as[x].src = SimpleBlkI
        }
    for (let x=0; x<the_bbs.length; x++){
            the_bbs[x].src = SimpleBlkIV
            }
    for (let x=0; x<the_cs.length; x++){
        the_cs[x].src = SimpleBlkV7
        }
    for (let x=0; x<the_ds.length; x++){
            the_ds[x].src = SimpleBlkIV
            }
    for (let x=0; x<the_es.length; x++){
        the_es[x].src = SimpleBlkV7
        }
}