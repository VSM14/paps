export default class CompetitionsFactory {
    constructor(type) {
        this.type = type
    }
    createComp(date, sity) {
        if (this.type === "EKP") {
            return new EKPCompetitions(date, sity)
        }
        if (this.type === "ASB") {
            return new EKPCompetitions(date, this.sity)
        }
    }
}

export class EKPCompetitions extends CompetitionsFactory {
    constructor(type, date, sity) {
        super(type)
        this.date = date
        this.sity = sity
    }
    protocols = []
    addProtocol(protocol) {
        this.protocols.push(protocol)
    }
    CreateReport(tickets, references, certificate) {
        return ("Большой сложный документ")
    }
    EnyerPlayerData(User) { }
}

export class ASBTournament extends CompetitionsFactory {
    constructor(type, tourNum, date, host) {
        super(type)
        this.date = date
        this.tourNum = tourNum
        this.host = host
    }
    EnyerPlayerData(User) { }
}