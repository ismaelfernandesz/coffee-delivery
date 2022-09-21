import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

import { coffees } from "../../assets/images";
import { CartContext } from "../../contexts/Cart";
import { iCoffee } from "../../interfaces/iCoffe";
import { OrderItem } from "./components/OrderItem";

import {
    CheckoutContainer,
    CustomerInfo,
    DeliveryAddress,
    DeliveryHeader,
    PaymentHeader,
    Order,
    PaymentMethod,
    TotalOrder,
    OrderContainer,
    AddressForm,
    SelectPaymentMethod,
    SelectPaymentContainer
} from "./styles";

export function Checkout() {
    const { cart } = useContext(CartContext);
    const [totalValueItems, setTotalValueItems] = useState(0);

    useEffect(() => {
        const totalItems = cart.reduce((total, item) => {
            return (total + item.amount * item.value);
        }, 0);

        setTotalValueItems(totalItems);
    }, [])

    const total = totalValueItems + 3.5;

    return (
        <main className="container">
            <CheckoutContainer>
                <CustomerInfo>
                    <h1>Complete seu pedido</h1>

                    <DeliveryAddress>
                        <DeliveryHeader>
                            <MapPinLine size={22} />
                            <header>
                                <h3>Endereço de Entrega</h3>
                                <h4>Informe o endereço onde deseja receber seu pedido</h4>
                            </header>
                        </DeliveryHeader>

                        <AddressForm>
                            <input type="text" name="cep" placeholder="CEP"/>
                            <input type="text" name="street" placeholder="Rua"/>
                            <input type="text" name="number" placeholder="Número"/>
                            <input type="text" name="complement" placeholder="Complemento"/>
                            <input type="text" name="neightborhood" placeholder="Bairro"/>
                            <input type="text" name="city" placeholder="Cidade"/>
                            <input type="text" name="uf" placeholder="UF"/>
                        </AddressForm>
                    </DeliveryAddress>

                    <PaymentMethod>
                        <PaymentHeader>
                            <CurrencyDollar size={22} />
                            <header>
                                <h3>Endereço de Entrega</h3>
                                <h4>Informe o endereço onde deseja receber seu pedido</h4>
                            </header>
                        </PaymentHeader>

                        <SelectPaymentContainer>
                            <SelectPaymentMethod>
                                <input type="radio" id="credit" name="payment-method"/>
                                <label htmlFor="credit">
                                    <CreditCard size={16}/>
                                    <span>Cartão de crédito</span>
                                </label>
                            </SelectPaymentMethod>
                            <SelectPaymentMethod>
                                <input type="radio" id="debit" name="payment-method"/>
                                <label htmlFor="debit">
                                    <Bank size={16}/>
                                    <span>Cartão de débito</span>
                                </label>
                            </SelectPaymentMethod>
                            <SelectPaymentMethod>
                                <input type="radio" id="money" name="payment-method"/>
                                <label htmlFor="money">
                                    <Money size={16}/>
                                    <span>Dinheiro</span>
                                </label>
                            </SelectPaymentMethod>
                        </SelectPaymentContainer>
                    </PaymentMethod>

                </CustomerInfo>

                <OrderContainer>
                    <h2>Cafés selecionados</h2>
                    <Order>
                        <div>
                            {cart.map((item) => <OrderItem key={item.productId} order={item} />)}
                        </div>
                        <TotalOrder>
                            <div>
                                <span>Total de itens</span>
                                <span>R$ {totalValueItems.toFixed(2)}</span>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <span>R$ 3,50</span>
                            </div>
                            <div>
                                <strong>Total</strong>
                                <strong>R$ {total.toFixed(2)}</strong>
                            </div>
                        </TotalOrder>
                        <button type="submit">
                            confirmar pedido
                        </button>
                    </Order>
                </OrderContainer>
            </CheckoutContainer>
        </main>
    )
}