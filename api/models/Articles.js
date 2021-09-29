/**
 * Articles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    userid: {
      type: 'string'
    },
    
    title: {
      type: 'string'
    },

    subject: {
      type: 'string'
    },

    body: {
      type: 'string'
    },

  },
  datastores:'default'

};

