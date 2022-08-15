import { readFile } from "fs";
import { resolve } from "path";
import { parse } from "../src/parse";

describe("test", () => {
  it("should load a zip file", async () => {
    return readFile(
      resolve(__dirname, "../samples/sample1.epub"),
      (err, data) => {
        if (err) throw err;
        parse(data);
      }
    );
  });
});

export {};
