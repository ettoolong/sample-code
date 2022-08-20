import { ADD_ITEM } from 'constants';

const initState = {
  items: [],
};

const itemReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const itemsCopy = state.items.slice();
      return { items: [action.payload.newItem].concat(itemsCopy) };
    }
    default:
      return state;
  }
};

export { itemReducer };
