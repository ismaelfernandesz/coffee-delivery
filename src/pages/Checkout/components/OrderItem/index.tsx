import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItem } from '../../../../contexts/Cart'
import { OrderContainer, SelectionAmountContainer, ActionsContainer, Actions } from './styles'

interface OrderItemProps {
    order: CartItem
}

export function OrderItem({ order }: OrderItemProps) {

    
    return (
        <OrderContainer>
            <img src={order.image} alt={`Imagem de xícara com o café ${order.name}`} />
            <ActionsContainer>
                <div className='item-info'>
                    <span>{order.name}</span>
                    <span>R$ <strong>{order.value.toFixed(2)}</strong></span>
                </div>
                <Actions>
                    <SelectionAmountContainer>
                        <button type="button" title="Diminuir quantidade">
                            <Minus size={16} weight="bold" />
                        </button>
                        <span>{order.amount}</span>
                        <button type="button" title="Aumentar quantidade">
                            <Plus size={16} weight="bold" />
                        </button>
                    </SelectionAmountContainer>
                    <button type="button">
                        <Trash size={16} />
                        <span>Remover</span>
                    </button>
                </Actions>
            </ActionsContainer>
        </OrderContainer>
    )
}