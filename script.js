you essage = `I don’t really know if you’ll ever read this.\n\nBut if you do… I want you to know that,\n\nI am very thankful for your honesty I appreciate it.\n\nI'm just not person for you at this point. \n\nAnyway, Take care.`;

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



