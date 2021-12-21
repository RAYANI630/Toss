document.getElementById("btn").onclick = function () {
  document.querySelector("video").setAttribute("src", "images/pepe-coin.mp4");
  document.getElementById("vid").play();

  function toss() {
    document.getElementById("vid").style.display = "none";
    var num1 = Math.floor(Math.random() * 2) + 1;
    if (num1 == 1) {
      document.querySelector("img").setAttribute("src", "images/head.jpg");
      document.getElementById("img").style.display = "inline";
      document.getElementById("result").innerHTML="HEADS";
    } else {
      document.querySelector("img").setAttribute("src", "images/tails.png");
      document.getElementById("img").style.display = "inline";
      document.getElementById("result").innerHTML="TAILS";
    }
  }

  function appear() {
    setTimeout(toss, 1500);
  }
  appear();
}
