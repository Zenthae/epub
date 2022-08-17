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
  /**
   * Book metadata, extracted from content.opf
   */
  metadata: {
    /**
     * Book title
     */
    title: string;
    /**
     * Book language
     */
    language: string;
    /**
     * Book author
     */
    creator: string;
  };
}
