const dino = documento.queryselector('.dino');
const backgroud = documento.queryselector('.background');
let isJumping = false;

function handlekeyUp(event)   {
	if (event.KeyCode === 32) {
		if (!isJumping) {
		jump();
	   }
	}
}

function jump() {
	let position = 0;

	isJumping = true;

	let upInterval = setInterval(() =>{
    if (position >= 150) {
    	clearInterval(upInterval);

    	//Descendo 
    	let downInterval = setInterval(() => {
    		if (position <= 0) {
    			clearInterval(downInterval);
    			isJumping = false;
    		} else {
    		position -= 20;
    		dino.style.bottom = position + 'px';
    	   }
         }, 20);
        } else {
    	//Subindo
        position +=20;
        dino.style.bottom = position + 'px';
        }
     }, 20);
}

function createCactus() {
  const cactus = documento.createElementos('div');
  let cactusPosition = 1000;
  let randomTime = Math.random(); * 6000;


  cactus.classList.add('cactus');
  cactus.style.left = 1000 + 'px';
  backgroud.appendChild(cactus);

  let leftInterval = setInterval(() => {
   if (cactusPosition < -60) {
   clearInterval(leftInterval);
   backgroud.removeChild(cactus);
    
    } else if (cactusPosition > o && cactusPosition <60) {
    	cactusPosition -= 10;
    	cactus.style.left = cactusPosition + 'px';
    
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}

createCactus();
documento.addEventListener('keyup' , handlekeyup);