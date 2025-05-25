// Resize.js
import { v4 } from "uuid";
import sharp from "sharp";
import path from "path";

export class Resize {
  folder = "";
  constructor(folder: string) {
    this.folder = folder;
  }
  async save(buffer: any) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(300, 300, {
        // size image 300x300
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toFile(filepath);

    return filename;
  }
  static filename() {
    // random file name
    return `${v4()}.png`;
  }
  filepath(filename: string) {
    return path.resolve(`${this.folder}/${filename}`);
  }
}

export const timestampCurrent = () => {
  const now = new Date();

  const offsetMinutes = -now.getTimezoneOffset();
  const offsetHours = Math.floor(offsetMinutes / 60);
  const offsetRemainingMinutes = Math.abs(offsetMinutes % 60);

  const timezoneOffsetStr =
    offsetRemainingMinutes === 0
      ? `${offsetHours >= 0 ? "+" : "-"}${String(
          Math.abs(offsetHours)
        ).padStart(2, "0")}`
      : `${offsetHours >= 0 ? "+" : "-"}${String(
          Math.abs(offsetHours)
        ).padStart(2, "0")}:${String(offsetRemainingMinutes).padStart(2, "0")}`;

  const formattedDate = now.toISOString().slice(0, 19).replace("T", " ");

  return `${formattedDate}${timezoneOffsetStr}`;
};
