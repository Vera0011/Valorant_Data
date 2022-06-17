const weapons = {
    1: {
        name: "bulldog",
        displayName: "Bulldog",
        category: "Rifle",
        image: ["https://static.wikia.nocookie.net/valorant/images/0/07/Bulldog.png/revision/latest/scale-to-width-down/200?cb=20220306002110"],
        wallPenetration: "Media",
        zoom: "x1.25",
        color: "#615E5E",
        price: "2.050",
        chargerCapacity: "24 balas",
        rateOfFire: "9.15 balas/segundo",
        shotType: "Automático",
        damage: "30-116 puntos de daño/bala"
    },

    2: {
        name: "guardian",
        displayName: "Guardian",
        category: "Rifle",
        image: ["https://static.wikia.nocookie.net/valorant/images/f/fd/Guardian.png/revision/latest/scale-to-width-down/200?cb=20220306002211"],
        wallPenetration: "Media",
        zoom: "x1.5",
        color: "#615E5E",
        price: "2.700",
        chargerCapacity: "12 balas",
        rateOfFire: "6.5 balas/segundo",
        shotType: "SemiAutomático",
        damage: "49-195 puntos de daño/bala"
    },

    3: {
        name: "phantom",
        displayName: "Phantom",
        category: "Rifle",
        image: ["https://static.wikia.nocookie.net/valorant/images/e/ec/Phantom.png/revision/latest/scale-to-width-down/200?cb=20220306002314"],
        wallPenetration: "Media",
        zoom: "x1.25",
        color: "#615E5E",
        price: "2.900",
        chargerCapacity: "30 balas",
        rateOfFire: "11 balas/segundo",
        shotType: "Automático",
        damage: "26-156 puntos de daño/bala"
    },

    4: {
        name: "vandal",
        displayName: "Vandal",
        category: "Rifle",
        image: ["https://static.wikia.nocookie.net/valorant/images/5/56/Vandal.png/revision/latest/scale-to-width-down/200?cb=20220306002438"],
        wallPenetration: "Media",
        zoom: "x1.25",
        color: "#615E5E",
        price: "2.900",
        chargerCapacity: "25 balas",
        rateOfFire: "9.25 balas/segundo",
        shotType: "Automático",
        damage: "33-156 puntos de daño/bala"
    },

    5: {
        name: "stinger",
        displayName: "Stinger",
        category: "Subfusil",
        image: ["https://static.wikia.nocookie.net/valorant/images/b/b6/Stinger.png/revision/latest/scale-to-width-down/200?cb=20220306002413"],
        wallPenetration: "Baja",
        zoom: "x1.15",
        color: "#615E5E",
        price: "950",
        chargerCapacity: "20 balas",
        rateOfFire: "18 balas/segundo",
        shotType: "Automático",
        damage: "21-67 puntos de daño/bala"
    },

    6: {
        name: "spectre",
        displayName: "Spectre",
        category: "Subfusil",
        image: ["https://static.wikia.nocookie.net/valorant/images/9/90/Spectre.png/revision/latest/scale-to-width-down/200?cb=20220306002356"],
        wallPenetration: "Media",
        zoom: "x1.15",
        color: "#615E5E",
        price: "1.600",
        chargerCapacity: "30 balas",
        rateOfFire: "13,33 balas/segundo",
        shotType: "Automático",
        damage: "18-78 puntos de daño/bala"
    },

    7: {
        name: "bucky",
        displayName: "Bucky",
        category: "Escopeta",
        image: ["https://static.wikia.nocookie.net/valorant/images/e/eb/Bucky.png/revision/latest/scale-to-width-down/200?cb=20220306002057"],
        wallPenetration: "Baja",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "850",
        chargerCapacity: "5 balas",
        rateOfFire: "1.1 balas/segundo",
        shotType: "Semiautomático",
        damage: "8-44 puntos de daño/bala"
    },

    8: {
        name: "judge",
        displayName: "Judge",
        category: "Escopeta",
        image: ["https://static.wikia.nocookie.net/valorant/images/8/8a/Judge.png/revision/latest/scale-to-width-down/200?cb=20220306002225"],
        wallPenetration: "Media",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "1.850",
        chargerCapacity: "7 balas",
        rateOfFire: "3.5 balas/segundo",
        shotType: "Automático",
        damage: "9-34 puntos de daño/bala"
    },

    9: {
        name: "marshal",
        displayName: "Marshal",
        category: "Fusil",
        image: ["https://static.wikia.nocookie.net/valorant/images/b/b9/Marshal.png/revision/latest/scale-to-width-down/200?cb=20220306002237"],
        wallPenetration: "Media",
        zoom: "x2.5",
        color: "#615E5E",
        price: "950",
        chargerCapacity: "5 balas",
        rateOfFire: "1.5 balas/segundo",
        shotType: "Semiautomático",
        damage: "85-202 puntos de daño/bala"
    },

    10: {
        name: "operator",
        displayName: "Operator",
        category: "Fusil",
        image: ["https://static.wikia.nocookie.net/valorant/images/1/17/Operator.png/revision/latest/scale-to-width-down/200?cb=20220306002302"],
        wallPenetration: "Alta",
        zoom: "x2.5 / x5",
        color: "#615E5E",
        price: "4.700",
        chargerCapacity: "5 balas",
        rateOfFire: "0.75 balas/segundo",
        shotType: "Semiautomático",
        damage: "127-255 puntos de daño/bala"
    },

    11: {
        name: "ares",
        displayName: "Ares",
        category: "Armas pesadas",
        image: ["https://static.wikia.nocookie.net/valorant/images/0/05/Ares.png/revision/latest/scale-to-width-down/200?cb=20220306002039"],
        wallPenetration: "Alta",
        zoom: "x1.25",
        color: "#615E5E",
        price: "1.550",
        chargerCapacity: "50 balas",
        rateOfFire: "10-13 balas/segundo",
        shotType: "Automático",
        damage: "23-72 puntos de daño/bala"
    },

    12: {
        name: "odin",
        displayName: "Odin",
        category: "Armas pesadas",
        image: ["https://static.wikia.nocookie.net/valorant/images/5/58/Odin.png/revision/latest/scale-to-width-down/200?cb=20220306002249"],
        wallPenetration: "Alta",
        zoom: "x1.25",
        color: "#615E5E",
        price: "3.200",
        chargerCapacity: "100 balas",
        rateOfFire: "12-15.6 balas/segundo",
        shotType: "Automático",
        damage: "26-95 puntos de daño/bala"
    },

    13: {
        name: "classic",
        displayName: "Classic",
        category: "Armas de mano",
        image: ["https://static.wikia.nocookie.net/valorant/images/5/57/Classic.png/revision/latest/scale-to-width-down/130?cb=20220306002125"],
        wallPenetration: "Baja",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "Gratuita",
        chargerCapacity: "12 balas",
        rateOfFire: "6.75 balas/segundo",
        shotType: "Semiautomático",
        damage: "18-78 puntos de daño/bala"
    },

    14: {
        name: "shorty",
        displayName: "Shorty",
        category: "Armas de mano",
        image: ["https://static.wikia.nocookie.net/valorant/images/7/77/Shorty.png/revision/latest/scale-to-width-down/170?cb=20220306002343"],
        wallPenetration: "Baja",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "150",
        chargerCapacity: "2 balas",
        rateOfFire: "3.3 balas/segundo",
        shotType: "Semiautomático",
        damage: "2-36 puntos de daño/bala"
    },

    15: {
        name: "frenzy",
        displayName: "Frenzy",
        category: "Armas de mano",
        image: ["https://static.wikia.nocookie.net/valorant/images/f/f1/Frenzy.png/revision/latest/scale-to-width-down/130?cb=20220306002141"],
        wallPenetration: "Baja",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "450",
        chargerCapacity: "13 balas",
        rateOfFire: "10 balas/segundo",
        shotType: "Automático",
        damage: "17-78 puntos de daño/bala"
    },

    16: {
        name: "ghost",
        displayName: "Ghost",
        category: "Armas de mano",
        image: ["https://static.wikia.nocookie.net/valorant/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/170?cb=20220306002156"],
        wallPenetration: "Media",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "500",
        chargerCapacity: "15 balas",
        rateOfFire: "6.75 balas/segundo",
        shotType: "Semiautomático",
        damage: "21-105 puntos de daño/bala"
    },

    17: {
        name: "sheriff",
        displayName: "Sheriff",
        category: "Armas de mano",
        image: ["https://static.wikia.nocookie.net/valorant/images/3/3e/Sheriff.png/revision/latest/scale-to-width-down/170?cb=20220306002329"],
        wallPenetration: "Alta",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "800",
        chargerCapacity: "6 balas",
        rateOfFire: "4 balas/segundo",
        shotType: "Semiautomático",
        damage: "43-160 puntos de daño/bala"
    },

    18: {
        name: "navaja_tactica",
        displayName: "Navaja táctica",
        category: "Cuerpo a cuerpo",
        image: ["https://static.wikia.nocookie.net/valorant/images/d/d8/TacticalKnife.png/revision/latest/scale-to-width-down/200?cb=20220306002426"],
        wallPenetration: "Ninguna",
        zoom: "Sin zoom",
        color: "#615E5E",
        price: "Gratuita",
        chargerCapacity: "Sin cargador",
        rateOfFire: "Sin velocidad de disparo",
        shotType: "Sin tipo de disparo",
        damage: "50 puntos de daño/cuchillada (el doble si es por la espalda)"
    },

    19: {
        name: "pistola_dorada",
        displayName: "Pistola dorada",
        category: "Armas de mano",
        image: ["https://static.wikia.nocookie.net/valorant/images/2/23/GoldenGun.png/revision/latest/scale-to-width-down/170?cb=20210122000812"],
        wallPenetration: "Alta",
        zoom: "Sin zoom",
        color: "#DACF64",
        price: "No se puede comprar",
        chargerCapacity: "3 balas",
        rateOfFire: "3 balas/segundo",
        shotType: "Semiautomático",
        damage: "Muerte instantánea por bala"
    }
};

module.exports = weapons;