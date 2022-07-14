const initialstate = [
    {
        id:0,
        name:'Harishguhan',
        email:'harishguhan@dorustree.in',
        number:9025099853,
    }
]

const contactReducer = (state = initialstate, action) =>{
    switch(action.type){
        case 'ADD_CONTACT':
            state = [...state,action.payload];
            return state
        default:
            return state
    }
};

export default contactReducer;