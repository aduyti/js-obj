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
    treatDey: function () {

    },
    //object method
    withdrawBalance: function (amount, tax = 0) {
        this.balance -= (amount + tax);
        console.log(this.name, this.balance);
    }
};
const Teacher = {
    id: 100001,
    name: 'Teacher',
    balance: 10000,
    dept: 'mathematics',
};
// bind to borrow method form another object
const teaWithdraw = Student.withdrawBalance.bind(Teacher);
teaWithdraw(200);
Student.withdrawBalance.call(Teacher, 500, 10);
Student.withdrawBalance.apply(Teacher, [500, 10]);