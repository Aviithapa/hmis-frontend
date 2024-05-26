export const getFileExtension = (fileName: string) => {
  const lastIndexOfDot = fileName.lastIndexOf(".");
  return fileName.substring(lastIndexOfDot);
};
