import { createContext, ReactNode, useState } from "react";

export interface CartItem {
    productId: number,
    image: string,
    name: string,
    value: number,
    amount: number
}

interface CartContextType {
    cart: CartItem[],
    addCartItem: (newItem: CartItem) => void,
    removeCartItem: (cartItemId: number) => void,
    uptadeCartItemAmount: (cartItemId: number, cartItemAmout: number) => void,
}

export const CartContext = createContext({} as CartContextType);


interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([]);

    function addCartItem(newItem: CartItem): void {
        setCart(state => [...state, newItem]);
    }

    function removeCartItem(cartItemId: number): void {
        const cartWithoutItemDeleted = cart.filter(item => item.productId != cartItemId);
        setCart(cartWithoutItemDeleted);
    }

    function uptadeCartItemAmount(cartItemId: number, cartItemAmout: number): void {
        setCart(state => 
            state.map(item => {
                if(item.productId == cartItemId) {
                    item.amount += cartItemAmout;
                }

                return item;
            }
        ));
    }

    return (
        <CartContext.Provider value={{
            cart,
            addCartItem,
            removeCartItem,
            uptadeCartItemAmount
        }}>

        {children}
        </CartContext.Provider>
    )
}