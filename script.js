const giftBox = document.getElementById("giftBox");
const surpriseBox = document.getElementById("surpriseBox");
const title = document.getElementById("title");
const music = document.getElementById("bgMusic");
music.volume = 0.2;

let clickCount = 0;

const surprises = [
  "💌 <b>Love Letter</b><br><br>From the moment you came into my life, everything became brighter.",
  
  "📸 <b>Memory</b><br><br><img src='memory.jpg' style='width:100%;border-radius:10px;'>",
  
  "🎵 <b>Song for You</b><br><br><iframe width='100%' height='200' src='https://www.youtube.com/embed/ClRjTtga8rg' allowfullscreen></iframe>",
  
  "💍 <b>Promise</b><br><br>No matter what happens, I will always stand by you.",
  
  "❤️ <b>Final Message</b><br><br>I Love You, you are my peace, my happiness, my everything."
];

giftBox.addEventListener("click", () => {
  if (clickCount === 0) {
    music.play().catch(()=>{});
  }

  if (clickCount < surprises.length) {
    surpriseBox.classList.remove("hidden");
    surpriseBox.innerHTML = surprises[clickCount];
    clickCount++;

    if (clickCount === surprises.length) {
      title.innerText = "I hope this made you smile 💕";
      giftBox.style.pointerEvents = "none";
    }
  }
});


