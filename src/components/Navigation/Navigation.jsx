import {
    StyledNav,
    StyledUl,
    StyledLi,
    StyledNavLink,
    StyledNavLinkLogo,
    Logo
} from "./Navigation.styled";

import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../../redux/auth/authSelecotrs";

import UserMenu from 'components/UserMenu/UserMenu';

import logoImg from "../../img/125622.png";

const Navigation = () => {

    const authenticated = useSelector(selectIsLoggedIn);

    return (
        <StyledNav>
            <StyledNavLinkLogo to='/'><Logo src={logoImg} alt="logo" /></StyledNavLinkLogo>
            {authenticated && <StyledNavLink to='/contacts'>Contacts</StyledNavLink>}
            {!authenticated
                ? (<StyledUl>
                    <StyledLi>
                        <StyledNavLink to='/login'>Login</StyledNavLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledNavLink to='/register'>Registration</StyledNavLink>
                    </StyledLi>
                </StyledUl>)
                : (<UserMenu></UserMenu>)
            }


        </StyledNav>
    )
}

export default Navigation;