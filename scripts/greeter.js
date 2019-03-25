function getRandomName() {
    var randomNum = Math.floor(Math.random() * 8);
    var name = document.getElementById("p");
    name.innerText = "";
    switch (randomNum) {
        case 0:
            name.innerText = "Sakine";
            break;
        case 1:
            name.innerText = "Johan";
            break;
        case 2:
            name.innerText = "David";
            break;
        case 3:
            name.innerText = "Ranch";
            break;
        case 4:
            name.innerText = "Tuivi";
            break;
        case 6:
            name.innerText = "Samer";
            break;
        case 7:
            name.innerText = "Ali";
            break;
        default:
            name.innerText = "Robert";
    }
}
