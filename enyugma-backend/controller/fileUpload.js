import multer from  "multer";
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+"_"+ req.body.transactionId +"_"  + file.originalname );
    },
})

const upload = multer({storage: storage});

export default upload;