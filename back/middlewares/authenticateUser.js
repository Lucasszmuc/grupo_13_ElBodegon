const { User } = require('../database/models');

const authenticateUser = async (req, res, next) => {
  if (req.cookies.email) {
    try {
      const user = await User.findOne({
        where: {
          email: req.cookies.email
        }
      });

      if (user) {
        req.session.user = user;
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  } else if (req.body.email) {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
      req.session.user = user;
    }
  }

  next();
};

module.exports = authenticateUser;


