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

import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';

import Container from "components/Container/Container";

import { registerUser } from "../../redux/auth/authOperations";
import { selectError } from "../../redux/auth/authSelecotrs";

import { clearError } from "../../redux/auth/authSlice";

import { useEffect } from "react";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const getError = useSelector(selectError);


    const handleSubmit = async evt => {
        evt.preventDefault();

        const form = evt.currentTarget;
        try {
            dispatch(
                registerUser({
                    name: form.elements.name.value.trim(),
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

        dispatch(clearError());
    }, [getError, dispatch]);

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
