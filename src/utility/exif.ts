import * as exifr from 'exifr';

export async function readExif(file: File) {
  try {
    const buf = await file.arrayBuffer();
    const data = await exifr.parse(buf);
    return data ?? {};
  } catch (err) {
    console.error('Failed to read EXIF', err);
    return {};
  }
}
