import { MIMETYPE, PATHS } from '@app/constants';
import { Archive } from '@app/types';

/**
 * Take a zip archive and convert it to an EBook object
 * @param archive
 * @returns ebook
 */
export async function parse(archive: Archive) {
  return {};
}

export async function parseXXX(archive: Archive) {}

/**
 * Search for the MIMETYPE File and parse its content
 * @param archive
 * @returns content of file or null if no file present
 */
export async function parseMimetype(archive: Archive) {
  const file = archive.file(PATHS.MIMETYPE);

  if (file == null) return null;

  return file.async('string');
}

/**
 * Search for the container.xml file and parse its content
 * @param archive
 * @returns content or null
 */
export async function parseContainer(archive: Archive) {
  const containerFile = archive.file(PATHS.CONTAINER);

  if (containerFile === null) return null;

  return containerFile.async('string');
}

/**
 * Return true if archive is an epub, else, false.
 *
 * An EPUB file must have :
 * root `mimetype` file that contains `application/epub+zip` and a
 * `META-INF/container.xml` file that points to the file defining the contents of the book
 *
 * @param archive
 */
export async function isEpub(archive: Archive) {
  const archiveMimetype = await parseMimetype(archive);

  if (!archiveMimetype) return false;
  if (archiveMimetype !== MIMETYPE.EPUB) return false;

  // Parse META-INF/container.xml and verify it's content

  return true;
}
