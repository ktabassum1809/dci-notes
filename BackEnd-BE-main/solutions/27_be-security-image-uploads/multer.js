import multer from "multer";

export const upload = multer({
  dest: process.cwd() + "/uploads",
  limits: { fileSize: 200000 }, // 200kb
});
