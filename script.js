const letter =
document.getElementById("letter");


document
.getElementById("openLetter")
.addEventListener("click",()=>{


letter.classList.remove("hidden");

firework(
innerWidth/2,
innerHeight/2
);


});






// COEURS QUI TOMBENT


function heart(){


let h =
document.createElement("div");


h.className="heart";


let list=[
"❤️",
"💖",
"💕",
"💜",
"🌸"
];


h.innerHTML=
list[Math.floor(Math.random()*list.length)];


h.style.left=
Math.random()*100+"vw";


h.style.fontSize=
20+
Math.random()*30
+"px";


h.style.animationDuration=
3+
Math.random()*5
+"s";



document.body.appendChild(h);



setTimeout(()=>{

h.remove();

},8000);


}



setInterval(heart,250);






// CADEAU


const gift =
document.getElementById("gift");


const loveBox =
document.getElementById("loveBox");


gift.onclick=()=>{


loveBox.classList.remove("hidden");


gift.innerHTML="🎀";


firework(
innerWidth/2,
innerHeight/2
);


};







// JAUGE D'AMOUR


const slider =
document.getElementById("loveSlider");


const number =
document.getElementById("number");


const text =
document.getElementById("loveText");



slider.oninput=function(){


let value=this.value;


number.innerHTML=value;



if(value<100)

text.innerHTML=
"Un petit début d'amour 🌱❤️";


else if(value<500)

text.innerHTML=
"Un amour qui grandit 🌸";


else if(value<1000)

text.innerHTML=
"Un amour immense 💖";


else if(value<1500)

text.innerHTML=
"Un amour plus grand que les étoiles ⭐";


else if(value<2000)

text.innerHTML=
"Presque infini 💜";


else

text.innerHTML=
"2000% d'amour, même l'univers ne suffit plus ❤️🎆";


};






// FEUX D'ARTIFICE


const canvas =
document.getElementById("fireworks");


const ctx =
canvas.getContext("2d");


canvas.width=innerWidth;

canvas.height=innerHeight;


let particles=[];



class Particle{


constructor(x,y){

this.x=x;

this.y=y;

this.vx=(Math.random()-.5)*10;

this.vy=(Math.random()-.5)*10;

this.life=100;

}


update(){

this.x+=this.vx;

this.y+=this.vy;

this.life--;

}


draw(){

ctx.beginPath();

ctx.arc(
this.x,
this.y,
3,
0,
Math.PI*2
);

ctx.fillStyle=
"hsl("+Math.random()*360+",100%,70%)";

ctx.fill();


}


}





function firework(x,y){


for(let i=0;i<80;i++)

particles.push(
new Particle(x,y)
);


}



function animate(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



particles.forEach((p,i)=>{


p.update();

p.draw();


if(p.life<=0)

particles.splice(i,1);


});


requestAnimationFrame(animate);


}


animate();



setInterval(()=>{


firework(

Math.random()*innerWidth,

Math.random()*innerHeight/2

);


},1500);
