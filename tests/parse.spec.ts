import { load } from '@app/load';
import { isEpub, parse, parseContainer, parseMimetype } from '@app/parse';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { xml2js } from 'xml-js';

const samplePath = resolve(__dirname, '../samples/correct.epub');
const wrong = resolve(__dirname, '../samples/wrong.epub');

describe('Parsing ebook', () => {
  it('should parse MIMETYPE file', async () => {
    const raw = await readFile(samplePath);
    const zip = await load(raw);

    const content = await parseMimetype(zip);
    expect(await isEpub(zip)).toBe(true);
  });

  it('should parse Container.xml', async () => {
    const raw = await readFile(samplePath);
    const zip = await load(raw);

    const container = await parseContainer(zip);

    if (container) console.log(xml2js(container));
  });
});
