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
          type: user.type,
          avatar: user.avatar,
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
  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { type } = req.body;
      const validTypes = ['Customer', 'Admin'];
  
      if (!validTypes.includes(type)) {
        return res.status(400).json({ error: 'Tipo de usuario no válido' });
      }
  
      const user = await User.findByPk(id);
  
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }

      user.type = type;
  
      await user.save();
  
      res.json({
        message: 'Rol de usuario actualizado correctamente',
        data: {
          id: user.id,
          type: user.type
        },
        meta: {
          status: 200
        }
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
  },
  deleteUser: async (req, res) => {
    try {
 
      const { id } = req.params;
  

      const userToDelete = await User.findByPk(id);
      
      if (!userToDelete) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      await userToDelete.destroy();
  
      res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Hubo un error en el servidor' });
    }
  }

};

module.exports = apiController;
