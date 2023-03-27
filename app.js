let liste = document.querySelector('ul');
let btn1 = document.getElementById('1');
let btn2 = document.getElementById('2');
let btn3 = document.getElementById('3');
let btn4 = document.getElementById('4');
let btn5 = document.getElementById('5');
let btn6 = document.getElementById('6');
let btn7 = document.getElementById('7');
let btn8 = document.getElementById('8');
let btnlist = document.querySelectorAll('button');
let h2 = document.querySelectorAll('h2');
let section2 = document.getElementById('section-2');
let form = document.getElementById('formulaire-title');
let save = [];
btn1.addEventListener('click', () => {
    liste = document.querySelector('ul');
    if(liste.children.length > 0) {
        save.push(liste.children[liste.children.length-1]);
        liste.removeChild(liste.children[liste.children.length-1]);
    } else {
        for( let i = save.length; i > 0; i--) {
            liste.appendChild(save[i-1]);
        }
    }
});

btn2.addEventListener('click', () => {
    let liste2 = document.querySelectorAll('#liste2 li');
    Object.values(liste2).map((el,index) => {
        if(el.className == "hide") {
            el.classList.remove('hide');
            let transformer = ``;
            el.style.transform = transformer;
            el.style.opacity = "1";
        } else {
            el.style.transition = "transform 1s, opacity 1s";
            let transformer = `translateY(-${el.scrollHeight*index}px)`;
            el.style.transform = transformer;
            el.style.opacity = "0";
            el.classList.add('hide');
        }
    });
});

btn3.addEventListener('click' , () => {
    btn1.className = 'btn-marge';
});
btn4.addEventListener('click', () =>{
    btn4.className = 'btn-color';
});
btn5.addEventListener('click', () => {
    let section1 = document.getElementById('section-1');
    section1.style.background = "url('background.jpg')";
    section1.style.backgroundSize = 'cover';
});
btn6.addEventListener('mouseover', () => {
    Object.values(btnlist).map(el => {
        el.style.background = "#00FF00";
    });
});
btn6.addEventListener('mouseout', () => {
    Object.values(btnlist).map(el => {
        el.style.background = "";
    });
})
btn7.addEventListener('click', (e) => {
    e.preventDefault();
});
btn7.addEventListener('dblclick', () => {
    btn7.style.background = "#6000FF";
})
btn8.addEventListener('click', () => {
    Object.values(h2).map(el => {
        el.classList.toggle('disabled');
    });
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector('input');
    let title = document.querySelector('h1');
    title.innerHTML = input.value;
});
function heure() {
    let heureNow = new Date();
    let HH = addZero(heureNow.getHours());
    let MM = addZero(heureNow.getMinutes());
    let SS = addZero(heureNow.getSeconds());
    section2.innerHTML = `${HH}:${MM}:${SS}`;
}
function addZero(time) {
    if(time < 10) {
        return "0" + time;
    }
    else{
        return time;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.background = "#A0FFA0";
    liste.innerHTML += "<li>Lorem</li>";
    setInterval(heure, 1000);
});
