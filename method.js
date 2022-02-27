const Student = {
    id: 101,
    name: 'Std Name',
    balance: 5000,
    major: 'mathematics',
    courses: ['math101', 'english', 'calculus', 'statistics'],
    bestFriend: {
        name: 'Ran',
        major: 'mathematics'
    },
    //object method
    withdrawBalance: function (amount) { return this.balance -= amount; }
};
const Teacher = {
    id: 100001,
    name: 'Teacher',
    dept: 'mathematics',
    subject: ['algebra', 'calculus']
}
cons