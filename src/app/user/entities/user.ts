/**
 * les enums permettent d'établir une correcpondance entre des nombres entiers et leur "signification".
 */
enum Gender {
    Female = 1,
    Male,
    GenderFluid
}
/**
 * déclaration du type User
 */
export interface User {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: Gender,
    ip_address: string
}
