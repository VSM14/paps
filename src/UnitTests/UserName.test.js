import User from '../UserM.js'

test('UserName', () => {
    const myUser = new User('Sergey', 'smv6@tpu.ru')

    expect(myUser.getName()).toBe('Sergey')
}) 