export const updateObject = (oldObject, newValues) => {
  const updated = { ...oldObject, ...newValues };
  return updated;
};

export const addItemToArray = (oldArray, newItem) => {
  const updatedArray = [...oldArray, newItem];

  return updatedArray;
};

export const deleteItemFromArray = (oldArray, id) => {
  const updatedArray = oldArray.filter(collection => collection.id !== id);

  return updatedArray;
};

export const updateItemInArray = (oldArray, id, updateCallback) => {
  const updatedArray = oldArray.map(collection => {
    if (collection.id !== id) {
      return collection;
    }
    const newItem = updateCallback(collection);
    return newItem;
  });
  return updatedArray;
};
