import styled from "styled-components";

export const CoffeeContainer = styled.section`
    padding: 1.25rem;
    width: 16rem;
    background: ${({ theme }) => theme["gray-200"]};
    border-radius: 6px 36px;

    @media screen and (max-width: 640px) {
        width: 100%;
    }

`

export const CoffeeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-2.25rem);

    img {
        padding-bottom: .75rem;
    }

    p {
        margin-top: .85rem;
        text-align: center;
        font-size: .875rem;
        color: ${({ theme }) => theme["gray-600"]};
        line-height: 1.3;
    }
`

export const TypesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .25rem;
    margin-bottom: 1rem;

    span {
        color: ${({ theme }) => theme["yellow-dark"]};
        text-transform: uppercase;
        font-size: .625rem;
        line-height: 1.3;
        padding: .25rem .5rem;
        background: ${({ theme }) => theme["yellow-light"]};
        border-radius: 100px;
        font-weight: 800;
    }
`

export const CoffeeActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media screen and (max-width: 640px) {
        justify-content: space-around;
    }

    @media screen and (max-width: 480px) {
        justify-content: space-between;
    }

    span {
        color: ${({ theme }) => theme["gray-700"]};
        line-height: 1.3;
        font-size: .875rem;
        
        strong {
            font-size: 1.5rem;
            font-weight: 800;
            font-family: "Baloo 2", sans-serif;
        }
    }
`

export const CoffeeActions = styled.div`
    display: flex;
    gap: .5rem;
`

export const SelectionAmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
    height: 2.375rem;
    gap: .5rem;
    background: ${({ theme }) => theme["gray-400"]};
    border-radius: 6px;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: .875rem;
        width: .875rem;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.purple};
        cursor: pointer;

        &:not(:disabled):hover {
            color: ${({ theme }) => theme["purple-dark"]};
        }

        &:disabled {
            opacity: .7;
            cursor: not-allowed;
        }

        &:focus {
            box-shadow: 0 0 0 2px ${props => props.theme.purple};
        }
    }
`

export const InsertCartButton = styled.button`
    background: ${props => props.theme["purple-dark"]};
    border: none;
    border-radius: 6px;

    &:not(:disabled):hover {
        background: ${({ theme }) => theme.purple};
    }

    &:disabled {
        cursor: not-allowed;
    }   

    &:focus {
        box-shadow: 0 0 0 2px ${props => props.theme.purple};
    }
`

export const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.375rem;
    width: 2.375rem;
    border-radius: 6px;

    svg {
        color: ${props => props.theme["gray-100"]};
    }
`