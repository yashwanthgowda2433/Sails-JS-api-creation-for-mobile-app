// const Articles = require("../models/Articles");

module.exports = {


    friendlyName: 'View Signup',
  
  
    description: 'Display "Signup" page.',
  
  
    // exits: {
  
    //   success: {
    //     viewTemplatePath: 'pages/signup',
    //   },
  
    //   redirect: {
    //     description: 'The requesting user is already logged in.',
    //     responseType: 'redirect'
    //   }
  
    // },
  
  
    fn: async function () {
  
    //   if (this.req.me) {
    //     throw {redirect: '/'};
    //   }
    
    var name = this.req.body.uname;
    var email = this.req.body.email;
    var password = this.req.body.password;

    await User.create({name:name, email:email, password:password}).exec(function(err){
        if(err)
        {
            this.res.send(500, {error: 'Database Error'});
        }else{
            this.res.redirect('/login');
        }
    });

    //   return username;
    this.res.redirect('/login');
    }
  
  
  };
  