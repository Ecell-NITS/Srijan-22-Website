const getIndexPage = (req, res) => {
  res.render("index");
};

const getEventPage = (req, res) => {
  res.render("eventPage");
};

const getLaunchPage = (req, res) => {
  res.render("LaunchPage");
};

module.exports = {
  getIndexPage,
  getEventPage,
  getLaunchPage,
};
