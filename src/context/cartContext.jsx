import { createContext,useContext,useState } from "react";
const CartContext = createContext()
export const useCart = () => {
    return useContext(CartContext)
}
const CartProvider=({children})=>{
    const [cartItems,setCartItems] = useState([])
    const addToCart=(item)=>{
      setCartItems((prevItems)=>{
        const existingItem = prevItems.find((cartItem)=>cartItem.id===item.id)
        // if Item is in Cart then increase the quantity
        if(existingItem){
            return prevItems.map((cartItem)=>cartItem.id===item.id?{...cartItem,quantity:cartItem.quantity+1}:cartItem)
        }
        // if Item is not in Cart then add the item to cart
        else{
            return [...prevItems,{...item,quantity:1}]

        }
      })
    }
    const removeFromCart=(item)=>{
        setCartItems((prevItems)=>{
            const existingItem=prevItems.find((cartItem)=>cartItem.id===item.id)
            if(!existingItem){
                return prevItems
            }
           if(existingItem.quantity===1){
               return prevItems.filter((cartItem)=>cartItem.id!==item.id)
           }
              return prevItems.map((cartItem)=>cartItem.id===item.id?{...cartItem,quantity:cartItem.quantity-1}:cartItem)

        })
    }
    const clearCart=()=>{
        setCartItems([])
    }
    const getCartTotal=()=>{
        return cartItems.reduce((total,item)=>total+item.price*item.quantity,0)
    }
    return (
        <CartContext.Provider value={{cartItems,addToCart,removeFromCart,clearCart,getCartTotal}}>
            {children}
        </CartContext.Provider>
    )

}