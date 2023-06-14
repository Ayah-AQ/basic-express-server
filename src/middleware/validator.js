module.exports = (req, res, next) => {
  const Name = req.query.name;

  if (Name && !Number.parseInt(Name)) {
    next();
  } else {
    next("No name provided");
  }
};