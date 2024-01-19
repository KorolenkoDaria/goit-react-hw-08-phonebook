import Container from "components/Container/Container";

import { HeroWrapper, Title, SubTitle, Span, StyledNavLink } from "./Hero.styled";

const Hero = () => {
    return (

        <HeroWrapper>
            <Container>
                <Title>Welcome to <br /> the <Span>Phone Book</Span></Title>
                <SubTitle>Securely store contacts that are accessible from any device.</SubTitle>
                <StyledNavLink to='/login'>Get started</StyledNavLink>
            </Container>
        </HeroWrapper>

    )
}

export default Hero;