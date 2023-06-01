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
        playVideo()
    } else {
        x.style.display = "none";
        
    }
}

function activaTab(tab) {
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};


function add_val() {
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

// document.addEventListener('DOMContentLoaded', function () {
//     var player = new Clappr.Player({
//         source: "Road.mp4",
//         parentId: "#my-video",

//         width         : 400,
//         height        : 300,
//         autoplay: true,
//     })
    
// });


const options = {
    width: 400,
    height: 300,
  muted: true,
  language: "en",
  preload: "auto",
  
  html5: {
    vhs: { experimentalBufferBasedABR: true, useDevicePixelRatio: true },
    nativeAudioTracks: false,
    nativeVideoTracks: false,
    useBandwidthFromLocalStorage: true
  },
  controlBar: {
    pictureInPictureToggle: false
  },
  plugins: {
    httpSourceSelector: {}
  }
};

const player1 = new Plyr('my-video1',{
controls: ['play', 'progress', 'current-time', 'duration'],
  seekTime: 10,
  tooltips: {
    controls: false,
  }
}
)

// console.log("cur time",player1.currentTime)
var video = document.getElementById('my-video1');
video.currentTime= 4
function playVideo() {
    console.log("Entered playVideo()")
    video.play();
  }


function stopVideo(vid) {
    console.log("Entered stopVideo()");
    vid.pause();
  }
  
  var video2 = document.getElementById('my-video2');
  video2.addEventListener('click', function() {
    stopVideo(video);
  });

  video.addEventListener('click', function() {
    stopVideo(video2);
  });
  

const player2 = new Plyr('my-video2')
