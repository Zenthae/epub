import { PATHS } from '@app/constants';
import { Archive } from '@app/types';

/**
 * Take a zip archive and convert it to an EBook object
 * @param archive
 * @returns ebook
 */
export async function parse(archive: Archive) {
  const minetype = archive.file(/mimetype/)[0];

  if ((await minetype.async('string')) !== 'application/epub+zip')
    throw new Error('Malformed .epub');

  return {};
}

export async function parseXXX(archive: Archive) {}

/**
 * Parse the content of mimetype file
 * @param archive
 * @returns content of file or null if no file present
 */
export async function parseMimetype(archive: Archive) {
  const file = archive.file(PATHS.MIMETYPE);

  if (file == null) return null;

  return await file.async('text');
}
