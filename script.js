const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:100px;">
      <h1>Yeee cảm ơn Duyên nhìuuu 😍💞</h1>
      <p>Mai thạch đưa milo nhéee 💖</p>
      <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" width="250"/>
    </div>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
