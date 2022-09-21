import styled from "styled-components";
import bannerBackground from '../../assets/images/banner-background.svg'
  
export const BannerContainer = styled.div`
  display: flex;
  background: ${() => `url(${bannerBackground}) no-repeat center`};
  background-size: cover;

  .container {
    display: flex;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media screen and (max-width: 1024px) {
    section > img {
      display: none;
    }
  }

`

export const BannerContent = styled.div`

  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${props => props.theme["gray-900"]};
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    color: ${props => props.theme["gray-800"]};
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 4rem;
  }

`

export const AdvantageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

    row-gap: 1.25rem;

    @media screen and (max-width: 1024px) {
    section > img {
      display: none;
    }
  }
`

export const Advantage = styled.section`
    display: flex;
    align-items: center;
    gap: .75rem;

    span {
      color: ${props => props.theme["gray-700"]};
      line-height: 1.3;
    }
`

type AdvantageIconVariant = 'yellow-dark' | 'yellow' | 'yellow-light' | 'purple-dark' | 'purple' | 'purple-light' | 'gray-800';

interface AdvantageIconProps {
    variant?: AdvantageIconVariant;
}

export const AdvantageIcon = styled.div<AdvantageIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 100%;
    background: ${props => props.variant ? props.theme[props.variant] : props.theme["yellow-dark"]};

    svg {
        color: ${props => props.theme.white};
    }
`

export const MenuContainer = styled.section`
  padding-top: 2rem;
  padding-bottom: 6rem;

  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${props => props.theme["gray-800"]};
    margin-bottom: 3rem;
  }
`

export const MenuContent = styled.div`
  /* display: flex;
  flex-flow: row wrap;
  row-gap: 2.5rem;
  column-gap: 2rem; */
  
  display: grid;
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
  grid-template-columns: repeat(auto-fit, 256px);
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  }

  &::after {
    content: "";
    flex: auto;
  }
`


