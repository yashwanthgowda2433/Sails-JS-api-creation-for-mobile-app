// const Articles = require("../models/Articles");

const fs = require('fs');
const { setMaxListeners } = require('process');
// const Imgupload = require('../models/Imgupload');

module.exports = {

    fn: async function () {
        var base64string = '';
        var basestring = this.req.file('avatar').upload(function (err, files) {
              if (err)
              {
                  return this.res.serverError(err);
              }else{
                  if(files.length===0)
                  {
                      return 'no file was uploaded';
                  }
                

                  var binaryData = fs.readFileSync(files[0].fd);
                base64string = new Buffer(binaryData).toString("base64");
                Imgupload.create({image:"data:image/png;base64," +base64string}).exec(function(err){
                    if(err)
                    {
                        return 'failed';
                    }else{
                        fs.unlink(files[0].fd);

                        return 'files';
                    }
                });

                fs.unlinkSync(files[0].fd);

                return 'successfully uploaded!';
              }
            });

            var files = basestring[0];
                 return 'successfully Uploaded!'+{files};  
             
           


        }


        
  
  };
  