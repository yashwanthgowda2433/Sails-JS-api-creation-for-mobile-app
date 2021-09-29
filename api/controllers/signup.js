module.exports = {


    friendlyName: 'View Signup',
  
  
    description: 'Display "Signup" page.',
  
  
    exits: {
  
      success: {
        viewTemplatePath: 'pages/signup',
      },
  
      redirect: {
        description: 'The requesting user is already logged in.',
        responseType: 'redirect'
      }
  
    },
  
  
    fn: async function () {
  
      if (this.req.me) {
        throw {redirect: '/'};
      }
  
      return {};
  
    }
  
  
  };
  