export interface Request {
    id: number;
    User: User;
    Service: Service;
    CenterLocation: LocationOrCenterLocation;
    TimeStamp: string;
    RequestText: string;
    Latitude: string;
    Longitude: string;
}
export interface User {
    id: number;
    MobileNumber: string;
    IDNumber: string;
    FirstName: string;
    SurName: string;
}
export interface Service {
    id: number;
    Provider: Provider;
    ServiceTitle: string;
    Service: Service1;
    ServiceDescription: string;
    Longitude: string;
    Lattitude: string;
    Location: LocationOrCenterLocation;
    workingDays?: (number)[] | null;
    AgeBracket: string;
}
export interface Provider {
    id: number;
    User: User;
    County: County;
}
export interface County {
    id: number;
    Name: string;
}
export interface Service1 {
    id: number;
    Name: string;
    CategoryID: number;
}
export interface LocationOrCenterLocation {
    id: number;
    DisplayName: string;
    State: string;
    Town: string;
    Suburb: string;
    Road: string;
    Landmark: string;
    CenterBlock: string;
}


export interface Response {
    id: number;
    Request: Request;
    ResponseText: string;
    TimeStamp: string;
}