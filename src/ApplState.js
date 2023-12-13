export default class ApplState {
    stepsAppl() { }

}

export class ApplCreate extends ApplState {
    date = new Date()
    stepsAppl() {
        alert('Заявка создана и находится на проверке')
    }
}
export class ApplCheck extends ApplState {
    date = new Date()
    stepsAppl() {
        alert('Заявка проверена и находится на одобрении')
    }
}
export class ApplAdminConsid extends ApplState {
    date = new Date()
    stepsAppl() {
        alert('Заявка одобрена и передана тренеру')
    }
}
export class ApplCoachConsid extends ApplState {
    date = new Date()
    stepsAppl() {
        alert('Заявка принята, требуется ваше подтверждение')
    }
}
export class ApplAccept extends ApplState {
    date = new Date()
    stepsAppl() {
        alert('Заявка подтверждена. Приходите на занятия')
    }
}
export class ApplReject extends ApplState {
    date = new Date()
    stepsAppl() {
        alert('Заявка отклонена')
    }
}
