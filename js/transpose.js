console.log("Up and running");

function black_transpose() {
    let the_fs = document.getElementsByClassName("f")
    let the_gs = document.getElementsByClassName("g")
    let the_as = document.getElementsByClassName("a")
    let the_fsharps = document.getElementsByClassName("fsharp")
    let the_gsharps = document.getElementsByClassName("gsharp")
    let the_asharps = document.getElementsByClassName("asharp")

    for (let i=0; i<the_fs.length; i++) {
        the_fs[i].src = "../../images/pngs/single_f_sharp.png"
    }

    for (let i=0; i<the_gs.length; i++) {
        the_gs[i].src = "../../images/pngs/single_g_sharp.png"
    }

    for (let i=0; i<the_as.length; i++) {
        the_as[i].src = "../../images/pngs/single_a_sharp.png"
    }
    for (let i=0; i<the_fsharps.length; i++) {
        the_fsharps[i].src = "../../images/pngs/single_f_sharp.png"
    }

    for (let i=0; i<the_gsharps.length; i++) {
        the_gsharps[i].src = "../../images/pngs/single_g_sharp.png"
    }

    for (let i=0; i<the_asharps.length; i++) {
        the_asharps[i].src = "../../images/pngs/single_a_sharp.png"
    }
}

function white_transpose() {
    let the_fs = document.getElementsByClassName("f")
    let the_gs = document.getElementsByClassName("g")
    let the_as = document.getElementsByClassName("a")
    let the_fsharps = document.getElementsByClassName("fsharp")
    let the_gsharps = document.getElementsByClassName("gsharp")
    let the_asharps = document.getElementsByClassName("asharp")

    for (let i=0; i<the_fs.length; i++) {
        the_fs[i].src = "../../images/pngs/single_f.png"
    }
    for (let i=0; i<the_gs.length; i++) {
        the_gs[i].src = "../../images/pngs/single_g.png"
    }

    for (let i=0; i<the_as.length; i++) {
        the_as[i].src = "../../images/pngs/single_a.png"
    }
    for (let i=0; i<the_fsharps.length; i++) {
        the_fsharps[i].src = "../../images/pngs/single_f.png"
    }

    for (let i=0; i<the_gsharps.length; i++) {
        the_gsharps[i].src = "../../images/pngs/single_g.png"
    }

    for (let i=0; i<the_asharps.length; i++) {
        the_asharps[i].src = "../../images/pngs/single_a.png"
    }
}