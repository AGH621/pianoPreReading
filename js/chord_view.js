/*
Chord View
Created By: Anne Hamill
Date: 29 May 2022
Description: Change the symbolic notation images from melody notes to chord diagrams.
TODO:
    1) Modify existing 3-note functions to hide finger numbers in chord view.
    2) Create a single generalized function which can iterate through different classes and replace different images.
*/

console.log("Chord view is running")


//Iterate through each one. Locate the melody note image.
function white_3note_chords(){
    let white_tonic_block = document.getElementsByClassName('tonic');
    let white_dominant_block = document.getElementsByClassName('dominant');
    
    for (let x=0; x<white_tonic_block.length; x++) {
        wi_img = white_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<wi_img.length; y++) {
            wi_img[y].src = "../../images/pngs/full_wht_tonic.png"    
        }   
    }
    
    for (let x=0; x<white_dominant_block.length; x++) {
        wv_img = white_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<wv_img.length; y++) {
            wv_img[y].src = "../../images/pngs/full_wht_dom.png"    
        }   
    }
}

//Iterate through each one. Locate the melody note image.
function black_3note_chords(){
    let black_tonic_block = document.getElementsByClassName('tonic');
    let black_dominant_block = document.getElementsByClassName('dominant');
    
    for (let x=0; x<black_tonic_block.length; x++) {
        bi_img = black_tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<bi_img.length; y++) {
            bi_img[y].src = "../../images/pngs/full_blk_tonic.png"    
        }   
    }
    
    for (let x=0; x<black_dominant_block.length; x++) {
        bv_img = black_dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the dominant chord image.
        for (let y=0; y<bv_img.length; y++) {
            bv_img[y].src = "../../images/pngs/full_blk_dom.png"    
        }   
    }
}


function white_chords() {
    let the_fs = document.getElementsByClassName("f")
    let the_gs = document.getElementsByClassName("g")
    let the_as = document.getElementsByClassName("a")
    let the_cs = document.getElementsByClassName("c")
    let the_fsharps = document.getElementsByClassName("fsharp")
    let the_gsharps = document.getElementsByClassName("gsharp")
    let the_asharps = document.getElementsByClassName("asharp")
    let the_csharps = document.getElementsByClassName("csharp")
    
    for (let i=0; i<the_fs.length; i++) {
        the_fs[i].src = "../../images/pngs/simple_wht_tonic.png"
    }
    
    for (let i=0; i<the_gs.length; i++) {
        the_gs[i].src = "../../images/pngs/simple_wht_dom.png"
    }
    
    for (let i=0; i<the_as.length; i++) {
        the_as[i].src = "../../images/pngs/simple_wht_tonic.png"
    }
    
    for (let i=0; i<the_cs.length; i++) {
        the_cs[i].src = "../../images/pngs/simple_wht_dom.png"
    }
    
    for (let i=0; i<the_fsharps.length; i++) {
        the_fsharps[i].src = "../../images/pngs/simple_wht_tonic.png"
    }
    
    for (let i=0; i<the_gsharps.length; i++) {
        the_gsharps[i].src = "../../images/pngs/simple_wht_dom.png"
    }
    
    for (let i=0; i<the_asharps.length; i++) {
        the_asharps[i].src = "../../images/pngs/simple_wht_tonic.png"
    }
    
    for (let i=0; i<the_csharps.length; i++) {
        the_csharps[i].src = "../../images/pngs/simple_wht_dom.png"
    }
}

function black_chords() {
    let the_fs = document.getElementsByClassName("f")
    let the_gs = document.getElementsByClassName("g")
    let the_as = document.getElementsByClassName("a")
    let the_cs = document.getElementsByClassName("c")
    let the_fsharps = document.getElementsByClassName("fsharp")
    let the_gsharps = document.getElementsByClassName("gsharp")
    let the_asharps = document.getElementsByClassName("asharp")
    let the_csharps = document.getElementsByClassName("csharp")
    
    for (let i=0; i<the_fs.length; i++) {
        the_fs[i].src = "../../images/pngs/simple_blk_tonic.png"
    }
    
    for (let i=0; i<the_gs.length; i++) {
        the_gs[i].src = "../../images/pngs/simple_blk_dom.png"
    }
    
    for (let i=0; i<the_as.length; i++) {
        the_as[i].src = "../../images/pngs/simple_blk_tonic.png"
    }
    
    for (let i=0; i<the_cs.length; i++) {
        the_cs[i].src = "../../images/pngs/simple_blk_dom.png"
    }
    
    for (let i=0; i<the_fsharps.length; i++) {
        the_fsharps[i].src = "../../images/pngs/simple_blk_tonic.png"
    }
    
    for (let i=0; i<the_gsharps.length; i++) {
        the_gsharps[i].src = "../../images/pngs/simple_blk_dom.png"
    }
    
    for (let i=0; i<the_asharps.length; i++) {
        the_asharps[i].src = "../../images/pngs/simple_blk_tonic.png"
    }
    
    for (let i=0; i<the_csharps.length; i++) {
        the_csharps[i].src = "../../images/pngs/simple_blk_dom.png"
    }
}








