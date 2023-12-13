import Application from "./Application";

export default class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }

    rasp = [];

    misses = [];

    addMiss(params) {
        this.misses.push(params)
    };

    submitApplication(Coach, Section) {
        return (new Application("#48", this.User, Coach, Section))
    }
}

export class UserProxy {

    constructor(User) {
        this.name = User.name
    }

    submitApplication(Coach, Section) {
        alert(`заявка подана на вступление в секцию ${Section.name}, тренера ${Coach.name}. Отправитель ${this.name}`)
    }
}