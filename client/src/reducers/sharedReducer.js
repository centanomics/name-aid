import { updateObject, addItemToArray, deleteItemFromArray } from './utility';

const initialState = {
  loading: false,
  sharedCollections: [],
  error: null
};

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

// get

const getShared = (state, action) => {
  return updateObject(state, {
    sharedCollections: action.payload,
    loading: false
  });
};

// add

const addShared = (state, action) => {
  const newCollection = addItemToArray(state.collections, action.payload);
  return updateObject(state, {
    sharedCollections: newCollection,
    loading: false
  });
};

// delete

const deleteShared = (state, action) => {
  const deletedItem = deleteItemFromArray(state.collections, action.payload);
  return updateObject(state, {
    sharedCollections: deletedItem,
    loading: false
  });
};

// error
const errors = (state, action) => {
  // eslint-disable-next-line no-console
  console.error(action.payload);
  return updateObject(state, {
    err: action.payload
  });
};

// set loading
const setLoading = state => {
  return updateObject(state, {
    loading: true
  });
};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_SHARED:
//       return getShared(state, action);
//     case ADD_SHARED:
//       return addShared(state, action);
//     case DELETE_SHARED:
//       return deleteShared(state, action);
//     case SET_LOADING:
//       return setLoading(state);
//     case SHARE_ERROR:
//       return errors(state, action);
//     default:
//       return state;
//   }
// };

const sharedReducer = createReducer([], {
  GET_SHARED: getShared,
  ADD_SHARED: addShared,
  DELETE_SHARED: deleteShared,
  SET_LOADING: setLoading,
  SHARE_ERROR: errors
});

export default (state = initialState, action) => {
  return sharedReducer(state, action);
};
