import cheerio from "cheerio";
import fs from "fs/promises";
import path from "path";

export class UploadService {
  async uploadBase64(base64: string, filename: string) {
    const buffer = Buffer.from(base64, "base64");
    const filePath = path.join(
      __dirname,
      "resources/static/images/thumbnails/blogs/content",
      filename
    );
    await fs.writeFile(filePath, buffer);
    return filePath;
  }
  getImageFromContent(content: string) {
    const uploadedImages: any[] = [];
    const $ = cheerio.load(content);
    $("img").each((i, img) => {
      const base64 = $(img).attr("src");

      if (base64 && base64.startsWith("data:image")) {
        const match = base64.match(/^data:image\/(\w+);base64,(.+)/);
        if (!match) return;

        const ext = match[1]; // Lấy đuôi file (jpg, png,...)
        const data = match[2]; // Lấy phần Base64

        uploadedImages.push({
          ext,
          data,
        });
      }
    });
    return uploadedImages;
  }
  async processContentUpload(content: string, contentPrev: string = "") {
    const imageContent = this.getImageFromContent(content); // [1,2,3]
    const imageContentPrev = this.getImageFromContent(contentPrev); // [1,4,5]
    if (imageContentPrev.length) {
      const imagesToDelete = imageContentPrev.filter(
        (img) => !imageContent.includes(img)
      );
      await Promise.all(imagesToDelete.map((item) => fs.unlink(item)));
    }
    const imagesToUpload = imageContent.filter(
      (img) => !imageContentPrev.includes(img)
    );
    if (imagesToUpload.length) {
      const uploadedImages: any[] = [];
      const $ = cheerio.load(content);
      $("img").each((i, img) => {
        const base64 = $(img).attr("src");

        if (base64 && base64.startsWith("data:image")) {
          const match = base64.match(/^data:image\/(\w+);base64,(.+)/);
          if (!match) return;

          const ext = match[1]; // Lấy đuôi file (jpg, png,...)
          const data = match[2]; // Lấy phần Base64

          const filePath = this.uploadBase64(data, ext);
          uploadedImages.push(filePath);
        }
      });
      let description = content;
      const convertContent = uploadedImages.map(
        (img) => `http://localhost:5000${img}`
      );
      for (let index = 0; index < convertContent.length; index++) {
        description = description.replace(
          imageContent[index],
          convertContent[index]
        );
      }
      return description;
    }
    return content;
  }
}

export const uploadService = new UploadService();
