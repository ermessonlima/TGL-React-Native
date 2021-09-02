const initialState={
   data: 
       {
         name: '',
         email: '',
         password: '',
         token: '',
       }
   
}

export default (state = initialState, action:any) => {
   let newList = {...state.data};

    switch(action.type) {
        case 'ADD_NOTE':
         console.log('action.type.data')
   
         return {...state, data: action.payload.data}
         break;

    }
    
    return {...state, list:newList};
}