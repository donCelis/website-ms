import { useEffect, useState } from "react";

const useFilter = (import_data, name = "") => {
  const [data, setData] = useState(import_data);
  const [categories, setCategories] = useState("");
  const [category, setCategory] = useState(name);

  const handleSetCategory = (setItem) => setCategory(setItem);

  useEffect(() => {
    setCategories(Object.keys(import_data));
    categories.length === 0 && setCategory(name);
  }, []);

  return {
    data,
    categories,
    category,
    handleSetCategory,
  };
};

export { useFilter };
