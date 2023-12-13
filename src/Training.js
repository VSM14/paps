export default class Training {
    constructor(timeStart, timeEnd, weekDay) {
        this.timeStart = timeStart
        this.timeEnd = timeEnd
        this.weekDay = weekDay
    }
    sportHall = "null"
}

export class GymTraining extends Training {
    constructor(timeStart, timeEnd, weekDay, hall) {
        super(timeStart, timeEnd, weekDay)
        this.hall = hall
    }
    EquipmentList = []
}

export class BasketTraining extends Training {
    constructor(timeStart, timeEnd, weekDay, hall) {
        super(timeStart, timeEnd, weekDay)
        this.hall = hall
    }
}