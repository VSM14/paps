import SportSchool from '../SportSchool.js'

test('SportSchoolSingleton', () => {
    const mySportSchool = new SportSchool('#6')
    const mySportSchool2 = new SportSchool('newSchool')

    expect(mySportSchool.getName()).toBe(mySportSchool2.getName())
}) 
/*
npm test -- -u -t="SportSchoolSingleton"
*/
