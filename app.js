'use scrict'
let firstImageElement = document.getElementById('first-image');
let secondImageElement = document.getElementById('second-image');
let thirdImageElement = document.getElementById('third-image');
//console.log('hello');
let firstImageIndex = 0;
let secondImageIndex = 0;
let thirdImageIndex = 0;

let maxAttempts = 25;
let userAttempetsCounter = 0;


let allPic = [];
function productsImages(name, source) {
    this.name = name;
    this.source = source;
    this.vote = 0;
    allPic.push(this)
};




new productsImages('bag', 'images/bag.jpg');
new productsImages('banana', 'images/banana.jpg');
new productsImages('bathroom', 'images/bathroom.jpg');
new productsImages('boots', 'images/boots.jpg');
new productsImages('dragon', 'images/dragon.jpg');
new productsImages('breakfast', 'images/breakfast.jpg');
new productsImages('bubblegum', 'images/bubblegum.jpg');
new productsImages('chair', 'images/chair.jpg');
new productsImages('cthulhu', 'images/cthulhu.jpg');
new productsImages('dog-duck', 'images/dog-duck.jpg');
new productsImages('pen', 'images/pen.jpg');
new productsImages('pet-sweep', 'images/pet-sweep.jpg');
new productsImages('scissors', 'images/scissors.jpg');
new productsImages('shark', 'images/shark.jpg');
new productsImages('sweep', 'images/sweep.jpg');
new productsImages('tautaun', 'images/tautaun.jpg');
new productsImages('unicorn', 'images/unicorn.jpg');
new productsImages('water-can', 'images/water-can.jpg');
new productsImages('wine-glass', 'images/wine-glass.jpg');


function generateRandomIndex() {
    return Math.floor(Math.random() * allPic.length)
};

function renderThreeImages() {
    firstImageIndex = generateRandomIndex();
    secondImageIndex = generateRandomIndex();
    thirdImageIndex = generateRandomIndex();

};






function setImages() {
    renderThreeImages()
    while (firstImageIndex === secondImageIndex || firstImageIndex === thirdImageIndex || secondImageIndex === thirdImageIndex) {

        renderThreeImages()

    };
    //console.log(firstImageIndex)



    firstImageElement.src = allPic[firstImageIndex].source;
    secondImageElement.src = allPic[secondImageIndex].source;
    thirdImageElement.src = allPic[thirdImageIndex].source;

};
setImages();




/*while (firstImageIndex === secondImageIndex === thirdImageIndex) {
    secondImageIndex = generateRandomIndex()
};
while (firstImageIndex === secondImageIndex === thirdImageIndex) {
    thirdImageIndex = generateRandomIndex()
};



firstImageElement.src = allPic[firstImageIndex].source;
secondImageElement.src = allPic[secondImageIndex].source;
thirdImageElement.src = allPic[thirdImageIndex].source;*/

//renderThreeImages()
firstImageElement.addEventListener('click', handleUserClick);
secondImageElement.addEventListener('click', handleUserClick);
thirdImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {

    userAttempetsCounter++;
    if (userAttempetsCounter <= maxAttempts) {
        console.log('hi');
        if (event.target.id === 'first-image') {
            allPic[firstImageIndex].vote = allPic[firstImageIndex].vote + 1
        } else if (event.target.id === 'second-image') {

            allPic[secondImageIndex].vote = allPic[secondImageIndex].vote + 1
        }

        else {

            allPic[thirdImageIndex].vote = allPic[thirdImageIndex].vote + 1
        }
        setImages();
    }

    else {

        let list = document.getElementById('result');
        let LiElement; for (let i = 0; i < allPic.length; i++) {
            LiElement = document.createElement('li');
            list.appendChild(LiElement);
            LiElement.textContent = `${allPic[i].name} has ${allPic[i].vote}vote`
        }


        firstImageElement.removeEventListener('click', handleUserClick);
        firstImageElement.removeEventListener('click', handleUserClick);
        firstImageElement.removeEventListener('click', handleUserClick);



    }



    console.log(allPic);

    // let list = document.getElementById('result');
    // let LiElement; for (let i = 0; i < allPic.length; i++) {
    //     LiElement = document.createElement('li');
    //     list.appendChild(LiElement);
    //     LiElement.textContent = `${allPic[i].name} has ${allPic[i].vote}vote`
    // }



}




