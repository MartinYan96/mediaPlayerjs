const body = document.querySelector("body")
const navMenu = document.querySelector("nav_menu");
const mainParent = document.querySelector(".mainParent");
const video = document.querySelector("video");
const audio = document.querySelector("audio");
const audioFrame = document.querySelector(".audio");
const disk = document.querySelector(".disk");
const controlsPanel = document.querySelector(".controlsPanel");
const miniControlsPanel = document.querySelector(".miniControlsPanel");
const videoFrame = document.querySelector(".videoFrame");
const videoPlaylist = document.querySelector(".videoPlaylist");
const burger = document.querySelector(".burger");
const playPauseParent = document.querySelector(".playPauseParent");
const playPause = document.querySelector(".playPause");
const forward = document.querySelector(".fa-forward");
const backward = document.querySelector(".fa-backward");
const faBackwardFast = document.querySelector(".fa-backward-fast");
const faForwardFast = document.querySelector(".fa-forward-fast");
const expand = document.querySelector(".fa-expand");
const expandArrowsAlt = document.querySelector(".fa-expand-arrows-alt");
const contPanelSettingsIcon = document.querySelector(".fa-volume-high");
const settings = document.querySelector(".settings");
const stopVid = document.querySelector(".fa-stop");
let speed = document.querySelector(".speed");
const audioClick = document.querySelector(".audioClick");
const videoClick = document.querySelector(".videoClick");
let time = document.querySelector(".time");
let time1 = document.querySelector(".time1")
const rangeVolume = document.querySelector(".rangeVolume");
const range = document.querySelector(".range");
const forwardFast = document.querySelector(".forwardFast");
const backwardFast = document.querySelector(".backwardFast");
const retweet = document.querySelector(".fa-retweet");
const audioPlaylist = document.querySelector(".audioPlaylist");
const playListClick = document.querySelector(".playListClick");
let retweetBool = false;

// ------------------mediaSize--------------
let portrait = window.matchMedia("(orientation: portrait)")
let landscape = window.matchMedia("(orientation: landscape)")
let media1280HeightMax = window.matchMedia("(max-height: 1280px)")
let media1000Heightmax = window.matchMedia("(max-height: 1000px)")
let media900HeightMax = window.matchMedia("(max-height: 900px)")
let media480HeightMax = window.matchMedia("(max-height: 480px)")

let media1280max = window.matchMedia("(max-width: 1280px)");
let media1000max = window.matchMedia("(max-width: 1000px)")
let media900max = window.matchMedia("(max-width: 900px)");
let media480max = window.matchMedia("(max-width: 480px)");
let media1024min = window.matchMedia("(min-width: 1024px)");




// --------------video--------------

let videoCurrent = 0;
let currentAudio = 0
let videoArray = [
  {
    videoSrc: "Video/A CHILLA  feat  D LITTE  LINELU ES .mp4",
    videoName: "A CHILLA  feat  D LITTE  LINELU ES ",
    videoScreen: "videoimage/1.jpg",
  },
  {
    videoSrc: "Video/KAMI FRIENDS  -Tiknikner.mp4",
    videoName: "KAMI FRIENDS  -Tiknikner ",
    videoScreen: "videoimage/2.jpg",
  },
  {
    videoSrc: "Video/Kami Friends  Anapati Arev .mp4",
    videoName: "Kami Friends  Anapati Arev ",
    videoScreen: "videoimage/3.jpg",
  },
  {
    videoSrc: "Video/Kami Friends  Arevic .mp4",
    videoName: "Kami Friends  Arevic",
    videoScreen: "videoimage/4.jpg",
  },
  {
    videoSrc: "Video/Kami Friends  Yes Arants Qez .mp4",
    videoName: "Kami Friends  Yes Arants Qez ",
    videoScreen: "videoimage/5.jpg",
  },
  {
    videoSrc: "Video/Kami Friends Arsen Grigoryan   Chunem Ynkeruhi .mp4",
    videoName: "Kami Friends Arsen Grigoryan Chunem Ynkeruhi",
    videoScreen: "videoimage/6.jpg",
  },
  {
    videoSrc: "Video/Kami Friends Harout Pamboukjian  Hishir Sirelis.mp4",
    videoName: "Kami Friends Harout Pamboukjian TarinerTariner ",
    videoScreen: "videoimage/7.jpg",
  },
  {
    videoSrc: "Video/Kami Friends Harout Pamboukjian TarinerTariner.mp4",
    videoName: "Kami Friends Harout Pamboukjian  Hishir Sirelis",
    videoScreen: "videoimage/8.jpg",
  },
  {
    videoSrc: "Video/Kami Friends Tata Simonyan   Yerevan .mp4",
    videoName: "Kami Friends Tata Simonyan Yerevan ",
    videoScreen: "videoimage/9.jpg",
  },
  {
    videoSrc: "Video/Kami Friends Tata Simonyan  Fayton.mp4",
    videoName: "Kami Friends Tata Simonyan Fayton",
    videoScreen: "videoimage/10.jpg",
  },
  {
    videoSrc: "Video/Kami Friends Tata Simonyan Terevnery Deghin .mp4",
    videoName: "Kami Friends Tata Simonyan Terevnery Deghin",
    videoScreen: "videoimage/11.jpg",
  },
];




