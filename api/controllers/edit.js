module.exports = {


    friendlyName: 'View Add',
  
  
    description: 'Display "Add" page.',
  
  
    // exits: {
  
    //   success: {
    //     viewTemplatePath: 'pages/add',
    //   },
  
    //   redirect: {
    //     description: 'The requesting user is already logged in.',
    //     responseType: 'redirect'
    //   }
  
    // },
  
  
    fn: async function () {
        var articles = await Articles.find({id:this.req.body.id});
      if (this.req.session.userId) {
        // throw {redirect: '/'};
        // return articles;
        return this.res.view('pages/edit',{edit: articles});

      }else{
          this.res.redirect('/');
          return {};
      }
  
    //   return {};
  
    }
  
  
  };
  