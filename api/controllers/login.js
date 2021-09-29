module.exports = {


    friendlyName: 'View login',
  
  
    description: 'Display "Login" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/login',
      },
  
      redirect: {
        description: 'The requesting user is already logged in.',
        responseType: 'redirect'
      }
  
    },
  
  
    fn: async function () {
  
      if (this.req.session.userId) {
        throw {redirect: '/'};
      }
  
      return {};
  
    }
  
  
  };
  