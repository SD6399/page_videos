src = "https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"

function toggle_task() {
    console.log("entrt")
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggle_bar() {
    console.log("enter 2")
    var x = document.getElementById("skill_bar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggle_player() {
    console.log("enter vid player")
    var x = document.getElementById("player");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function activaTab(tab) {
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};


function add_val(){
    var progressbar = document.getElementById("skill_bar");
    let tr = document.createElement("TR");
    let td1 = document.createElement("TD");
    let td2 = document.createElement("TD");
    let td = document.createElement("TD");
    let button = document.createElement("BUTTON");

    let node = document.createTextNode("Video");

    td1.innerText = Math.floor(Math.random() * 15) + 1
    td2.innerText = Math.floor(Math.random() * 15) + 1
    button.appendChild(node);
    td.onclick = toggle_player;
    td.appendChild(node);
    td.appendChild(progressbar);

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("tbl").appendChild(tr);

}


function dimming() {
    var progressbar = document.getElementById("skill_bar");
    progressbar.classList.add('dim');
}


function undimming() {
    var progressbar = document.getElementById("skill_bar");
    progressbar.classList.add('undim');

  

}