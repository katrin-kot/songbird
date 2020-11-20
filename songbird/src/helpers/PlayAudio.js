export function playAudio(src) {
    if (!src) return;
    const myAudio = new Audio();
    myAudio.src = src;
    myAudio.play();
  }