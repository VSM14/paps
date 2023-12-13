import React from "react";
import User, { UserProxy } from "./UserM.js";
import SportSchool from "./SportSchool.js";
import Coach, { BasketCoach, GymCoachesFlyweight } from "./Coach.js";
// import Application from "./Application.js";
import Section from "./Section.js";
import { ApplCreate, ApplReject } from "./ApplState.js";

const App = () => {
  const myUser = new User('Sergey', 'smv6@tpu.ru')
  const mySportSchool = new SportSchool('#6')
  const mySportSchool2 = new SportSchool('#62')
  const Trener = new Coach('Trener')
  const Trener2 = new Coach('Trener2')
  const mySection = new Section('Basketball')

  mySportSchool.setCoach(Trener)
  mySportSchool2.setCoach(Trener2)

  // const myAppl = new Application("nameApp", myUser, Trener2, mySection)
  // myAppl.sendMails()

  const myDate = new Date();

  const BasketTrener = new BasketCoach('BaskTR', '@mail.ru', 'BasketHall#1')
  BasketTrener.createTraining(
    new Date(0, 0, 0, 12, 30, 0),
    new Date(0, 0, 0, 14, 30, 0),
    3,
    BasketTrener.hall)

  const myUserP = new UserProxy(myUser)

  const myApplCreate = new ApplCreate()
  myApplCreate.stepsAppl()
  const myApplCreate2 = new ApplReject()
  myApplCreate2.stepsAppl()

  const myGymCoachFW = new GymCoachesFlyweight("FWGymTrener", 'fwgt@mail.ru')
  myGymCoachFW.trainingHall()
  return (
    <div>
      qwe
      <p></p>
      {mySportSchool.coaches[0].name}
      <p></p>
      {myUser.email}
      <p></p>
      {mySportSchool.name}
      <p></p>
      {mySportSchool2.name}
      <p></p>
      {myDate.getFullYear()} "" {myDate.getMonth() + 1}
      <p></p>
      {/* {myAppl.Coach.name} */}
      <p></p>
      {BasketTrener.trainingHall()}
      <p></p>
      {myUserP.name}

      {myUserP.submitApplication(Trener, mySection)}
      <p></p>
      { }
    </div>
  );
};

export default App;


/*
npm start
*/