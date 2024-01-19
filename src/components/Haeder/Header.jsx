import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";

import { StyledHeader } from "./Header.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Navigation />
            </Container>
        </StyledHeader>
    )
}

export default Header;