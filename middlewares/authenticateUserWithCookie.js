const userModel = require("../models/userModels");

const authenticateUserWithCookie = {
  authenticateUserWithCookie: (req,res,next)=>{
    if(req.cookies.email){

    // Mediante el modelo vamos a buscar los datos del usuario
    const user = userModel.findByEmail(req.cookies.email);

    // Guardamos en session los datos del mismo
    req.session.user = user;
}
  
  next(); // Continúa con el siguiente middleware o ruta
  }
}

  module.exports = authenticateUserWithCookie
  