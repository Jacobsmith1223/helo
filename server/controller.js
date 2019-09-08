 const bcrypt = require('bcryptjs')


 const register = async (req,res) => {
     const {username,password,profile_pic} = req.body
     const db = req.app.get('db')

     const isUser = await db.find_user([username])
     if(isUser[0]){
         return res.status(401).send('username is unavailable')
     }
     const passwordSalt = bcrypt.genSaltSync(15);
     const passwordHash = bcrypt.hashSync(password,passwordSalt)

     const newUser = await db.register_user([username,passwordHash,profile_pic])

     req.session.user = newUser[0]
     
     res.status(200).send(newUser[0])
    
 }

 const login = async (req,res) => {
     const {username,password} = req.body
     const db = req.app.get('db')
     const isUser = await db.find_user([username])
     if(!isUser[0]){
         return res.status(403).send('invalid credentials please try again')
     }
     const authPass = bcrypt.compareSync(password, isUser[0].password)

     const userAccount = await db.get_user_account([isUser[0].id])

     if(authPass){
         delete isUser[0].password
         req.session.user = isUser[0]
         
         res.status(200).send(userAccount)
     }
     else{res.status(403).send('invalid password')}
 }

 module.exports = {
     register,
     login

 }