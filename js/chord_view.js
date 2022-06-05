console.log("Chord view is running")






//Iterate through each one. Locate the melody note image.
function white_3note_chords(){
    let tonic_block = document.getElementsByClassName('tonic');
    let dominant_block = document.getElementsByClassName('dominant');
    
    for (let x=0; x<tonic_block.length; x++) {
        i_img = tonic_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<i_img.length; y++) {
            i_img[y].src = "../../images/pngs/full_wht_tonic.png"    
        }   
    }
    
    for (let x=0; x<dominant_block.length; x++) {
        d_img = dominant_block[x].querySelectorAll('img.pitch');
    
        //Change it to the tonic chord image.
        for (let y=0; y<d_img.length; y++) {
            d_img[y].src = "../../images/pngs/full_wht_dom.png"    
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








