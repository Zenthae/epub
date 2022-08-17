import { InputDataType } from '@app/types';
import { loadAsync } from 'jszip';

/**
 * Take raw data and convert it to a zip archive
 * @param data
 * @returns zip archive
 */
export async function load(data: InputDataType) {
  const z = await loadAsync(data);
  return z;
}
