module.exports = {

  fn: async function () {

    // Clear the `userId` property from this session.
    delete this.req.session.userId;

    
    if (!this.req.wantsJSON) {
      this.res.redirect('/login');
    }

  }


};
