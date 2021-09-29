// const Articles = require("../models/Articles");


module.exports = {

    fn: async function () {
  
    var title = this.req.body.title;
    var subject = this.req.body.subject;
    var body = this.req.body.body;
    var id = this.req.body.id;
   
    await Articles.update({id:id},{title:title, subject:subject, body:body}).exec(function(err){
        if(err)
        {
            this.res.send(500, {error: 'Database Error'});
        }else{
            this.res.redirect('/');
        }
    });

    //   return username;
    this.res.redirect('/');
    }
  
  
  };
  