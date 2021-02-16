const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const para1 = document.getElementById('text1');
const para2 = document.getElementById('text2');
const para3 = document.getElementById('text3');

function colorChange() {
  let click = 0;
  return function (event) {
    click += 1;
    const paragraf = event.target;
    paragraf.style.color = colors[click - 1];
    if (click > colors.lenght - 1) {
      click = 0;
    }
  };
}

para1.addEventListener('click', colorChange());
para2.addEventListener('click', colorChange());
para3.addEventListener('click', colorChange());
