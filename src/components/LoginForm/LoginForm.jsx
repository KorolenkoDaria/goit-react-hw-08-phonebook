import { FormElement, Wrapper, Field, LabelElement, InputElement, Title, ButtonElement, DivElement, PElement, StyledNavLink } from "./LoginForm.styled";

import Container from "components/Container/Container";

import { useDispatch } from 'react-redux';

import { logInUser } from "../../redux/auth/authOperations";


const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            logInUser({
                email: form.elements.email.value.trim(),
                password: form.elements.password.value.trim(),
            })
        );
        form.reset();
    };
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