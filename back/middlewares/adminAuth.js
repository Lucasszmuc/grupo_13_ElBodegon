const { User } = require('../database/models');

async function isAdmin(req, res, next) {
    if (req.session && req.session.user) {

        try {
            
            const user = await User.findOne({ where: { id: req.session.user.id } });

            if (user && user.type === 'Admin') {
                req.session.user = user;
                return next();
            } else {
                return res.status(403).send('Acceso denegado. Solo los administradores pueden acceder a esta sección.');
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send('Ocurrió un error al verificar el rol del usuario');
        }
    } else {
        return res.status(403).send('Acceso denegado. Debes estar autenticado para acceder a esta sección.');
    }
}

module.exports = isAdmin;
