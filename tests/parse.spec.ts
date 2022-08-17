import { load } from '@app/load';
import { parse, parseMimetype } from '@app/parse';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const samplePath = resolve(__dirname, '../samples/correct.epub');
const wrong = resolve(__dirname, '../samples/wrong.epub');

describe('Parsing ebook', () => {
  it('should parse MIMETYPE file', async () => {
    const raw = await readFile(samplePath);
    const zip = await load(raw);

    const content = await parseMimetype(zip);

    console.log(content);
  });
});
