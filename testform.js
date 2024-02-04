const startVideo = document.getElementById('myVideo');
startVideo.load();
startVideo.play();
function noFunction() {
    const button = document.getElementById('No');
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
}

function yesFunction() {
    const centeredDiv = document.getElementById('centered');
    centeredDiv.style.visibility = "hidden";
    centeredDiv.style.display = "none";
    const centeredDiv2 = document.getElementById('centered2');
    centeredDiv2.style.visibility = "visible";
    centeredDiv2.style.display = "block";
    const waitVideo = document.getElementById('myVideo');
    waitVideo.pause();
    waitVideo.currentTime = 0;
    const yesVideo = document.getElementById('yesVideo');
    yesVideo.load();
    yesVideo.muted = false;
    yesVideo.play();
}