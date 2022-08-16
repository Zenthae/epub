import JSZip, { loadAsync } from 'jszip';

export class EBook {
  private zip?: JSZip;

  constructor(private data?: Buffer) {}

  /**
   * Load epub archive from raw data
   *
   * ```ts
   * new EBook(data).load();
   * new EBook().load(data);
   * ```
   */
  async load(): Promise<EBook>;
  async load(data: Buffer): Promise<EBook>;
  async load(data?: Buffer): Promise<EBook> {
    if (data) this.zip = await loadAsync(data);
    else if (this.data) this.zip = await loadAsync(this.data);
    delete this.data;

    return this;
  }

  /**
   * Parse the content of the archive
   */
  parse(): EBook {
    return this;
  }
}
