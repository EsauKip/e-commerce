// for add item to the cart list
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

// for delete item from the cart list

export const gelCart=(product)=>{
    return{
        type:"DELETE",
        payload:product
    }
} 