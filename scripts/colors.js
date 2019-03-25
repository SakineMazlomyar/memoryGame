function getRandomColor() {
    var randomNummer = Math.floor(Math.random() * 8);
    switch (randomNummer) {
        case 0:
            document.body.style.backgroundColor = "blue";
            break;
        case 1:
            document.body.style.backgroundColor = "yellow";
            break;
        case 2:
            document.body.style.backgroundColor = "black";
            break;
        case 3:
            document.body.style.backgroundColor = "red";
            break;
        case 4:
            document.body.style.backgroundColor = "green";
            break;
        case 6:
            document.body.style.backgroundColor = "white";
            break;
        case 7:
            document.body.style.backgroundColor = "grey";
            break;
        default:
            document.body.style.backgroundColor = "orange";
    }
}
