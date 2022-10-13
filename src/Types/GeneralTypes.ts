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