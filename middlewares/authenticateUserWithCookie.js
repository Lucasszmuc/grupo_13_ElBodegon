
const { User } = require('../database/models')

const authenticateUserWithCookie = {

  authenticateUserWithCookie: async (req,res,next)=>{
    if(req.cookies.email){

      try {
        var user = await User.findOne({
          where : {
            email : req.cookies.email
          }
        });
    
        if (user) {
          req.session.user = user;
        } 
    
       } catch (error) {
        return res.redirect("/users/login?error=El mail o la contraseña son incorrectos")
       }

}
  next(); // Continúa con el siguiente middleware o ruta
  },
  authenticateUser : async (req,res,next)=>{
   try {
    var user = await User.findOne({
      where : {
        email : req.body.email
      }
    });

    if (user) {
      req.session.user = user;
      next()
    } 

   } catch (error) {
     return res.redirect("/users/login?error="+ error)
   }

  }
}

  module.exports = authenticateUserWithCookie
  

