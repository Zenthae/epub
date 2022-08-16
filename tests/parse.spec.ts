import { load } from '@app/load';
import { parse } from '@app/parse';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const samplePath = resolve(__dirname, '../samples/correct.epub');
const wrong = resolve(__dirname, '../samples/wrong.epub');

describe('Loading an archive', () => {
  it('should ', async () => {
    const raw = await readFile(wrong);
    expect(raw).toEqual(expect.anything());

    const zip = await load(raw);
    expect(zip).toEqual(expect.anything());

    const ebook = await parse(zip);
  });
});
