import User from '../UserM.js'

test('UserRasp', () => {
    const myUser = new User('Sergey', 'smv6@tpu.ru')
    myUser.rasp.push(3)

    expect(myUser.rasp).not.toContain(2)
}) 