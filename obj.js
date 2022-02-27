// object declaration
// object literal 
let book = { title: 'The Book', author: 'Author', price: 50 };
// object constructor
let person = new Object();
let magazine = Object.create(book);
// let magazine = Object.create(null);
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
// object using class
let newBook = new Book('New Book', 'None');
// function as class    // 'class' is a syntactical sugar
function AsClass(val) {
    this.val = val;
}
let as = new AsClass(45);


//  keys, values, entries, delete, seal, freeze
const keys = Object.keys(book); // ['title', 'author', 'price']
const values = Object.values(book); // ['The Book', 'Author', 50]
const paris = Object.entries(book); // [['title', 'The Book'], ['author', 'Author'], ['price', 50]]
delete book.price;  // { title: 'The Book', author: 'Author' }

let theBook = { title: 'The New Book', author: 'The Author', price: 50 };
Object.freeze(theBook);
delete theBook.author;  // delete property will not work due to seal
theBook.price = 100;    // update or add property will work after
theBook.page = 1123;

let freeBook = { title: 'The Free Book', author: 'Free Author', price: 50 };
Object.freeze(freeBook);
// delete, update or add property will not work due to seal
delete freeBook.author;
freeBook.price = 100;    //  will work after
freeBook.page = 1123;
