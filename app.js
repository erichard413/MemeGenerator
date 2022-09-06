const memeButton = document.getElementById('make');

memeButton.addEventListener('click',function(e){
    e.preventDefault();
    img = document.querySelector('.entry :nth-child(1)');
    imgUrl = img.value; 
    topInput = document.querySelector('.entry :nth-child(2)');
    console.log(top.value);
    topText = topInput.value.toUpperCase();
    bottomInput = document.querySelector('.entry :nth-child(3)');
    bottomText = bottomInput.value.toUpperCase();
    form = document.querySelector('#memeForm');
if (!imgUrl){
    alert("You have not provided an image!");
} else {
    createDiv(topText, bottomText);
    form.reset(); }
});

function createDiv(upper, lower){
    newDiv = document.createElement('div');
    remove = document.createElement('p');
    remove.innerText = "\u274C";
    remove.classList.add('remove');
    remove.style.height = "400px";
    newDiv.style.height = '400px';
    newDiv.style.width = '400px';
    newDiv.classList.add('divBox');
    bgImage = `url(${imgUrl})`;
    newDiv.style.backgroundImage = bgImage;
    newDiv.style.backgroundSize = "cover";
    newDiv.style.backgroundPosition = "center";
    newTextTop = document.createElement('p');
    newTextTop.innerText = upper;
    newTextTop.style.width = "400px";
    newTextTop.classList.add('memeTextTop');
    newTextBottom = document.createElement('p');
    newTextBottom.innerText = lower;
    newTextBottom.style.width = "400px";
    newTextBottom.classList.add('memeTextBottom');
    newDiv.appendChild(newTextTop);
    newDiv.appendChild(newTextBottom);
    newDiv.appendChild(remove);
    results = document.getElementById('results');
    results.appendChild(newDiv);      
};

const memeClick = document.querySelector('#results');
memeClick.addEventListener('click', function(e){
    e.preventDefault();
clicked = e.target;
    if(clicked.classList.value === "remove") {
        toRemove = clicked.parentNode;
        results.removeChild(toRemove);
}
}

);



// function createImage(url){
//     image = document.createElement('IMG');
//     image.setAttribute("src", url);
//     image.setAttribute("width", "300");
//     results = document.getElementById('results');
//     results.appendChild(image);
// }
