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
  },
  authenticateUser :(req,res,next)=>{

    const user = userModel.findByEmail(req.body.email);
    
    if (user) {
      req.session.user = user;
      next()
    } else{
      res.redirect("/users/login?error=El mail o la contraseña son incorrectos")
    }
  }
}

  module.exports = authenticateUserWithCookie
  