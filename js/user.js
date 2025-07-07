class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
}

const user1 = new User(
    'Giacomo',
    'Pillitteri',
    28,
    'Bisacquino'
)

const user2 = new User(
    'Gary',
    'Oak',
    36,
    'Biancavilla'
)

function compareAge() {
    if (user1.age > user2.age) {
        return `${user1.firstName} è più grande di ${user2.firstName}`
    } else {
        return `${user2.firstName} è più grande di ${user1.firstName}`
    }

}

console.log(compareAge())