// --------------audio--------------

let audioArray = [
  {
    audioSrc: "music/Brunette - Bac kapuyt achqerd.mp3",
    audioName: "Brunette - Bac kapuyt achqerd",
    audioScreen: "url('images/2.jpg')",
  },
  {
    audioSrc: "music/ARSHO MARTIROSYAN&DANAND BEATS-IM YNKER.mp3",
    audioName: "Arso Martirosyan - Im ynker",
    audioScreen: "url('images/1.jpg')",
  },
  {
    audioSrc: "music/gorgeouz beats - Black Cat).mp3",
    audioName: "gorgeouz beats - Black Cat)",
    audioScreen: "url('images/3.jpg')",
  },
  {
    audioSrc: "music/gorgeouz beats - shushiki.mp3",
    audioName: "gorgeouz beats - shushiki",
    audioScreen: "url('images/4.jpg')",
  },
  {
    audioSrc: "music/Grailz Beni - Eugnot).mp3",
    audioName: "Grailz Beni - Eugnot)",
    audioScreen: "url('images/5.jpg')",
  },
  {
    audioSrc: "music/hass. - Ararat (Armenian Navy Band Remix).mp3",
    audioName: "hass. - Ararat (Armenian Navy Band Remix)",
    audioScreen: "url('images/6.jpg')",
  },
  {
    audioSrc: "music/REINCARNATION feat Harout Pamboukjian-Kancnen Orer.mp3",
    audioName: "REINCARNATION feat Harout Pamboukjian-Kancnen Orer",
    audioScreen: "url('images/7.jpg')",
  },
  {
    audioSrc: "music/REINCARNATION-Mardik Beran Chunen.mp3",
    audioName: "REINCARNATION-Mardik Beran Chunen",
    audioScreen: "url('images/8.jpg')",
  },
  {
    audioSrc: "music/REINCARNATION-Yerevanyan).mp3",
    audioName: "REINCARNATION-Yerevanyan",
    audioScreen: "url('images/9.jpg')",
  },
  {
    audioSrc: "music/էլի ես ու դու - yellowheart.mp3",
    audioName: "էլի ես ու դու - yellowheart",
    audioScreen: "url('images/10.jpg')",
  },
];

audio.src = audioArray[currentAudio].audioSrc;
video.src = videoArray[videoCurrent].videoSrc;
disk.style.backgroundImage = audioArray[currentAudio].audioScreen;




// -------------Global functions------------

function playIcon() {
  playPause.style.clipPath =
    "polygon(0 0, 40% 0, 40% 100%, 60% 100%, 60% 0, 100% 0, 100% 100%, 60% 100%, 40% 100%, 0 100%)";
}
function pauseIcon() {
  playPause.style.clipPath =
    "polygon(0 0, 100% 50%, 30% 41%, 45% 43%, 0 0, 100% 50%, 48% 39%, 43% 42%, 100% 50%, 0 100%)";
}




