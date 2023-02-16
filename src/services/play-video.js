const playButton = document.querySelector("#video-button");
const imageButton = document.querySelector("#about-image");
playButton.addEventListener("click", handlePlayVideo);

function handlePlayVideo(elementRef) {
  const videoSrc = elementRef?.target?.attributes["data-videosrc"]?.nodeValue;
  if (!videoSrc) return;

  var videoRef = document.createElement("video");

  videoRef.setAttribute("muted", "");
  videoRef.setAttribute("autoplay", "");
  videoRef.setAttribute("loop", "");
  videoRef.setAttribute("controls", "");
  videoRef.setAttribute("class", "bg-video__about video-about");
  document.querySelector('.parent_layer').appendChild(videoRef);
  document.getElementsByTagName('video')[0].webkitEnterFullscreen();


  const sourceRef = document.createElement("source");
  sourceRef.setAttribute("src", videoSrc);
  sourceRef.setAttribute("type", "video/mp4");
  videoRef.appendChild(sourceRef);

  playButton.style.display = "none";
  imageButton.style.display = "none";
  console.log("Done");
}
