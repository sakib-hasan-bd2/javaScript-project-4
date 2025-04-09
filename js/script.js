let sbutton = document.querySelector('.sbutton');
let sclose = document.querySelector('.sclose');
let sideber = document.querySelector('.sideber');

sbutton.addEventListener('click', function () {
  sideber.style.left = '0';
  sbutton.style.display = 'none';
})

sclose.addEventListener('click', function () {
  sideber.style.left = '-190px';
  sbutton.style.display = 'inline-block';
});