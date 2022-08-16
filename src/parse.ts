import JSZip from 'jszip';

export async function parse(archive: JSZip) {
  const minetype = archive.file(/mimetype/)[0];

  if ((await minetype.async('string')) !== 'application/epub+zip')
    throw new Error('Malformed .epub');

  return {};
}
