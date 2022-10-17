export const getDataFromLocalStorage = (name: string) => {
  const data = localStorage.getItem(name);
  const result = data ? JSON.parse(data) : null;
  return result;
};

export const getListFromLocalStorage = () => {
  const data = localStorage.getItem("list");
  const result = data ? JSON.parse(data) : [];
  return result;
};
