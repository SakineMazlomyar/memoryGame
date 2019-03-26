var dublicateNumbers = [];
(function createRandomNumber() {
    var numbers = [1, 2, 3, 4, 5, 6];
    for (var i = 0; i < 2; i++) {
        numbers.forEach(function (number) {
            dublicateNumbers.push(number);
        });
    }
})();
//Here We shuffle the array
function shuffle(array) {
    var newPos;
    var temperoryNum;
    for (var i = dublicateNumbers.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * i + 1);
        //This is the value we have
        temperoryNum = dublicateNumbers[i];
        //This the position of that value which we replace with new position
        dublicateNumbers[i] = dublicateNumbers[newPos];
        //This is the new position which we set that value on this position
        dublicateNumbers[newPos] = temperoryNum;
    }
    return array;
}
shuffle(dublicateNumbers);
function createDivForNumber() {
    var container = document.createElement("div");
    container.setAttribute("id", "container");
    dublicateNumbers.forEach(function (number) {
        var div = document.createElement("div");
        div.setAttribute("id", "item");
        var img = document.createElement("img");
        img.src = "./imgs/" + number + ".jpg";
        img.style.width = "100%";
        img.style.height = "100%";
        div.appendChild(img);
        img.style.opacity = "0";
        div.onclick = function () { clickOnDiv(img); };
        container.appendChild(div);
    });
    document.body.appendChild(container);
}
var hasFlipped = false;
var firstImgSrc;
var secondImgSrc;
var img1;
var img2;
function clickOnDiv(img) {
    if (!hasFlipped) {
        hasFlipped = true;
        firstImgSrc = img.src;
        img1 = img;
        img1.style.opacity = "1";
    }
    else {
        hasFlipped = false;
        secondImgSrc = img.src;
        img2 = img;
        img2.style.opacity = "1";
        if (firstImgSrc == secondImgSrc) {
            img1.style.opacity = "1";
            img2.style.opacity = "1";
        } else {
            setTimeout(function(){
                img1.style.opacity = "0";
                img2.style.opacity = "0";
            }, 500)
        }
    }
}
