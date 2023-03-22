class User {
    constructor(name) {
        this.name = name
        this.state = {}
    }

    render() {
        return 'My name is ' + this.name
    }
}

const user1 = new User ('dimych')
const user2 = new User ('dimych')


console.log(user1.__proto__ === User.prototype) //true
console.log(user2.__proto__ === User.prototype) //true
