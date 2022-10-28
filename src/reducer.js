//Iniciamos la canasta vacia
export const initialState = {
    basket: []
}

export const actionTypes = {
    /*Eventos que reducer puede escuchar en toda la APP */
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ITEM: "REMOVE_ITEM"
}

//Se extrae la suma del precio de los elementos en la canasta
export const getBasketTotal = (basket) => {
    //Iniciamos la suma en cero y se comienza a sumar al amount el precio del siguiente items
    basket?.reduce((amount, item) => item.price + amount, 0)

}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
    case "ADD_TO_BASKET":
        return{
            ...state,
            basket: [...state.basket, action.item],
        };
    case "REMOVE_ITEM":
        //vamos a obtener la posicion dentro del array del basket que se desea eliminar
        //para prevenir eliminar todos los elementos con el mismo id
        const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
        let newBasket = [...state.basket];
        //Como find index entrega la posicion, elimino uno despues para que coincida con el id
        if (index >= 0){
            newBasket.splice(index, 1)
        }else{
            console.log("no se puede remover el item")
        }
        return{
            ...state,
            basket: newBasket,

        }
    default: return state;
    }

}

export default reducer