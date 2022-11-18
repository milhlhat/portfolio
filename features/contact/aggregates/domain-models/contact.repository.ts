import {Contact} from "./contact.model";

export interface ContactRepository {
    getContact(): Contact;
}