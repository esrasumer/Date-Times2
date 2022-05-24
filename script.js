// Date Object

let d = new Date();
let birthday = new Date(2001, 02, 21); // 0 = ocak 1= şubat 2=mart 3=nisan 4=mayıs 5=haziran 6=temmuz 7=ağustos 8=eylül 9=ekim 10=kasım 11=aralık
//Get Methods

console.log(d);
console.log(d.getDate());
console.log(typeof d);

//Set Methods

d.setFullYear(2022);
d.setMonth(1);
d.setDate(1);
d.setHours(10);

console.log(d.getFullYear() - birthday.getFullYear());