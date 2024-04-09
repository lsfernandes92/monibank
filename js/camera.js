const btStartCamera = document.querySelector("[data-video-botao]");
const divCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const btTakePicture = document.querySelector("[data-tirar-foto]");
const divMessage = document.querySelector("[data-mensagem]");
const canvas = document.querySelector("[data-video-canvas]");

let imageURL = "";

btStartCamera.addEventListener("click", async function() {
  const startVideo = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })

  btStartCamera.style.display = "none";
  divCamera.style.display = "block";

  video.srcObject = startVideo;
});

btTakePicture.addEventListener("click", function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  imageURL = canvas.toDataURL("image/jpeg");

  divCamera.style.display = "none";
  divMessage.style.display = "block";
});