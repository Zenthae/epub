import { loadAsync } from 'jszip';

export async function load(data: Buffer | ArrayBuffer | string) {
  const zip = await loadAsync(data);

  return zip;
}
