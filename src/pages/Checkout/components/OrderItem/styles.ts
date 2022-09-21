import styled from "styled-components";

export const OrderContainer = styled.div`
    display: flex;
    gap: .5rem;
    border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};
    padding-bottom: 1.5rem;

    &:nth-child(1n + 2) {
        padding-top: 1.5rem;
    }

    img {
        height: 4rem;
        width: 4rem;
    }
`

export const ActionsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .item-info {
        display: flex;
        justify-content: space-between;
        gap: .5rem;
    }
`

export const Actions = styled.div`
    display: flex;
    gap: .5rem;

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        padding: 0 .5rem;
        font-size: .75rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme["gray-700"]};
        background: ${({ theme }) => theme["gray-400"]};
        border: none;
        border-radius: 6px;
        gap: .25rem;

        svg {
            color: ${({ theme }) => theme.purple};
        }
    }

    @media screen and (max-width: 767px){
        gap: 1rem;
    }

    @media screen and (max-width: 340px){
        button {
            flex: 1;

            span {
                display: none;
            }
        }
    }
`

export const SelectionAmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
    height: 2rem;
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

        &:hover {
            color: ${({ theme }) => theme["purple-dark"]};
        }

        &:focus {
            box-shadow: 0 0 0 2px ${props => props.theme.purple};
        }
    }
`