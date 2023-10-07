//  Soleil
const sun = document.querySelector('.sun');
const sunX = window.innerWidth/2;
const sunY = window.innerHeight/2;
const radiusConstant = 50;
const orbitConstant = radiusConstant*2;


sun.style.left = `${sunX}px`;
sun.style.top = `${sunY}px`;


// ----------- Création des planetes ----------------

// Objet Mercure
const mercury = {
    speed: 0.05,
    theta : Math.random() * 2 *Math.PI, // position initiale, on crée une position aléatoire
    radius : radiusConstant*1.1, // distance du soleil
    element: document.querySelector('.mercury'),
}

// Objet Venus
const venus = {
    speed: 0.0192328125,
    theta : Math.random() * 1.8 *Math.PI,
    radius : radiusConstant*1.6,
    element: document.querySelector('.venus'),
}

// Objet Terre
const earth = {
    speed: 0.0096630252,
    theta : Math.random() * 2 *Math.PI,
    radius : radiusConstant*2.3,
    element: document.querySelector('.earth'),
}

// Objet Mars
const mars = {
    speed: 0.0040665094,
    theta : Math.random() * 2 *Math.PI,
    radius : radiusConstant*2.9,
    element: document.querySelector('.mars'),
}

// Objet Jupiter
const jupiter = {
    speed: 0.0006447748,
    theta : Math.random() * 2 *Math.PI,
    radius : radiusConstant*3.8,
    element: document.querySelector('.jupiter'),
}

// Objet Saturne
const saturn = {
    speed: 0.0002601062,
    theta : Math.random() * 2 *Math.PI,
    radius : radiusConstant*4.5,
    element: document.querySelector('.saturn'),
}

// Objet Uranus
const uranus = {
    speed: 0.0000907336,
    theta : Math.random() * 2 *Math.PI,
    radius : radiusConstant*5.3,
    element: document.querySelector('.uranus'),
}

// Objet Neptune
const neptune = {
    speed: 0.0000462325,
    theta : Math.random() * 2 *Math.PI,
    radius : radiusConstant*6.3,
    element: document.querySelector('.neptune'),
}




// ---------------------- Update la position des planets----------------------
function update(planet) {
    planet.theta += planet.speed;
    planet.element.style.left = `${Math.cos(planet.theta) * planet.radius + sunX}px`;// permet de faire tourner la planet autour du soleil X
    planet.element.style.top = `${Math.sin(planet.theta) * planet.radius + sunY}px`; // permet de faire tourner la planet autour du soleil Y
}

const planets = [
    mercury,
    venus,
    earth,
    mars,
    jupiter,
    saturn,
    jupiter,
    uranus,
    neptune,
];

setInterval(() => {
    planets.forEach(update)
}, 10) // La fonction sera appellée toutes les 100ms


// ----------- Création des orbites ----------------
function createOrbit(radius, planetName) {
    const orbit = document.createElement('div');
    orbit.classList.add('orbit', `orbit-${planetName}`);
    orbit.style.setProperty('--radius', `${radius}px`);
    document.body.appendChild(orbit);
  }
  
  
  // Utilisez la valeur de radiusConstant pour créer les orbites
createOrbit(orbitConstant * 1.1); // Orbite de Mercure
createOrbit(orbitConstant * 1.6); // Orbite de Venus
createOrbit(orbitConstant * 2.3); // Orbite de la Terre
createOrbit(orbitConstant * 2.9); // Orbite de Mars
createOrbit(orbitConstant * 3.8); // Orbite de Jupiter
createOrbit(orbitConstant * 4.5); // Orbite de Saturne
createOrbit(orbitConstant * 5.3); // Orbite de Uranus
createOrbit(orbitConstant * 6.3); // Orbite de Neptune
