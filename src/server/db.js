
var config = {
    port: 4000,

    //db credentials
    mongo: {
        host: 'localhost',
        port: '27017',
        dbname: 'ak-students'
    }
};

config.mongo.url = `mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.dbname}`;

module.exports = config;