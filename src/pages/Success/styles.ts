import styled from "styled-components";

export const SuccessContainer = styled.main`
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;


    & > div {
        display: flex;
        align-items: flex-end;
        flex-shrink: 1;

        img {
            width: 100%;
        }
    }

    section {
        flex: 1;
        min-width: 400px;

        h1 {
            font-family: 'Baloo 2', sans-serif;
            font-weight: 800;
            font-size: 2rem;
            line-height: 1.3;
            color: ${({theme}) => theme["yellow-dark"]};
        }

        h2 {
            font-weight: 400;
            font-size: 1.25rem;
            line-height: 1.3;
            color: ${({theme}) => theme["gray-800"]};
        }
    }

    @media screen and (max-width: 767px) {
        & > div {
            display: none;
        }
    }
`

export const DeliveryInfo = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 2.5rem;
    padding: 2.5rem;

    position: relative;
    box-sizing: border-box;

    background: ${({ theme }) => theme["gray-100"]};
    background-clip: padding-box;
    border: solid 2px transparent;
    border-radius: 6px 36px;

    &:before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -2px; 
        border-radius: inherit; 
        background: linear-gradient(to right, ${({ theme }) => theme.yellow}, ${({ theme }) => theme.purple});
    }
`

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    :nth-child(1n + 2) {
        margin-top: 2rem;
    }
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
`

type InfoIconVariant = 'yellow-dark' | 'yellow' | 'yellow-light' | 'purple-dark' | 'purple' | 'purple-light' | 'gray-800';

interface InfoIconProps {
    variant?: InfoIconVariant;
}

export const InfoIcon = styled.div<InfoIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 2rem;
    height: 2rem;
    min-height: 2rem;
    border-radius: 100%;
    background: ${props => props.variant ? props.theme[props.variant] : props.theme["yellow-dark"]};

    svg {
        color: ${props => props.theme.white};
    }
`