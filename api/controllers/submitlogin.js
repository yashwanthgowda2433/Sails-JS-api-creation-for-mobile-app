// const Articles = require("../models/Articles");

module.exports = {


    friendlyName: 'View Login',
  
  
    description: 'Display "Login" page.',
  
  
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
    
    var email = this.req.body.email;
    var password = this.req.body.password;

    var userRecord = await User.findOne({
        email: email,
      });
    //   return userRecord.email;
      if(!userRecord) {
        return 'No User found';
      }

      if(password != userRecord.password)
      {
         return 'incorrect password';
      }else{
        this.req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
        this.req.session.userId = userRecord.id;
        this.req.session.userName = userRecord.name;

        this.res.redirect('/');

      }

    //   return username;
    // this.res.redirect('/');
    }
  
  
  };
  