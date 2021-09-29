module.exports = {


    friendlyName: 'View Add',
  
  
    description: 'Display "Add" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/add',
      },
  
      redirect: {
        description: 'The requesting user is already logged in.',
        responseType: 'redirect'
      }
  
    },
  
  
    fn: async function () {
  
      if (this.req.session.userId) {
        // throw {redirect: '/'};
      }else{
          this.res.redirect('/');
      }
  
      return {};
  
    }
  
  
  };
  