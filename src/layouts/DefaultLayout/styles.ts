import styled from 'styled-components'

export const LayoutContainer = styled.div`
    .container {
        max-width: 75rem;
        margin: 0 auto;
        padding: 0 2.5rem;

        @media screen and (max-width: 767px){
            padding: 0 5%;
        }
    }
`;