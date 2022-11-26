const ENGINE_DB = process.env.ENGINE_DB;

const path = ENGINE_DB === 'mysql' ? './sql' : './nosql';

    const models = {
    usersModel: require(`${path}/users`),
    tracksModel: require(`${path}/tracks`),
    storageModel: require(`${path}/storages`)
    }

module.exports = models