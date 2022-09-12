

let devs = [
    {
        id: 1,
        name: "Dave Andrew",
        job: "Full Stack Developer",
        img: 'photo/ME!!!.png',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est 
        laborum.`
    },{
        id: 2,
        name: "Onya",
        job: "Pengangguran",
        img: 'photo/onya.png',
        text:
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
        consectetur vulputate metus, ac tempus risus ullamcorper eu. Suspendisse 
        potenti. Etiam at dolor massa. Integer gravida sapien ut ullamcorper 
        malesuada. Suspendisse sed malesuada augue. Nam sodales quam sit amet 
        accumsan aliquet. Donec efficitur ligula nec magna porta, eu semper libero 
        porttitor. Donec ornare feugiat felis. Morbi bibendum faucibus cursus.`
    },{
        id: 3,
        name: "Stena",
        job: "Mahasiswi",
        img: 'photo/stena.png',
        text: 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam turpis 
        tortor, et semper magna rhoncus nec. Mauris pharetra mollis leo ac ornare. 
        Vestibulum dapibus sapien id ipsum porta, a blandit quam elementum. Fusce 
        vulputate feugiat mattis. Cras purus tellus, accumsan id est id, pretium 
        pretium velit. Aenean ac nisi pretium, fringilla dolor vitae, pharetra velit. 
        Ut eu varius elit. Integer semper efficitur metus, eget pretium risus lacinia 
        eu. Phasellus semper diam eu orci rutrum tempor. Donec interdum nulla eget.`
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

function showPerson(person){
    const item = devs[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > devs.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if(currentItem < 0){
        currentItem = devs.length - 1;
    }
    showPerson(currentItem);
});