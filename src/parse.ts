import zip from "jszip";

export async function parse(file: Blob | ArrayBuffer) {
  const z = new zip();
  await z.loadAsync(file);
  // Take a file as input
  // parse it
  // verify that it is a valide epub file
  //   search for the required files
  // parse the different xml files
  //   fill the different field (title, toc, chapters, ...)
  // return the parsed file
  return {};
}
