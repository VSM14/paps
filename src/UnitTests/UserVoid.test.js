import User from '../UserM.js'

test('UserVoid', () => {
    const myUser = new User('Sergey', 'smv6@tpu.ru')
    const m1 = myUser.misses.length;
    myUser.misses.push({
        section: "Basketball",
        date: "27.12"
    })
    expect(m1 + 1).toBe(myUser.misses.length)
});