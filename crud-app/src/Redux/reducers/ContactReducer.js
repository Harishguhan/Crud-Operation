const initialstate = [
  {
    id: 1,
    name: "Harishguhan",
    email: "harishguhan@dorustree.in",
    mobilenumber: 9025099853,
    address:'Trichy'
  },
];
const contactReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state,action.payload];
      return state;
    case 'UPDATE_DATA':
        const update_DATA = state.map((contact) => contact.id === action.payload.id ? action.payload: contact )
        state = update_DATA;
        return state;
    case "DELETE_DATA":
        const deletedata = state.filter((contact) => contact.id !== action.payload && contact);
        state = deletedata;
        return state;
        default:
      return state;
  }
};

export default contactReducer;
