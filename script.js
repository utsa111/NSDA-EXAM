document.getElementById("btnheight").addEventListener("click", function() {
    const base = parseInt(document.getElementById("base").value);
    const height = parseInt(document.getElementById("height").value);
    const area = 0.5 * base * height;
    document.getElementById("triangleoutput").innerText = "Area of Triange is : " + area;
});

document.getElementById("btnArea").addEventListener("click", function() {
    const width = parseFloat(document.getElementById("width").value);
    const length = parseFloat(document.getElementById("length").value);
    const area = width * length;
    document.getElementById("Rectangoutput").innerText = "Area of Rectangle is : " + area;
});

document.getElementById("btn_Area").addEventListener("click", function() {
    const base1 = parseFloat(document.getElementById("base1").value);
    const height1 = parseFloat(document.getElementById("height1").value);
    const area = base1 * height1;
    document.getElementById("Parallelogramoutput").innerText = "Area of Parallelogram is : " + area;
});


document.getElementById("yy").addEventListener("click", function() {
    const diagonal1 = parseFloat(document.getElementById("diagonal1").value);
    const diagonal2 = parseFloat(document.getElementById("diagonal2").value);
    const area = 0.5 * diagonal1 * diagonal2;
    document.getElementById("rombusresult").textContent = "The area of the rhombus is: " + area;
});


document.getElementById("pp").addEventListener("click", function() {
    const side = parseFloat(document.getElementById("side").value);
    const area = (1/4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(side, 2);
    document.getElementById("result").textContent = "The area of the pentagon is: " + area;
});


document.getElementById("tt").addEventListener("click", function() {
    const A = parseFloat(document.getElementById("A").value);
    const B = parseFloat(document.getElementById("B").value);
    const area = 3.1416 * A * B;
    document.getElementById("Ellipseoutput").innerText = "Area of Parallelogram is : " + area;
});