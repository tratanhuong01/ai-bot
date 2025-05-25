import multer from "multer";
import path from "path";

const upload = (folder: string) =>
  multer({
    limits: {
      fileSize: 4 * 1024 * 1024,
    },
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, folder); // Thư mục lưu file
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Đổi tên file
      },
    }),
  });

export default upload;
