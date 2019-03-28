let dublicateNumbers: Array<number> = [];
(function createRandomNumber(){
    let numbers = [1,2,3,4,5,6];
    for(let i =0; i<2; i++) {
    numbers.forEach(number => {
        dublicateNumbers.push(number)
    })     
    }
})()
//Here We shuffle the array
function shuffle() {
    let newPos: number;
    let temperoryNum: number;
    for(let i = dublicateNumbers.length-1; i>0 ; i--){
        newPos = Math.floor(Math.random()* i+1);
        //This is the value we have
        temperoryNum = dublicateNumbers[i];
        //This the position of that value which we replace with new position
        dublicateNumbers[i] = dublicateNumbers[newPos];
        //This is the new position which we set that value on this position
        dublicateNumbers[newPos] = temperoryNum;

    }
    return dublicateNumbers;
}
shuffle();

function createDivForNumber(){
    let container = document.createElement("div")
    container.setAttribute("id", "container");
    dublicateNumbers.forEach(number => {
        let div = document.createElement("div");
        div.setAttribute("id", "item");

        let img = document.createElement("img");
        img.src= "./imgs/"+number+".jpg";
        img.style.width = "100%"
        img.style.height = "100%"
        div.appendChild(img)
        img.style.opacity="0"
        div.onclick = function(){clickOnDiv(img)}
        container.appendChild(div);

    })
    document.body.appendChild(container);
}
let hasFlipped = false;
let firstImgSrc: string;
let secondImgSrc: string;

let img1: HTMLElement;
let img2: HTMLElement;
function clickOnDiv(img:HTMLImageElement) {
    if(!hasFlipped) {
        hasFlipped = true;
        firstImgSrc = img.src;
        img1 = img;
        img1.style.opacity = "1";

    } else{
        
        hasFlipped = false;
        secondImgSrc = img.src;
        img2 = img;
        img2.style.opacity = "1";
        if(firstImgSrc == secondImgSrc) {
            img1.style.opacity = "1";
            img2.style.opacity = "1";
                
        }else {
            setTimeout(() => {
            img1.style.opacity = "0";
            img2.style.opacity = "0";

        }, 300);
        }
    }
}





