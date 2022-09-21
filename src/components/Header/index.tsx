import { Cart, HeaderContainer, Location, ActionsContainer, CartItemsAmount } from "./styles";
import { NavLink } from "react-router-dom";

import logo from '../../assets/icons/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart";

export function Header() {
    const { cart } = useContext(CartContext);

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="" title="Página inicial">
                    <img src={logo} />
                </NavLink>

                <ActionsContainer>
                    <Location>
                        <MapPin weight="fill" size={22} />
                        <span>Porto Alegre, RS</span>
                    </Location>
                    <NavLink to={`/checkout/${Date.now()}`}>
                        {cart.length ? <CartItemsAmount>{cart.length}</CartItemsAmount> : ''}
                        
                        <Cart title="Carrinho de compras">
                            <ShoppingCart weight="fill" size={22} />
                        </Cart>
                    </NavLink>
                </ActionsContainer>
            </div>
        </HeaderContainer>
    )
}