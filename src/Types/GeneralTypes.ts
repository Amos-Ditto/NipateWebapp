export interface County {
    id: number
    Name: string
}

export interface UserAuth {
    MobileNumber: string | null
    FirstName: string | null
    LastName: string | null
    Auth_token: string | null
}

export interface ServicesCategoryEntity {
    id: number;
    Name: string;
    services: ServicesEntity[];
}
export interface ServicesEntity {
    id: number;
    Name: string;
}

export interface CreateServiceForm {
    title: string;
    service: ServicesEntity
    description: string
}


export interface ServiceLocation {
    id: number;
    Provider: Provider;
    ServiceTitle: string;
    Service: Service;
    ServiceDescription: string;
    Longitude: string;
    Lattitude: string;
    Location: Location | null;
    workingDays?: (string)[] | null;
    AgeBracket?: null;
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
    Suburb?: null;
    Road?: null;
    Landmark?: null;
    CenterBlock?: null;
}

export interface UserDetails {
    id: number;
    User: User;
    Location: County;
    Provider: boolean;
}
export interface User {
    id: number;
    MobileNumber: string;
    IDNumber: string;
    FirstName: string;
    SurName: string;
}

export interface CreateService {
    ServiceTitle: string;
    ProductID: number;
    ServiceDescription: string;
    Longitude: string;
    Lattitude: string;
    CenterLocationID: number;
}

export interface CenterLocation {
    id: number;
    DisplayName: string;
    State: string;
    Town: string;
    Suburb: string;
    Road: string;
    Landmark: string;
    CenterBlock: string;
  }
  