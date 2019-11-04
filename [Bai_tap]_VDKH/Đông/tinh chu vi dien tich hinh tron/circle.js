let number = parseInt(prompt("Input radius "));
function acr() {
    let area = Math.PI * Math.pow(number,2);
    document.write(area.toString() + "<br>");
}
function perimeter() {
    let per  = 3.14 * number * Math.PI;
    document.write(per.toString() + "<br>" );
}