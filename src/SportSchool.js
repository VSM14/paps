let instance = null;
export default class SportSchool {
    constructor(name) {
        if (instance) {
            return instance;
        }
        instance = this;
        this.name = name;

        return instance;
    }

    getName() {
        return this.name
    }

    addres = {}

    setAddres(sity, street, building) {
        return {
            sity: sity,
            street: street,
            building: building
        };
    }
    getAddres() {
        return this.addres;
    }

    coaches = [];

    setCoach(Coach) {
        this.coaches.push(Coach)
    };

    employees = []
}