import { ApplAccept, ApplAdminConsid, ApplCheck, ApplCoachConsid, ApplCreate, ApplReject } from "./ApplState";

export default class Application {
    constructor(name, User, Coach, Section) {
        this.name = name;
        this.User = User
        this.Coach = Coach
        this.Section = Section
    }

    statusPath = []

    newState(ApplState) {
        this.statusPath.push(
            {
                'status': ApplState.getClass(),
                'date': new Date()
            }
        )
    }

    chengeApplState() {
        switch (this.statusPath[this.statusPath.length - 1].status) {
            case "ApplCreate":
                this.newState(new ApplCheck());
                break;
            case "ApplCheck":
                this.newState(new ApplAdminConsid());
                break;
            case "ApplAdminConsid":
                this.newState(new ApplCoachConsid());
                break;
            case "ApplCoachConsid":
                this.newState(new ApplAccept());
                break;
            default:
                alert("ApplState is ???");
        }
    }

    setApplState(userNewStatus) {
        switch (userNewStatus) {
            case "ApplCreate":
                this.newState(new ApplCreate());
                break;
            case "ApplCheck":
                this.newState(new ApplCheck());
                break;
            case "ApplAdminConsid":
                this.newState(new ApplAdminConsid());
                break;
            case "ApplCoachConsid":
                this.newState(new ApplCoachConsid());
                break;
            case "ApplAccept":
                this.newState(new ApplAccept());
                break;
            case "ApplReject":
                this.newState(new ApplReject());
                break;
            default:
                alert("ApplState is ???");
        }
}

    returnActualState() {
        return this.statusPath[this.statusPath.length - 1]
    }

    checkActualState() {
        return (
            this.statusPath[this.statusPath.length - 1].status.toString() +
            this.statusPath[this.statusPath.length - 1].date.toLocaleString("ru", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }))
    }

    sendMails() {
        if (!this.User.rasp.includes(2))//и другие проверки 
        {
            alert("Success")//уведомление в интерфейсе пользователя
            this.User.getEmail()//уведомление на почту пользователя/администр.  
            this.Coach.getEmail()//уведомление на почту тренеру 
            this.Section.addAppl(this.Application)//добавляется в список заявок к данной секции
        }
        else { alert("The application has not been sent") }
    }

}