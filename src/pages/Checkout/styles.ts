import styled from "styled-components";

const Container = styled.div`
    padding: 2rem;
    background: ${({ theme }) => theme["gray-200"]};
    border-radius: 6px;
`

export const CheckoutContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr 26rem;
    gap: 2rem;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;

    @media screen and (max-width: 1023px) {
        grid-template-columns: 1fr;
    }
`

export const CustomerInfo = styled.section`
    h1 {
       font-size: 1.125rem;
       font-weight: 700;
       font-family: "Baloo 2", sans-serif;
       line-height: 1.3;
       color: ${({ theme }) => theme["gray-800"]};
    }
`

export const DeliveryAddress = styled(Container)`
    margin-top: 1rem;
`

export const AddressForm = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    input {
        border: 1px solid ${({ theme }) => theme["gray-400"]};
        background: ${({ theme }) => theme["gray-300"]};
        height: 2.5rem;
        padding: 0.75rem;
        border-radius: 4px;
        width: 12.5rem;
        color: ${({ theme }) => theme["gray-700"]};
        font-size: .875rem;

        &::placeholder {
            font-size: .875rem;
            color: ${({ theme }) => theme["gray-600"]};
            font-weight: 400;
        }

        &:nth-child(2) {
            width: 100%;
        }

        &:nth-child(4) {
            flex: 1;
        }

        &:nth-child(6) {
            flex-grow: 1;
        }

        &:last-child {
            width: 3.75rem;
        }

        @media screen and (max-width: 767px){
            width: 100%;

            &:nth-child(6) {
                flex: 1;
            }
        }

        @media screen and (max-width: 1023px){
            &:nth-child(4) {
                min-width: 50%;
            }

            &:nth-child(5) {
                flex-grow: 1;
            }
        }
    }
    
`

const Header = styled.div`
    display: flex;
    gap: .5rem;

    header {
        h3 {
            line-height: 1.3;
            color: ${({ theme }) => theme["gray-800"]};
            font-weight: 400;
        }

        h4 {
            font-size: .875rem;
            font-weight: 400;
            line-height: 1.3;
        }
    }
`

export const DeliveryHeader = styled(Header)` 
    svg {
        color: ${({ theme }) => theme['yellow-dark']};
    }
`

export const PaymentHeader = styled(Header)`
    svg {
        color: ${({ theme }) => theme.purple};
    }
`

export const PaymentMethod = styled(Container)`
    margin-top: 1rem;
`

export const SelectPaymentContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: .75rem;
`

export const SelectPaymentMethod = styled.div`
    display: flex;
    flex: 1;
    min-width: 185px;
    
    input {
        height: 0;
        width: 0;
        opacity: 0;;
    } 

    label {
        display: flex;
        align-items: center;
        padding: 0 1rem;
        gap: .75rem;
        height: 3.25rem;
        border-radius: 6px;
        flex: 1;
        box-sizing: inherit;
        background: ${({ theme }) => theme["gray-400"]};

        svg {
            color: ${({ theme }) => theme.purple};
        }

        &:hover {
            background: ${({ theme }) => theme["gray-500"]};
        }

        :focus {
        }
    }
    
    input[type="radio"]:checked + label {
        border: 1px solid ${({ theme }) => theme.purple};
        background: ${({ theme }) => theme["purple-light"]};
    }

    input[type="radio"]:focus + label {
        outline: 0;
        border: none;
        box-shadow: 0 0 0 1px ${props => props.theme.purple};
    }
`

export const OrderContainer = styled.section`
    h2 {
       font-size: 1.125rem;
       font-weight: 700;
       font-family: "Baloo 2", sans-serif;
       line-height: 1.3;
       color: ${({ theme }) => theme["gray-800"]};
    }
`

export const Order = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    border-radius: 6px 44px;

    button[type="submit"] {
        background: ${({ theme }) => theme.yellow};
        color: ${({ theme }) => theme["gray-100"]};
        border: none;
        height: 2.75rem;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 6px;
        margin-top: 2.25rem;
        transition: .05s ease-in-out;
        cursor: pointer;

        &:hover {
            background: ${({ theme }) => theme["yellow-dark"]};
        }
    }
`

export const TotalOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;
    padding-top: 1.5rem;

    div {
        display: flex;
        justify-content: space-between;

        &:last-child {
            font-size: 1.25rem;
        }
    }

 
`
