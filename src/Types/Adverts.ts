export interface Advert {
    id: number;
    ADTitle: string;
    Provider: Provider;
    Service?: CountyOrServiceEntityOrLocation[] | null;
    Location: CountyOrServiceEntityOrLocation;
    AdDescription: string;
    StartDate: string;
    ExpiryDate: string;
    NoOfMessages: number;
}
export interface Provider {
    id: number;
    User: User;
    County: CountyOrServiceEntityOrLocation;
}
export interface User {
    id: number;
    MobileNumber: string;
    IDNumber: string;
    FirstName: string;
    SurName: string;
}
export interface CountyOrServiceEntityOrLocation {
    id: number;
    Name: string;
}
