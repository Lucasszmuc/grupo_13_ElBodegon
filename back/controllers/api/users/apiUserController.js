const { User } = require('../../../database/models');

const apiController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();

      const response = {
        users: users.map((user) => ({
          id: user.id,
          name: user.username,
          email: user.email,
          detail: `/api/user/${user.id}`,
        })),
        meta: {
          status: 200,
          path: '/api/users',
          count: users.length,
          query: req.query,
        },
      };

      res.json(response);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
  },

  getUserDetail: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (!user) {
        res.status(404).json({ error: 'Usuario no encontrado' });
        return;
      }

      const response = {
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        meta: {
          status: 200,
        },
      };

      res.json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
  },
};

module.exports = apiController;
