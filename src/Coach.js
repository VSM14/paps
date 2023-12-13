import { GymTraining, BasketTraining } from "./Training";

export default class Coach {

    rasp = [];

    trainingHall() { }
}

export class GymCoach extends Coach {//приписываем всем объектам данного класса одно на всех "большое и тяжелое" свойство - hall
    hall
    constructor() {
        super()
        this.hall = "GymHall#2"
    }
}

export class GymCoachesFlyweight extends GymCoach {
    constructor(name, email) {
        super()
        this.name = name
        this.email = email
    }
    getName() {
        return this.name
    }
    getEmail() {
        return this.email
    }
    trainingHall() {
        alert(`я, ${this.name}, провожу тренировку в ${this.hall}`)
    }

    createTraining(time1, time2, weekDay, hall) {
        const myTraining = new GymTraining(time1, time2, weekDay, this.hall)

        alert(`${myTraining.hall} ura gym`)// ~~ запись в БД
    }
}

export class BasketCoach extends Coach {
    constructor(name, email, hall) {
        super(name, email)
        this.hall = hall
    }
    trainingHall() {
        alert(`я провожу тренировку в ${this.hall}`)
    }

    createTraining(time1, time2, weekDay, hall) {
        const myTraining = new BasketTraining(time1, time2, weekDay, this.hall)
        alert(`${myTraining.hall} ${time1.toLocaleString("ru", {
            hour: 'numeric',
            minute: 'numeric'
        })} ura basket`)// ~~ запись в БД
    }
}