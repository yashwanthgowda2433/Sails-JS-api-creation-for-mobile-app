// const Articles = require("../models/Articles");

// const Imgupload = require("../models/Imgupload");

module.exports = {


    friendlyName: 'View Home Page',
  
  
    description: 'Display "Home" page.',
  
  
    // exits: {
  
    //   success: {
    //     viewTemplatePath: 'pages/homepage',
    //   },
  
    //   redirect: {
    //     description: 'The requesting user is already logged in.',
    //     responseType: 'redirect'
    //   }
  
    // },
  
  
    fn: async function () {
        var articles = await Articles.find({userid:this.req.session.userId});
        var images = await Imgupload.find();

      if (this.req.me) {
        throw {redirect: '/'};
      }
    //   return articles;
      return this.res.view('pages/homepage',{app: articles, images:images});
  
    //   return {records};
  
    }
  
  
  };
  