// -----------------Video---------------

burger.addEventListener("click", function () {
  mainParent.classList.toggle("active");
  if (mainParent.classList.contains("active")) {
    mainParent.style.gridTemplateColumns = "0px 1fr";
  }
  else if (mainParent.className == "mainParent" && landscape.matches && media1000max.matches && media480HeightMax.matches || mainParent.className == "mainParent" && portrait.matches && media480max.matches && media1000Heightmax) {
    mainParent.style.gridTemplateColumns = "50px 1fr"
    expandArrowsAlt.style.display = "none"
  }
  else if (mainParent.className == "mainParent" && media1280max.matches && media900HeightMax.matches && landscape.matches || mainParent.className == "mainParent" && media1280HeightMax.matches && media900max.matches && portrait.matches) {
    mainParent.style.gridTemplateColumns = "150px 1fr";
    expandArrowsAlt.style.display = "none"
  }
  else {
    mainParent.style.gridTemplateColumns = "200px 1fr"
    expandArrowsAlt.style.display = "block"
  }
  if (mainParent.classList.contains("active") && playListClick.classList.contains("active")) {
    playListClick.classList.remove("active");
    videoPlaylist.style.display = "none";
    audioPlaylist.style.display = "none"
  }
})




// --------------videoClick--------------

videoClick.addEventListener("click", function () {
  audio.pause();
  pauseIcon();
  if (video.played) {
    playIcon()
  }
  if (video.paused) {
    pauseIcon();
  }

  videoClick.classList.toggle("active");
  if (videoClick.classList.contains("active")) {
    audioClick.classList.remove("active");
    video.style.display = "block";;
    audioFrame.style.display = "none";
  }
  if (
    videoClick.classList.contains("active") &&
    playListClick.classList.contains("active")
  ) {
    audioClick.classList.remove("active");
    videoPlaylist.style.display = "block";
    audioPlaylist.style.display = "none";
  }
  if (videoClick.className == "videoClick" && audioClick.className == "audioClick") {
    video.style.display = "block";
    audioFrame.style.display = "none";
  }
});




// -------------------audioClick-------------------

audioClick.addEventListener("click", function () {
  video.pause();
  pauseIcon();
  audioClick.classList.toggle("active");
  if (audioClick.classList.contains("active")) {
    videoClick.classList.remove("active");
    video.style.display = "none";
    audioFrame.style.display = "flex";
  }
  if (
    audioClick.classList.contains("active") &&
    playListClick.classList.contains("active")
  ) {
    videoClick.classList.remove("active");
    videoPlaylist.style.display = "none";
    audioPlaylist.style.display = "block";
  }

  if (videoClick.className == "videoClick" && audioClick.className == "audioClick") {
    video.style.display = "block";
    audioFrame.style.display = "none";
  }
  if (videoClick.className == "videoClick" && audioClick.className == "audioClick" && playListClick.classList.contains("active")) {
    videoPlaylist.style.display = "block"
    audioPlaylist.style.display = "none"
  }
  if (audioClick.className == "audioClick" && audio.played) {
    audio.pause()
  }

});




// --------------------playlistClick-----------------

playListClick.addEventListener("click", function () {
  playListClick.classList.toggle("active");
  if (videoClick.className == "videoClick" && audioClick.className == "audioClick" && playListClick.classList.contains("active")) {
    audioPlaylist.style.display = "none"
    videoPlaylist.style.display = "block";
  }
  else {
    audioPlaylist.style.display = "none";
    videoPlaylist.style.display = "none";
  }
  if (playListClick.classList.contains("active") && videoClick.classList.contains("active") && audioClick.className == "audioClick") {
    audioPlaylist.style.display = "none";
    videoPlaylist.style.display = "block";

  }
  else if (playListClick.classList.contains("active") && audioClick.classList.contains("active") && videoClick.className == "videoClick") {
    audioPlaylist.style.display = "block";
    videoPlaylist.style.display = "none";
  }
  if (playListClick.classList.contains("active")) {
    expandArrowsAlt.style.display = "none";
  }
  else if (playListClick.className == "playListClick" && media1024min.matches) {
    expandArrowsAlt.style.display = "block";
  }
});




