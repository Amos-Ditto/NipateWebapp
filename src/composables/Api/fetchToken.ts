import type UserTokenDetails from '../../Types/UserFetch';

interface Error {
    error?: string[]
    MobileNumber?: string[]
    password?: string[]
}

interface FormData {
    MobileNumber: string
    password: string
}



const fetchToken = async (url: string, payload: FormData) => {
    let fetchedUser: UserTokenDetails = {
        MobileNumber: '', FirstName: '', LastName: '', Auth_token: ''
    };

    let fetchErrors: Error = {};

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    })

    if(response.status === 200) {
        fetchedUser = await response.json();
        
    } else {
        fetchErrors = await response.json();
    }
    
    return { fetchedUser, fetchErrors };
}

export default fetchToken;