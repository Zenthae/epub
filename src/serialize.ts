import { Archive, EBook } from '@app/types';
import JSZip from 'jszip';

/**
 * Convert an ebook to a zip archive
 * @param ebook
 * @returns archive
 */
export async function serialize(ebook: EBook): Promise<Archive> {
  const z = new JSZip();
  return z;
}
