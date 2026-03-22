//interface

// class Shape {
//   area() {
//     return "formule de aire";
//   }
// }
// class Rectangle extends Shape {
//   constructor(width, height) {
//     super()
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.height * this.width;
//   }
//   getWidth(){
//     return this.width
//   }
// }
// //prototype - testamant de parents
// const rect = new Rectangle(5, 10);
// console.log(rect.area());
// console.log(rect.__proto__=== Rectangle.prototype)

// class User {
//     static Roles={
//         admin:"admin",
//         colaborator:"colaborator"
//     }
//   name;
//   #email;
//   constructor({ email, name }) {
//     this.#email = email;
//     this.name = name;
//   }
//   get email(){
//     return this.#email
//   }
//   set email(text){
//     this.#email=text
//   }
// }
// const illia=new User({email:"illia@illia.com",name:"Illia",role: User.Roles.admin})
// console.log(illia)

// Напиши функцію-конструктор Profile,
//  яка створює об'єкт з властивостями:

// username

// country

// У prototype додай метод showProfile(), який виводить:

// function Profile({username,country}) {
//   this.username=username
//   this.country=country
// }
// Profile.prototype.showProfile=function () {
//     console.log(`username=${this.username}`)
// }
// const user1 = new Profile({
//   username: "Anna",
//   country: "Ukraine",
// });
// user1.showProfile()

// class Animal{
//     constructor({name,type,age}){
//         this.name=name
//         this.type=type
//         this.age=age
//     }
//     getInfo(){
//         return `name=${this.name} , type=${this.type} , age=${this.age}`
//     }
// }

// const dog = new Animal({
//   name: "Buddy",
//   type: "dog",
//   age: 5,
// });
// console.log(dog.getInfo())
class Playlist{
    constructor(songs){
        this.songs=songs
    }
    getSongs(){
        return this.songs
    }
    addSong(song){
this.songs.push(song)
    }
    removeSong(song){
    const index =this.songs.indexOf(song)
    if(index !==-1){
        this.songs.splice(index,1)
    }
    }
}

const playlist = new Playlist(["Song 1", "Song 2", "Song 3"]);

console.log(playlist.getSongs());

playlist.addSong("Song 4");

playlist.removeSong("Song 2");

console.log(playlist.getSongs());
