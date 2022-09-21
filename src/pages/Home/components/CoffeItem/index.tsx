import { NavLink } from "react-router-dom";
import { Cart, CoffeeActions, CoffeeActionsContainer, CoffeeContainer, CoffeeContent, InsertCartButton, SelectionAmountContainer, TypesContainer } from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { iCoffee } from "../../../../interfaces/iCoffe";
import { useContext, useState } from "react";
import { CartContext, CartItem } from "../../../../contexts/Cart";

interface CoffeeItemsProps {
    coffee: iCoffee
}



export function CoffeeItem({ coffee }: CoffeeItemsProps) {
    const { cart, addCartItem, uptadeCartItemAmount } = useContext(CartContext);
    const [amount, setAmout] = useState(0);

    function handleCartChange(): void {
        const cartItem = cart.find(item => item.productId == coffee.id);

        if(!cartItem) {
            const newCartItem: CartItem = {
                productId: coffee.id,
                image: coffee.image,
                name: coffee.name,
                value: coffee.value,
                amount
            }

            addCartItem(newCartItem);
        } else {
            uptadeCartItemAmount(amount, coffee.id);
        }

        setAmout(0);
    }

    function increaseItemAmount(): void {
        setAmout(state => state + 1);
    }

    function decreaseItemAmount(): void {
        setAmout(state => state - 1);
    }

    const value = amount > 0 ? amount * coffee.value : coffee.value;
    const disableDecreaseWhenAmountIsZero = amount <= 0; 

    return (
        <CoffeeContainer>
            <CoffeeContent>
                <img src={coffee.image} alt={`Xícara com o café ${coffee.name}}`} />
                <TypesContainer>
                    {coffee.types.map(type => <span key={type}>{type}</span>)}
                </TypesContainer>
                <h3>{coffee.name}</h3>
                <p>{coffee.description}</p>
            </CoffeeContent>
            <CoffeeActionsContainer>
                <span>R$ <strong>{value.toFixed(2)}</strong></span>
                <CoffeeActions>
                    <SelectionAmountContainer>
                        <button title="Diminuir quantidade" onClick={decreaseItemAmount} disabled={disableDecreaseWhenAmountIsZero}>
                            <Minus size={16} weight="bold"/>
                        </button>
                        <span>{amount}</span>
                        <button title="Aumentar quantidade" onClick={increaseItemAmount}>
                            <Plus size={16} weight="bold"/>
                        </button>
                    </SelectionAmountContainer>
                    <InsertCartButton type="button" onClick={handleCartChange} disabled={disableDecreaseWhenAmountIsZero}>
                        <Cart title="Carrinho de compras">
                            <ShoppingCart weight="fill" size={22} />
                        </Cart>
                    </InsertCartButton>
                </CoffeeActions>
            </CoffeeActionsContainer>
        </CoffeeContainer>
    )
}