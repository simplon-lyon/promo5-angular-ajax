enum Gender {
    Female = 1,
    Male,
    GenderFluid
}

export interface User {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    gender: Gender,
    ip_address: string
}
