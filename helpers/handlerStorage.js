const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (res, file, callback ){
        const pathStorage = `${__dirname}/../storage`;
        callback(null, pathStorage);
    },
    filename: function (res, file, callback ){
        const extension = file.originalname.split('.').pop(); //ultimo valor de array del nombre de archivo separado por puntos
        const filename = `file-${Date.now()}.${extension}`;
        callback(null, filename);
    },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;