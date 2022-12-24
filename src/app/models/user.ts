export interface User {
    _id: number,
    tickets: Array<number>,
    experiences: Array<number>,
    name: string,
    surname: string,
    email: string,
    password: string,
    role: number,
    loggedWithOAuth2: boolean,
    privileges: Array<number>
}