// -------------playPause icon---------------

playPause.addEventListener("click", function () {
  if (video.paused && audio.paused && audioClick.className == "audioClick") {
    video.play();
    playIcon()
  }
  else if (video.played && audio.paused && audioClick.className == "audioClick") {
    video.pause()
    pauseIcon()
  }
  else if (audio.paused && audioClick.classList.contains("active")) {
    video.pause()
    audio.play()
    playIcon()
  }
  else if (videoClick.className == "videoClick" && audioClick.className == "audioClick" && audio.played) {
    audio.pause()
  }
  else if (audio.played) {
    audio.pause()
    pauseIcon()
  }
});




// ---------------keybord------------

// -------------------playPause------------------

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 32 && video.paused && audio.paused && audioClick.className == "audioClick") {
    video.play();
    playIcon()
  }
  else if (event.keyCode == 32 && video.played && audio.paused && audioClick.className == "audioClick") {
    video.pause()
    pauseIcon()
  }
  else if (event.keyCode == 32 && audio.paused && audioClick.classList.contains("active")) {
    video.pause()
    audio.play()
    playIcon()
  }
  else if (event.keyCode == 32 && videoClick.className == "videoClick" && audioClick.className == "audioClick" && audio.played) {
    audio.pause()
  }
  else if (event.keyCode == 32 && audio.played) {
    audio.pause()
    pauseIcon()
  }




  // ---------------------next---------------------

  if (event.keyCode == 39) {
    if (audioClick.classList.contains("active")) {
      currentAudio++
    }
    else {
      videoCurrent++
    }
    if (videoCurrent >= videoArray.length) {
      videoCurrent = 0;
    }
    if (currentAudio >= audioArray.length) {
      currentAudio = 0
    }
    if (audioClick.classList.contains("active")) {
      disk.style.backgroundImage = audioArray[currentAudio].audioScreen;
      audio.src = audioArray[currentAudio].audioSrc;
      audio.play();
      playIcon()
    }
    else {
      video.src = videoArray[videoCurrent].videoSrc;
      video.play();
      playIcon()
    }
  }

  // ---------------prev----------------

  if (event.keyCode == 37) {
    if (videoCurrent == -1) {
      videoCurrent = videoArray.length;
    }
    if (audioClick.classList.contains("active") && currentAudio <= -1) {
      currentAudio = audioArray.length;
    }
    if (audioClick.classList.contains("active")) {
      disk.style.backgroundImage = audioArray[currentAudio].audioScreen;
      audio.src = audioArray[currentAudio].audioSrc;
      audio.play();
      playIcon();
    }
    else {
      video.src = videoArray[videoCurrent].videoSrc;
      video.play();
      playIcon();
    }
    if (audioClick.classList.contains("active")) {
      currentAudio--
    }
    else {
      videoCurrent--;
    }
  }
});

// ---------------forward backward start--------------

// ------------forvard-------------

forward.addEventListener("click", function () {
  if (audioClick.classList.contains("active")) {
    currentAudio++
  }
  else {
    videoCurrent++
  }
  if (videoCurrent >= videoArray.length) {
    videoCurrent = 0;
  }
  if (currentAudio >= audioArray.length) {
    currentAudio = 0
  }
  if (audioClick.classList.contains("active")) {
    disk.style.backgroundImage = audioArray[currentAudio].audioScreen;
    audio.src = audioArray[currentAudio].audioSrc;
    audio.play();
    playIcon()
  }
  else {
    video.src = videoArray[videoCurrent].videoSrc;
    video.play();
    playIcon()
  }
});

// ---------------backward-------------

backward.addEventListener("click", function () {
  if (videoCurrent == -1) {
    videoCurrent = 10;
  }
  if (audioClick.classList.contains("active") && currentAudio <= -1) {
    currentAudio = 9;
  }
  if (audioClick.classList.contains("active")) {
    disk.style.backgroundImage = audioArray[currentAudio].audioScreen;
    audio.src = audioArray[currentAudio].audioSrc;
    audio.play();
    playIcon();
  }
  else {
    video.src = videoArray[videoCurrent].videoSrc;
    video.play();
    playIcon();
  }
  if (audioClick.classList.contains("active")) {
    currentAudio--
  }
  else {
    videoCurrent--;
  }
});




