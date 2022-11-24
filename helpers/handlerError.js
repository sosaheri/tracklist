const handleHttpError = (res, message="Oopss", code = 403 ) => {

    res.status(code);
    res.send({ error: message});

}

module.exports = { handleHttpError };