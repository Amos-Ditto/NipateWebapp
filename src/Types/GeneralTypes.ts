export interface County {
    id: number
    Name: string
}

export interface UserAuth {
    MobileNumber: string | null
    FirstName: string | null
    Auth_token: string | null
}