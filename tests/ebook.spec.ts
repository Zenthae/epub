import { EBook } from '@app/ebook';
import { readFile } from 'fs/promises';
import { resolve } from 'path';

const samplePath = resolve(__dirname, '../samples/sample1.epub');

describe('EBook', () => {
  it('should load', async () => {
    const data = await readFile(samplePath, {
      // encoding: 'utf-8',
    });
    const ebook = await new EBook(data).load();

    console.log(ebook);
    console.log(data);
  });
});
