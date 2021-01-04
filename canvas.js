window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    // Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // context.strokeStyle = "red";
    // context.lineWidth = 5;
    // context.fillRect(50, 50, 200, 200);
    // context.strokeRect(50, 50, 200, 200);


    // context.beginPath();
    // context.moveTo(100, 100);
    // context.lineTo(200, 100);
    // context.lineTo(200, 150);
    // context.closePath();
    // context.stroke();

    // variables
    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function finishedPosition() {
        painting = false;
        context.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        context.lineWidth = 10;
        context.lineCap = "round";
        context.strokeStyle = "red";

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);


    }
    // EventListerners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mousedown", finishedPosition);
    canvas.addEventListener("mouseup", draw);
});

//window.addEventListener(resi)