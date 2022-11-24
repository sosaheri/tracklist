const customHeader = (req, res, next) => {
    try {
        console.log(req);
        const apiKey = req.headers.api_key;

        if( apiKey === 'aguacate1' ){
            console.log("API CORRECTA");
            next();
        }else{
            res.status(403)
            res.send({error: "API INCORRECTA"})
        }

    }
    catch (err ){
            res.status(403)
            res.send({error: "API INCORRECTA"})

    }
};

module.exports = customHeader