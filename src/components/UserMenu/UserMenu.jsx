import { useSelector, useDispatch } from "react-redux";

import { selectUser } from "../../redux/auth/authSelecotrs";

import { logOutUser } from "../../redux/auth/authOperations";

import { Wrapper, ButtonElement, PElement } from "./UserMenu.styled";


const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);
    return (
        <Wrapper>
            <PElement>{user.email}</PElement>
            <ButtonElement type="button" onClick={() => dispatch(logOutUser())}>Logout</ButtonElement>
        </Wrapper>
    )
}

export default UserMenu;