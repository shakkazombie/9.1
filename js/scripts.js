// scripts.js 

function getTriangleArea(a, h) {
    var wynik = ((a * h) / 2);

    if (a > 0 && h > 0) {
        return wynik;
    } else(a <= 0 && h <= 0); {
        return ('nieprawidłowe dane');
    }

}

var triangle1Area = getTriangleArea(3, 3);
var triangle2Area = getTriangleArea(13, 0);
var triangle3Area = getTriangleArea(8, 7);

document.write(getTriangleArea(10, 6) + " stała wartośc " + "<br/>");
document.write("pierwszy - " + triangle1Area + "<br/>");
document.write("drugi - " + triangle2Area + "<br/>");
document.write("trzeci -" + triangle3Area + "<br/>");