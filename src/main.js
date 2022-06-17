const fs = require("fs");

class Info {
    constructor(languaje) {
        this.agents = require(`${__dirname}/assets/${languaje}/agents.js`);
        this.maps = require(`${__dirname}/assets/${languaje}/maps.js`);
        this.miscellaneous = require(`${__dirname}/assets/${languaje}/miscellaneous.js`);
        this.skills = require(`${__dirname}/assets/${languaje}/skills.js`);
        this.weapons = require(`${__dirname}/assets/${languaje}/weapons.js`);

        this.language = languaje;
        this.array = [this.agents, this.maps, this.miscellaneous, this.skills, this.weapons];
    }

    search(name) {
        for (let i = 0; i < this.array.length; i++) {
            const data = Object.values(this.array[i]).find((data) => data.name === name);

            if (data !== undefined) return data;
        }

        return 0;
    }

    getRandom() {
        const path = `${__dirname}/assets/${this.language}/`
        const dirLength = fs.readdirSync(path).length - 1;
        const searchedFileRandom = Math.floor(Math.random() * (dirLength)) + 1;

        const searchedFileLength = Object.keys(this.array[searchedFileRandom]).length;
        const randomItem = Math.floor(Math.random() * (searchedFileLength - 1)) + 1;

        return this.array[searchedFileRandom][randomItem] || 0;
    }
}

console.log(new Info("es").getRandom());

module.exports = Info;