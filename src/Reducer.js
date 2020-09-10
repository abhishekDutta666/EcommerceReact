export const initialState={
    basket:[],
    user:null,
};

export const getBasketTotal=(basket)=>basket?.reduce((amount, item)=>item.price+amount,0);

const reducer=(state, action)=>{
    //console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
            
        case 'REMOVE_FROM_BASKET':
            let newBasket=[...state.basket];
            const ind=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(ind>=0){
                newBasket.splice(ind,1);
            }   else{

            } 
        return {
                ...state, 
                basket: newBasket
            };
            
        default:
            return state;
    }
};
export default reducer;