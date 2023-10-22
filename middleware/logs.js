const logRequest = (req, res, next) => {
    console.log('terjadi request ke PATH: ', req.path);
    next(); //next to next process
}

module.exports = logRequest