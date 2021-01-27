const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  
  // Updates The Total Amount of Money Raised 
  router.post("/",(req, res) => {
    console.log("POST ROUTE OF CREATORPROFILEUPDATE")
    const queryParams = [req.body.state.profile_title,req.body.state.profile_description, req.body.state.image, req.body.state.total_goal,1];
    const queryString = "insert into creator_profile(title,description,image,total_goal,user_id) values($1,$2,$3,$4,$5) RETURNING id";
    return db.query(queryString,queryParams)
    .then(data_profile => {
    
     const id = data_profile.rows[0].id;
     const products = req.body.state.products;
    function queryPromise(query) {
      return new Promise((resolve, reject) => {
          db.query(query, (err, result) => {
              if (err) {
                  return reject(err);
              }
  
              return resolve(result);
          });
      });
  }
     Promise.all(
       products.map((product) => {
         console.log(product);
        return queryPromise(
          `Insert into user_products (product_title,goal,description,category_id, user_id, image, creator_profile_id) values('${product.product_title}',${product.price}, '${product.description}',  ${product.categories},1,'image',${id});`
          
      );
       })
     )
     .then(data =>{
            console.log(data);
            res.status(200).send(data_profile);
          })
          .catch(err => {
            console.log(err);
            res
              .status(500)
              .json({ error: err.message });
          });
   
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })
  return router;
};

