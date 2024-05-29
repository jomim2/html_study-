const $popup = document.querySelector("#popup");

$popup.children[1].addEventListener("click", dat);
function dat() {
    $popup.style.display = 'none';
}

$popup.addEventListener("click",tomato);
function tomato(){
    $popup.style.backgroundColor='tomato';
}
document.querySelector('footer').addEventListener("click", function () {
    $popup.style.display = 'block';
});

const $me1 = document.querySelector('.subMenu a:nth-child(2)');
$me1.addEventListener("click",redd);
function redd()
{
    $me1.style.backgroundColor='pink';
}

const $blue = document.getElementById('blue1');
$blue.addEventListener("click",blue2);
function blue2() {
    $blue.style.backgroundColor='blue';
}

//const $momo = document.querySelector('.subMenu:nth-of-type(4)');
const $momo = document.querySelectorAll('.subMenu')[3];

console.log( $momo );

function mimi() {
    $momo.children[0].style.color='green';
}


// function () {
//     document.querySelector('.subMenu a:nth-child(2)').style.backgroundColor='red';
// })
// console.log (document.querySelector('.subMenu a:nth-child(2)'));