export interface ServiceList {
    id: number;
    Provider: Provider;
    ServiceTitle: string;
    Service: Service;
    ServiceDescription: string;
    Longitude: string;
    Lattitude: string;
    Location: Location;
    workingDays?: (number)[] | null;
    AgeBracket: string;
}
export interface Provider {
    id: number;
    User: User;
    County: County;
}
export interface User {
    id: number;
    MobileNumber: string;
    IDNumber: string;
    FirstName: string;
    SurName: string;
}
export interface County {
    id: number;
    Name: string;
}
export interface Service {
    id: number;
    Name: string;
    CategoryID: number;
}
export interface Location {
    id: number;
    DisplayName: string;
    State: string;
    Town: string;
    Suburb: string;
    Road: string;
    Landmark: string;
    CenterBlock: string;
}
