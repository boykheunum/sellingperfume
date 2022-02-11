const multer = require('multer');
const storage = multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,"./src/views/img/")
    },
    filename: function(req, file, cb){
      cb(null,Date.now()+ file.originalname);
    }
});

const upload = multer({
  storage:storage,
  limits:
  {
    fileSize:2 * 1024 * 1024
   }
}).single("hinhanh")


module.exports = [upload]