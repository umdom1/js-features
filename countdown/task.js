
const timer = document.getElementById('timer');

const intervalId = setInterval(() => {
  timer.textContent = Number(timer.textContent)-1
  if (timer.textContent == 00){
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!')
  }
},1000);
