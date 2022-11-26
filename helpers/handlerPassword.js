const bcryptjs = require("bcryptjs");

const encrypt = async (passwordPlain) => {
        const hash = await bcryptjs.hash(passwordPlain, 10);
        return hash;
}

const compare = async (passwordPlain, passwordHash) => {
        const diff = await bcryptjs.compare(passwordPlain, passwordHash);
        return diff;
}

module.exports = { encrypt, compare}