// -------------StopVideo------------

stopVid.onclick = function () {
  if (video.played) {
    video.pause();
    video.currentTime = 0;
    pauseIcon();
  }
  if (audio.played) {
    audio.pause();
    audio.currentTime = 0;
    pauseIcon();
  }
};




// ---------------------vldeoplayList-----------------

let videoList = document.createElement("ol");
videoList.style.listStyle = "none";
videoPlaylist.appendChild(videoList);
videoList.className = "videoList";

videoArray.forEach((item, index) => {
  let br = document.createElement("br");
  videoList.appendChild(br);
  let indexVideo = document.createElement("li");
  videoList.appendChild(indexVideo);
  let name = document.createElement("img");
  indexVideo.appendChild(name);
  name.className = "videoPlaylistSize"
  name.src = videoArray[index].videoScreen;
  name.style.cursor = "pointer";
  name.addEventListener("click", () => {
    videoCurrent = index;
    video.src = videoArray[videoCurrent].videoSrc;
    video.play();
    if (video.played) {
      video.play();
      playIcon();
    } else {
      video.pause();
      pauseIcon();
    }
  });
});

// ---------------------audioPlayList-----------------

let audioList = document.createElement("ol");
audioPlaylist.appendChild(audioList);
audioList.className = "audioList";

audioArray.forEach((item, index) => {
  let br = document.createElement("br");
  audioList.appendChild(br);
  let indexVideo = document.createElement("li");
  audioList.appendChild(indexVideo);
  let name = document.createElement("span");
  indexVideo.appendChild(name);
  name.className = "audioPlaylistSize"
  name.innerText = audioArray[index].audioName;
  name.style.cursor = "pointer";
  name.addEventListener("click", () => {
    currentAudio = index;
    audio.src = audioArray[currentAudio].audioSrc;
    disk.style.backgroundImage = audioArray[currentAudio].audioScreen;
    audio.play();
    if (audio.played) {
      audio.play();
      playIcon();
    } else {
      audio.pause();
      pauseIcon();
    }
  });
});

// ----------------settings------------

settings.addEventListener("click", () => {
  miniControlsPanel.classList.toggle("active");
  if (miniControlsPanel.classList.contains("active")) {
    miniControlsPanel.style.right = "6px";
    miniControlsPanel.style.top = "-20px";
  }
  else {
    miniControlsPanel.style.top = "150px";
  }
});

// ---------------expand-------------

expand.addEventListener("click", function () {
  expand.classList.toggle("active");
  if (expand.classList.contains("active")) {
    mainParent.style.gridTemplateColumns = "0px 1fr";
  }
  else if (expand.className == "fas fa-expand" && landscape.matches && media1000max.matches && media480HeightMax.matches || expand.className == "fas fa-expand" && portrait.matches && media480max.matches && media1000Heightmax) {
    mainParent.style.gridTemplateColumns = "50px 1fr"
  }
  else if (expand.className == "fas fa-expand" && media1280max.matches && media900HeightMax.matches && landscape.matches || expand.className == "fas fa-expand" && media1280HeightMax.matches && media900max.matches && portrait.matches) {
    mainParent.style.gridTemplateColumns = "150px 1fr";
  }
  else {
    mainParent.style.gridTemplateColumns = "200px 1fr"
  }
});




// -------------videoFrame----------

videoFrame.onmousemove = () => {
  controlsPanel.classList.toggle("active")
  if (controlsPanel.classList.contains("active")) {
    controlsPanel.style.bottom = "0";
    controlsPanel.style.transition = ".4s";

  }
};

videoFrame.onmouseleave = () => {
  controlsPanel.classList.remove("active")
  if (controlsPanel.className === "controlsPanel") {
    controlsPanel.style.bottom = "-210px";
    miniControlsPanel.style.top = "150px";
    miniControlsPanel.classList.remove("active");
  }
};




// ------------VOLUME----------------

