import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import Container from 'components/Container/Container';

import { H2, Wrapper, ContactsWrapper } from "./Contacts.styled";

const Contacts = () => {
    return (

        <Container>
            <Wrapper>
                <ContactForm />
                <ContactsWrapper>
                    <H2>Contacts</H2>
                    <Filter></Filter>
                    <ContactList></ContactList>
                </ContactsWrapper>
            </Wrapper>
        </Container>

    )
}
export default Contacts;