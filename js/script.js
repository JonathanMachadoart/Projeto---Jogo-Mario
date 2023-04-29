const mario = document.querySelector('.mario');
const canoVerde = document.querySelector('.canoVerde');

const jump = () => {
   mario.classList.add('jump');

   setTimeout(() => {

     mario.classList.remove('jump');

   }, 500);
}

const loop = setInterval(() => { 

    console.log('loop')

  const canoVerdePosition = canoVerde.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');;

  console.log(marioPosition);
  console.log(canoVerde);

   if (canoVerdePosition <= 120 && canoVerdePosition > 0 && marioPosition < 80) {

    canoVerde.style.animation = 'none';
    canoVerde.style.left = `${canoVerdePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './imagens/gameOver.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '30px';

    clearInterval(loop);


   }

}, 10);

document.addEventListener('keydown', jump);