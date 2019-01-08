export interface Character {
    name: string;
    title: string;
    status: string;
    siblings: Sibling[];
}


export interface Sibling {
    name: string;
    dateOfBirth: string;
}
