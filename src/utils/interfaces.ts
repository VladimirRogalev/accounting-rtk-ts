

export interface User {

    "login": string,
    "firstName": string,
    "lastName": string,
    "roles": [
    string
]

}

export interface Login {
    'login' : string,
    password: string
}

export interface UserRequest {

    "firstName": string,
    "lastName": string,
    "login": string,
    "password": string
}

export  interface UserResponse {
    "login": string,
    "password": string
}
