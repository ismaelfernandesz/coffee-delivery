import styled from 'styled-components'


export const HeaderContainer = styled.header`
    padding: 2rem 0;
    
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const ActionsContainer = styled.div`
    display: flex;
    gap: .75rem;

    a {
        position: relative;
    }
`

export const Location = styled.div`
    display: flex;
    align-items: center;
    height: 2.375rem;
    padding: .5rem;
    border-radius: 6px;
    gap: .25rem;
    background: ${props => props.theme['purple-light']};
    
    svg {
        color: ${props => props.theme['purple']};
    }

    span {
        font-size: .875rem;
        color: ${props => props.theme['purple-dark']}
    }

    @media screen and (max-width: 500px){
        display: none;
    }
`

export const CartItemsAmount = styled.div`  
    position: absolute;
    right: 0;
    height: 1.25rem;
    width: 1.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translate(40%, -40%);
    background: ${({ theme }) => theme['yellow-dark']};
    border-radius: 100%;

    font-weight: 700;
    line-height: 1.3;
    font-size: .75rem;
    color: ${props => props.theme.white}
`

export const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 2.375rem;
    border-radius: 6px;
    background: ${props => props.theme['yellow-light']};

    svg {
        color: ${props => props.theme['yellow-dark']};
    }
`