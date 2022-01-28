export default class Pet {
    id: string;

    name: string;

    kind: string;

    age: number;

    available: boolean;

    constructor() {
        this.id = '';
        this.name = '';
        this.kind = '';
        this.age = 0;
        this.available = true;
    }
}
