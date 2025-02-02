export const limitTextLength = (description: string, caracteres: number) => {
  if (description.length > caracteres) {
    return description.slice(0, caracteres) + "...";
  }

  return description;
};
