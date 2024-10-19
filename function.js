function calculateWeight() {
    const mass = parseFloat(document.getElementById('mass').value),
          planet = document.getElementById('selectPlanet').value,
          resultWeight = document.getElementById('resultWeight'),
          resultPlanet = document.getElementById('resultPlanet')

    if (!mass || !planet) {
        resultWeight.textContent = "Please enter your weight and select a planet"
        return
    }

    const gravityFactors = {
        mercury: 0.38, venus: 0.91, earth: 1, mars: 0.38, jupiter: 2.34, 
        saturn: 1.06, uranus: 0.92, neptune: 1.19
    },
    planetImages = {
        mercury: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/240px-Mercury_in_true_color.jpg",
        venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
        earth: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
        mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
        jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
        saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
        neptune: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"
    }

    const weightOnPlanet = (mass * gravityFactors[planet]).toFixed(2)
    resultWeight.textContent = `Your weight on ${planet.charAt(0).toUpperCase() + planet.slice(1)} is ${weightOnPlanet} kg.`
    resultPlanet.src = planetImages[planet]
    resultPlanet.style.display = "block"
}