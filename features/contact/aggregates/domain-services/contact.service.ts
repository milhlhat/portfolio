import {ContactRepository} from "../domain-models/contact.repository";
import {Contact} from "../domain-models/contact.model";
import {myContact} from "../domain-models/data";

class ContactService implements ContactRepository {
    getContact(): Contact {
        return myContact;
    }
}

export const contactService = new ContactService();