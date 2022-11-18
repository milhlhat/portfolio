import {Stack, Switch} from '@chakra-ui/react'
import ContactPage from "features/contact/presentations/ContactPage";
import {getMyContacts} from "../../features/contact/use-cases/myContactUseCase";

export default function Page() {
    const contact = getMyContacts();
    return (
        <section>
            <ContactPage contact={contact}/>
        </section>
    )
}