export default class Section {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    applications = []

    addAppl(Application) {
        this.applications.push(Application)
    }

    trainingRasp = []

    addTr(Training) {
        this.trainingRasp.push(Training)
    }
}