import {contactService} from "../aggregates/domain-services/contact.service";

export const getMyContacts =  () => {
    const contacts =  contactService.getContact();
    return contacts;
}