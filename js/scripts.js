// scripts.js 

function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
        return a * h / 2;
    } else {
        document.write('złe dane' + "<br/>");
    }
}

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(10, 6);
var triangle3Area = getTriangleArea(-2, 7);

document.write(triangle1Area + "<br/>");
document.write(triangle2Area + "<br/>");
document.write(triangle3Area + "<br/>");