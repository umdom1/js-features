
const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

console.log(cookie.width);
let clickPosishen = true;
cookie.onclick = () => {
  if (clickPosishen){
    cookie.width += 200;
    cookie.height += 200;
    counter.textContent = Number(counter.textContent) + 1;
    clickPosishen = false;
  }else if (clickPosishen == false) {
    cookie.width = 200;
    cookie.height = 128;
    counter.textContent = Number(counter.textContent) + 1;
    clickPosishen = true;
  }
};
