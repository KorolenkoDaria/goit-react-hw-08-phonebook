import {
    Wrapper,
    Title,
    FormElement,
    Field,
    LabelElement,
    InputElement,
    ButtonElement,
    DivElement,
    PElement,
    StyledNavLink
} from "./RegistrationForm.styled";

import { useDispatch } from 'react-redux';

import Container from "components/Container/Container";

import { registerUser } from "../../redux/auth/authOperations";

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(
            registerUser({
                name: form.elements.name.value.trim(),
                email: form.elements.email.value.trim(),
                password: form.elements.password.value.trim(),
            })
        );
        form.reset();
    };

    return (
        <Container>
            <Wrapper>
                <Title>Please Register</Title>
                <FormElement onSubmit={handleSubmit} >
                    <Field>
                        <LabelElement>
                            Name:
                        </LabelElement>
                        <InputElement type="text" name="name" required />
                    </Field>
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
                    <DivElement><PElement>Do you have an account?</PElement><StyledNavLink to='/login'>Login Now</StyledNavLink></DivElement>
                </FormElement>
            </Wrapper>
        </Container>
    )
}

export default RegistrationForm;
