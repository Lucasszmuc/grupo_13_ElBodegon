const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');


const userModel = {
    
    fileRoute: path.join(__dirname, '../data/users.json'),

    create: (userData) => {
        // ejecutamos el método findByEmail para que busque un usuario en el JSON que tenga el mail que nos llega desde userData
        const emailInUse = userModel.findByEmail(userData.email);

        if (emailInUse) {
            return ({
                error: 'email is already in use'
            });
        }

        let users = JSON.parse(fs.readFileSync(userModel.fileRoute, 'utf-8'));

        const newUser = {
            id: uuid.v4(),
            ...userData
        };

        newUser.password = bcrypt.hashSync(newUser.password, 12);

        users.push(newUser);

        const usersJson = JSON.stringify(users);

        fs.writeFileSync(userModel.fileRoute, usersJson, 'utf-8');

        return newUser;
    },
    findAll: () => {
        // Buscamos el contenido del archivo JSON
        const jsonData = fs.readFileSync(userModel.fileRoute, "utf-8");
        // Convertimos el JSON en Javascript
        const users = JSON.parse(jsonData);
        return users;
    },
    
    findByEmail: (email) => {
        const users = userModel.findAll();
    
    // console.log("Email being searched:", email);
    // console.log("All users:", users);

    const coincidence = users.find(usuarioActual => usuarioActual.email === email);
    console.log("Coincidence:", coincidence);

    return coincidence || null;
    }

}

module.exports = userModel;