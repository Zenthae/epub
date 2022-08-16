import { load } from '@app/load';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const samplePath = resolve(__dirname, '../samples/correct.epub');

describe('Loading an archive', () => {
  it('should load raw data', async () => {
    const raw = await readFile(samplePath);
    expect(raw).toEqual(expect.anything());

    const zip = await load(raw);
    expect(zip).toEqual(expect.anything());
  });
});