rangeVolume.style.display = "none";
function volumeMouseMove() {
  contPanelSettingsIcon.onmousemove = () => {
    rangeVolume.style.display = "block";
    contPanelSettingsIcon.style.transform = "rotate(-90deg)";
    rangeVolume.style.position = "absolute";
    contPanelSettingsIcon.style.transition = ".3s";
  }
}
volumeMouseMove()
contPanelSettingsIcon.onmouseleave = (stop) => {
  stop = setTimeout(() => {
    contPanelSettingsIcon.style.transform = "rotate(0deg)";
    rangeVolume.style.display = "none";
  }, 2000);
  contPanelSettingsIcon.onmousemove = () => {
    volumeMouseMove()
    clearTimeout(stop)
  }
};


contPanelSettingsIcon.oninput = () => {
  let vol = rangeVolume.value;
  video.volume = vol / 100;
  audio.volume = vol / 100;
};




// -------------expandArrowsAlt-----------

expandArrowsAlt.addEventListener("click", function () {
  expandArrowsAlt.classList.toggle("active");
  if (expandArrowsAlt.classList.contains("active")) {
    burger.style.left = "1%";
    mainParent.style.width = "100%";
    mainParent.style.borderRadius = "0";
    body.style.padding = "0px";
    burger.style.top = "15px"
  }
  else {
    burger.style.top = "60px";
    burger.style.left = "11%";
    mainParent.style.width = "80%";
    mainParent.style.height = "100%";
    mainParent.style.borderRadius = "30px";
    body.style.padding = "54px 0";
  }
});

// -------------progres-------------

video.ontimeupdate = () => {
  if (video.currentTime > 0) {
    range.value = (video.currentTime / video.duration) * 100;
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
      minutes = "0" + `${minutes}`;
    }
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
      seconds = "0" + `${seconds}`;
    }
    time.innerHTML = ` ${minutes}:${seconds}`;
    time1.innerHTML = ` ${minutes}:${seconds}`;

    let c = range.value;
    let rangeTrack =
      "linear-gradient(to right, rgb(119, 116, 116)" +
      c +
      "%, rgb(255,255,255)" +
      c +
      "%)";
    range.style.background = rangeTrack;
  }

  if (video.ended) {
    if (retweetBool == true) {
      video.src = videoArray[videoCurrent].videoSrc;
      video.play();
      playIcon();
    } else {
      videoCurrent++;
      if (videoCurrent == videoArray.length) {
        videoCurrent = 0;
      }
      video.src = videoArray[videoCurrent].videoSrc;
      video.play();
      playIcon();
    }
  }
  range.oninput = () => {
    video.currentTime = (range.value * video.duration) / 100;
  };
};

audio.addEventListener("timeupdate", () => {
  if (audio.currentTime > 0) {
    range.value = (audio.currentTime / audio.duration) * 100;
    let audioMinutes = Math.floor(audio.currentTime / 60);
    if (audioMinutes < 10) {
      audioMinutes = "0" + `${audioMinutes}`;
    }
    let audioSeconds = Math.floor(audio.currentTime % 60);
    if (audioSeconds < 10) {
      audioSeconds = "0" + `${audioSeconds}`;
    }
    time.innerHTML = ` ${audioMinutes}:${audioSeconds}`;
    time1.innerHTML = ` ${audioMinutes}:${audioSeconds}`;

    let c = range.value;
    let rangeTrack =
      "linear-gradient(to right, rgb(119, 116, 116)" +
      c +
      "%, rgb(255,255,255)" +
      c +
      "%)";
    range.style.background = rangeTrack;
  }
  range.oninput = () => {
    audio.currentTime = (range.value * audio.duration) / 100;
  };
  if (audio.ended) {
    if (retweetBool == true) {
      disk.style.backgroundImage = audioArray[currentAudio].audioScreen;
      audio.src = audioArray[currentAudio].audioSrc;
      audio.play();
      playIcon();
    } else {
      currentAudio++;
      if (currentAudio == audioArray.length) {
        currentAudio = 0;
      }
      disk.style.backgroundImage = audioArray[currentAudio].audioScreen;
      audio.src = audioArray[currentAudio].audioSrc;
      audio.play();
      playIcon();
    }
  }
});




