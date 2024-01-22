import { FormElement, Wrapper, Field, LabelElement, InputElement, Title, ButtonElement, DivElement, PElement, StyledNavLink } from "./LoginForm.styled";

import { toast } from 'react-toastify';

import Container from "components/Container/Container";

import { useDispatch, useSelector } from 'react-redux';

import { selectError } from "../../redux/auth/authSelecotrs";

import { logInUser } from "../../redux/auth/authOperations";
import { useEffect } from "react";

import { clearError } from "../../redux/auth/authSlice";

const LoginForm = () => {
    const dispatch = useDispatch();
    const getError = useSelector(selectError);


    const handleSubmit = async evt => {
        evt.preventDefault();
        console.log(getError);
        const form = evt.currentTarget;
        try {
            await dispatch(
                logInUser({
                    email: form.elements.email.value.trim(),
                    password: form.elements.password.value.trim(),
                })
            );
            form.reset();

        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (getError) {
            toast.error(`${getError}`, {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        dispatch(clearError())
    }, [getError, dispatch]);


    return (
        <Container>
            <Wrapper>
                <Title>Please Login</Title>
                <FormElement onSubmit={handleSubmit}>
                    <Field>
                        <LabelElement>
                            Email:
                        </LabelElement>
                        <InputElement type="email" name="email" required />
                    </Field>
                    <Field>
                        <LabelElement>
                            Password:
                        </LabelElement>
                        <InputElement type="password" name="password" required />
                    </Field>
                    <ButtonElement type="submit">Submit</ButtonElement>
                    <DivElement><PElement>Don`t have an account?</PElement><StyledNavLink to='/register'>Register Now</StyledNavLink></DivElement>
                </FormElement>
            </Wrapper>
        </Container>
    )
}
export default LoginForm;