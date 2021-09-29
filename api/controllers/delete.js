// const Articles = require("../models/Articles");


module.exports = {

    fn: async function () {

    var id = this.req.body.iddel;
   
    Articles.destroy({id:id}).exec(function(err){
        if(err)
        {
            this.res.send(500, {error: 'Database Error'});
        }else{
            this.res.redirect('/');
        }
    });

    //   return username;
    this.res.redirect('/');
    // return false;
    }
  
  
  };
  