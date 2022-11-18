export interface Contact {
    name: string;
    phone: string;
    social: Array<SocialContact>;
}

export interface SocialContact {
    name: string;
    url: string;
}