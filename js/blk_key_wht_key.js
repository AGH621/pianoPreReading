console.log("Up and running");


/*
let pitch = document.getElementsByTagName("pitch")
console.log(pitch.length)

for (let i=0; i<pitch.length; i++) {
    if (pitch[i].src === "file:///Users/admin/Desktop/Web%20Dev/projects/new_piano_prereading/images/pngs/single_f.png") {
            console.log(pitch[i].src)
            pitch[i].src = "images/pngs/single_f_sharp.png"
        }
    console.log(pitch[i].src)
    
}*/



//document.getElementsByClassName("pitch").src = "images/pngs/single_f_sharp.png"

let the_fs = document.getElementsByClassName("f")
let the_gs = document.getElementsByClassName("g")


for (let i=0; i<the_fs.length; i++) {
    the_fs[i].src = "images/pngs/single_f_sharp.png"
}


for (let i=0; i<the_gs.length; i++) {
    the_gs[i].src = "images/pngs/single_g_sharp.png"
}