interface Locations {
    id: number;
    Name: string;
}

interface Categories {
    id: number;
    Name: string;
}

interface User {
    id?: number;
    MobileNumber?: string;
    IDNumber?: number;
    FirstName?: string;
    SurName?: string;
}

export {Locations, Categories, User};