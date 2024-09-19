import multer from "multer";

const storage = multer.diskStorage({
  // Write your code here
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const name = Date.now() + "-" + file.originalname
    cb(null, name)
  }
});

const imageUpload = multer({ storage });

export default imageUpload;