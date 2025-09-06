const message = `I don’t really know if you’ll ever read this.\nBut if you do… I just want you to know, I hope your doing just fine.\n\nkeep trying your best. I know it's a long way ahead.  the universe just never stops for anyone.\n\nI wish you the best gang… if we ever met again at a different point in life, I hope you're doing better than me.\n\nAnyway, Take care.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
