const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    const uid = req.session.user_id;
    console.log(uid)
    if (uid) {
      return res.redirect('/home');
    }
    return res.redirect('/login');
  });
  
  router.post("/", (req, res) => {
    const email = req.body.state.email;
    const password = req.body.state.password;
    db.query(`SELECT * FROM users;`)
    .then((data) => {
     const users = data.rows;
     const user = users.filter(u => u.email ===email);
     
      if (user[0].password === password) {
         console.log(" login success");
          req.session.user_id = user[0].id;
          return res.send(user);
        }
      
      // return res.status(403).send("The email or password is incorrect");
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ error: err.message });
    });
    
  })
  return router;
};