// ---------------VideoSpeed--------------


speed.onclick = () => {
  speed.classList.toggle("active")
  if (speed.classList.contains("active")) {
    speed.style.color = "grey";
    audio.playbackRate = 8;
    video.playbackRate = 8;
  } else {
    speed.style.color = "rgb(200, 200, 200)";
    video.playbackRate = 1;
    audio.playbackRate = 1;
  }
};




// -------------videotTimeSpeed && contols-------------

function forwardFastPlus() {
  if (audioClick.classList.contains("active")) {
    audio.currentTime += 20;
  } else {
    video.currentTime += 20;
  }
}
function forwardFastMinus() {
  if (audioClick.classList.contains("active")) {
    audio.currentTime -= 20;
  } else {
    video.currentTime -= 20;
  }
}
function mouseMove() {
  if (
    expandArrowsAlt.classList.contains("active") &&
    audioClick.className == "audioClick" || media1280max && media900HeightMax
  ) {
    controlsPanel.style.display = "none";
  }
}
function mouseLeave() {
  if (
    expandArrowsAlt.classList.contains("active") &&
    audioClick.className == "audioClick" || media1280max && media900HeightMax
  ) {
    controlsPanel.style.display = "grid";
  }
}

faForwardFast.onclick = () => {
  forwardFastPlus();
};
forwardFast.ondblclick = () => {
  forwardFastPlus();
};

faBackwardFast.onclick = () => {
  forwardFastMinus();
};
backwardFast.ondblclick = () => {
  forwardFastMinus();
};

forwardFast.onmousemove = () => {
  mouseMove();
};
forwardFast.onmouseleave = () => {
  mouseLeave();
};

backwardFast.onmousemove = () => {
  mouseMove();
};
backwardFast.onmouseleave = () => {
  mouseLeave();
};




// -----------display click----------

video.onclick = () => {
  if (video.paused) {
    video.play();
    playIcon()
  } else {
    video.pause();
    pauseIcon();
  }
};




// --------------repeat------------

retweet.onclick = () => {
  if (retweetBool === false) {
    retweetBool = true;
    retweet.style.color = "grey"

  } else if (retweetBool === true) {
    retweetBool = false;
    retweet.style.color = "rgb(200, 200, 200)"
  }
};

if (audioClick.className == "audioClick") {
  audioFrame.style.display = "none";
}




// ---------------disk rotate------------

disk.style.transition = ".2s";
let count = 0;
setInterval(() => {
  disk.style.transform = `rotate(${count}deg)`;
  if (audio.currentTime > 1) {
    count++;
  }
  if (audio.paused || audio.currentTime < 1) {
    count = 0;
  }
}, 100);




// ------------media-----------

function mediaSize() {
  if (media1000max.matches && media480HeightMax.matches && landscape.matches || media480max.matches && media1000Heightmax.matches && portrait.matches) {
    mainParent.style.gridTemplateColumns = "50px 1fr"
    expandArrowsAlt.style.display = "none";
  }
  else if (media1280max.matches && media900HeightMax.matches && landscape.matches || media1280HeightMax.matches && media900max.matches && portrait.matches) {
    mainParent.style.gridTemplateColumns = "150px 1fr";
    expandArrowsAlt.style.display = "none";
  }
  else {
    mainParent.style.gridTemplateColumns = "200px 1fr"
    expandArrowsAlt.style.display = "block"
  }
  if (media480max.matches) {
    time1.style.display = "block"
    time.style.display = "none"
  }
  else {
    time1.style.display = "none"
    time.style.display = "block"
  }

}

landscape.addListener(mediaSize)
portrait.addListener(mediaSize)
media1280HeightMax.addListener(mediaSize)
media1000Heightmax.addListener(mediaSize)
media900HeightMax.addListener(mediaSize)
media480HeightMax.addListener(mediaSize)
media1280max.addListener(mediaSize)
media1000max.addListener(mediaSize)
media900max.addListener(mediaSize)
media480max.addListener(mediaSize)



