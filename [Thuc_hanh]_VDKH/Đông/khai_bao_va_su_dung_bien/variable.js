let f = 20.5;
let b = true;
let s = 'Hà Nội';
let i = 10;

document.write('i = ' + i);
document.write('<br/>');
document.write('f = ' + f);
document.write('<br/>');
document.write('b = ' + b);
document.write('<br/>');
document.write('s = ' + s);
document.write('<br/>');

//dien tich hinh chu nhat
let width = 20;
let height = 10;
let area = width * height;
document.write('Area = ' + area);
document.write('<br/>');

//kiem tra boi so
function test() {
    let a = parseFloat(prompt("nhap vao so a"));
    let b = parseFloat(prompt("nhap vao so b"));
    if (a % b === 0) {
        alert("a chia het cho b");
    }
    else {
        alert("a khong chia het cho b")
    }
}