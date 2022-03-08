const getIndexPage = (req, res) => {
    res.render('index');
}

const getEventPage = (req, res) => {
    res.render('eventPage');
}

const getLaunchPage = (req , res) => {
    res.render('launchPage');
}

module.exports = {
    getIndexPage,
    getEventPage,
    getLaunchPage,
}