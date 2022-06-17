const agents = {
    1: {
        name: "astra",
        displayName: "Astra",
        category: "Controlador",
        image: ["https://static.wikia.nocookie.net/valorant/images/8/8a/Astra_artwork.png/revision/latest/scale-to-width-down/326?cb=20210302170140"],
        color: "#CD64DA",
        skills: ["Pulso nova", "Nebulosa", "Pozo gravitatorio", "Forma astral / Separación cósmica"],
        canBeObtained: "Mediante su contrato",
        nationality: "Ghana"
    },

    2: {
        name: "breach",
        displayName: "Breach",
        category: "Iniciador",
        image: ["https://static.wikia.nocookie.net/valorant/images/5/5c/Breach_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020225"],
        color: "#DD9534",
        skills: ["Explosión cegadora", "Falla", "Réplica", "Fragor imparable"],
        canBeObtained: "Mediante su contrato",
        nationality: "Suecia"
    },

    3: {
        name: "brimstone",
        displayName: "Brimstone",
        category: "Controlador",
        image: ["https://static.wikia.nocookie.net/valorant/images/3/37/Brimstone_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020239"],
        color: "#F1900D",
        skills: ["Incendiario", "Cortina de humo", "Baliza estimulante", "Golpe orbital"],
        canBeObtained: "Gratuito",
        nationality: "EEUU"
    },

    4: {
        name: "chamber",
        displayName: "Chamber",
        category: "Centinela",
        image: ["https://static.wikia.nocookie.net/valorant/images/5/5d/Chamber_artwork.png/revision/latest/scale-to-width-down/326?cb=20211031124636"],
        color: "#EAD83B",
        skills: ["Cazador de cabezas", "Rendez-vous", "Marca registrada", "Tour de force"],
        canBeObtained: "Mediante su contrato",
        nationality: "Francia"
    },

    5: {
        name: "cypher",
        displayName: "Cypher",
        category: "Centinela",
        image: ["https://static.wikia.nocookie.net/valorant/images/b/bb/Cypher_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020329"],
        color: "#5A72DE",
        skills: ["Prisión cibernética", "Cámara espía", "Cable trampa", "Hurto neuronal"],
        canBeObtained: "Mediante su contrato",
        nationality: "Marruecos"
    },

    6: {
        name: "fade",
        displayName: "Fade",
        category: "Iniciador",
        image: ["https://static.wikia.nocookie.net/valorant/images/8/8a/Fade_artwork.png/revision/latest/scale-to-width-down/326?cb=20220425005211"],
        color: "#3A3B3E",
        skills: ["Capturar", "Atormentar", "Acechadora", "Anochecer"],
        canBeObtained: "Mediante su contrato",
        nationality: "Turquía"
    },

    7: {
        name: "jett",
        displayName: "Jett",
        category: "Duelista",
        image: ["https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020209"],
        color: "#CFE3EC",
        skills: ["Vendaval", "Borrasca", "Tormenta de cuchillas"],
        canBeObtained: "Gratuito",
        nationality: "Corea"
    },

    8: {
        name: "kayo",
        displayName: "KAY/O",
        category: "Iniciador",
        image: ["https://static.wikia.nocookie.net/valorant/images/a/a9/KAYO_artwork.png/revision/latest/scale-to-width-down/326?cb=20210622163116"],
        color: "#4F5A8C",
        skills: ["Memoria/Flash", "Punto/Cero", "Frag/Mentación", "Null/CMD"],
        canBeObtained: "Mediante su contrato",
        nationality: "Línea de tiempo alternativa de la Tierra"
    },

    9: {
        name: "killjoy",
        displayName: "Killjoy",
        category: "Centinela",
        image: ["https://static.wikia.nocookie.net/valorant/images/6/6b/Killjoy_artwork.png/revision/latest/scale-to-width-down/220?cb=20200729134445"],
        color: "#E1F51F",
        skills: ["Bot de alarma", "Torreta", "Nanoenjambre", "Bloqueo"],
        canBeObtained: "Mediante su contrato",
        nationality: "Alemania"
    },

    10: {
        name: "neon",
        displayName: "Neon",
        category: "Duelista",
        image: ["https://static.wikia.nocookie.net/valorant/images/a/ad/Neon_artwork.png/revision/latest/scale-to-width-down/326?cb=20220112155550"],
        color: "#1FA0F5",
        skills: ["Explosiçon de relé", "A toda máquina", "Carril rápido", "Sobrecarga"],
        canBeObtained: "Mediante su contrato",
        nationality: "Filipinas"
    },

    11: {
        name: "omen",
        displayName: "Omen",
        category: "Controlador",
        image: ["https://static.wikia.nocookie.net/valorant/images/0/06/Omen_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020233"],
        color: "#0D175A",
        skills: ["Paranoia", "Velo tenebroso", "Aparición tenebrosa", "Desde las sombras"],
        canBeObtained: "Mediante su contrato",
        nationality: "Nacionalidad desconocida"
    },

    12: {
        name: "phoenix",
        displayName: "Phoenix",
        category: "Duelista",
        image: ["https://static.wikia.nocookie.net/valorant/images/f/fa/Phoenix_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020246"],
        color: "#F59650",
        skills: ["Bola curva", "Combustión", "Llamarada", "Cenizas"],
        canBeObtained: "Gratuito",
        nationality: "Reino Unido"
    },

    13: {
        name: "raze",
        displayName: "Raze",
        category: "Duelista",
        image: ["https://static.wikia.nocookie.net/valorant/images/c/c4/Raze_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020217"],
        color: "#DF792E",
        skills: ["Frado explosivo", "Balas de pintura", "Bot explosivo", "Cierra telones"],
        canBeObtained: "Mediante su contrato",
        nationality: "Brasil"
    },

    14: {
        name: "reyna",
        displayName: "Reyna",
        category: "Duelista",
        image: ["https://static.wikia.nocookie.net/valorant/images/4/41/Reyna_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020340"],
        color: "#D553D7",
        skills: ["Devorar", "Despreciar", "Mirada lasciva", "Emperatriz"],
        canBeObtained: "Mediante su contrato",
        nationality: "México"
    },

    15: {
        name: "sage",
        displayName: "Sage",
        category: "Centinela",
        image: ["https://static.wikia.nocookie.net/valorant/images/1/1e/Sage_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020306"],
        color: "#68F0D7",
        skills: ["Orbe de ralentización", "Orbe de sanación", "Orbe barrera", "Resurrección"],
        canBeObtained: "Gratuito",
        nationality: "China"
    },

    16: {
        name: "skye",
        displayName: "Skye",
        category: "Iniciador",
        image: ["https://static.wikia.nocookie.net/valorant/images/d/d6/Skye_artwork.png/revision/latest/scale-to-width-down/326?cb=20201013182515"],
        color: "#68F091",
        skills: ["Precursor", "Luz guía", "Reforestación", "Buscadores"],
        canBeObtained: "Mediante su contrato",
        nationality: "Australia"
    },

    17: {
        name: "sova",
        displayName: "Sova",
        category: "Iniciador",
        image: ["https://static.wikia.nocookie.net/valorant/images/6/61/Sova_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020314"],
        color: "#68BAF0",
        skills: ["Flecha explosiva", "Proyectil de reconocimiento", "Dron de reconocimiento", "Furia del cazador"],
        canBeObtained: "Gratuito",
        nationality: "Rusia"
    },

    18: {
        name: "viper",
        displayName: "Viper",
        category: "Controlador",
        image: ["https://static.wikia.nocookie.net/valorant/images/9/91/Viper_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020322"],
        color: "#12ED15",
        skills: ["Nube venenosa", "Pantalla tóxica", "Veneno de serpiente", "Pozo de víbora"],
        canBeObtained: "Mediante su contrato",
        nationality: "EEUU"
    },

    19: {
        name: "yoru",
        displayName: "Yoru",
        category: "Duelista",
        image: ["https://static.wikia.nocookie.net/valorant/images/1/1a/Yoru_artwork.png/revision/latest/scale-to-width-down/326?cb=20210112180407"],
        color: "#2B48EC",
        skills: ["Punto ciego", "Infiltración", "Engaño", "Viaje interdimensional"],
        canBeObtained: "Mediante su contrato",
        nationality: "Japón"
    }
};

module.exports = agents;
// name: "",
// displayName: "",
// category: "",
// image: [""],
// color: "#",
// skills: [""],
// canBeObtained: "",
// nationality: ""