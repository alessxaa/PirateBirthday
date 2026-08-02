
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x020b23);

const camera = new THREE.PerspectiveCamera(

60,

window.innerWidth/window.innerHeight,

0.1,

1000

);

camera.position.z = 8;

const renderer = new THREE.WebGLRenderer({

canvas:document.getElementById("scene"),

antialias:true

});

renderer.setSize(window.innerWidth,window.innerHeight);

const moon = new THREE.Mesh(

new THREE.SphereGeometry(1,64,64),

new THREE.MeshBasicMaterial({

color:0xffffee

})

);

moon.position.set(3,2,-5);

scene.add(moon);

const stars = [];

for(let i=0;i<700;i++){

const star = new THREE.Mesh(

new THREE.SphereGeometry(0.02),

new THREE.MeshBasicMaterial({

color:0xffffff

})

);

star.position.set(

(Math.random()-0.5)*50,

(Math.random()-0.5)*25,

-Math.random()*30

);

scene.add(star);

stars.push(star);

}

const sea = new THREE.Mesh(

new THREE.PlaneGeometry(100,20,200,200),

new THREE.MeshBasicMaterial({

color:0x082f67,

wireframe:true

})

);

sea.rotation.x=-Math.PI/2;

sea.position.y=-2;

scene.add(sea);

function animate(){

requestAnimationFrame(animate);

sea.rotation.z+=0.0005;

renderer.render(scene,camera);

}

animate();

setTimeout(()=>{

gsap.to("#loading",{

opacity:0,

duration:1,

onComplete(){

document.getElementById("loading").remove();

}

});

gsap.to(".parchment",{

opacity:1,

y:-20,

duration:2

});

},2500);

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
