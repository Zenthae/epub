import JSZip from 'jszip';

export type Archive = JSZip;

export type InputDataType =
  | string
  | number[]
  | Uint8Array
  | ArrayBuffer
  | Blob
  | NodeJS.ReadableStream;

export interface EBook {
  title: string;
  // ...
}
