import data from '../../data.json';
import AutoWriter from './AutoWriter';
const slider = document.getElementById('slider');

var i=-1,j=1;

data.forEach((item, index) => {
    const itemLi = document.createElement('li');
    itemLi.classList.add('item');
    itemLi.style.backgroundImage = `url(images/${item.image})`;
    itemLi.style.backgroundSize = 'cover';
    itemLi.innerHTML = `
        <div class="content">
            <h1 class="title">${item.title}</h1>
            <p class="description" id="mess${++i}">${item.message}</p>
        </div>
    `;
    slider.appendChild(itemLi);
    console.log(index);
});

/*function activate(e) {
    const items = document.querySelectorAll('.item');
    if(j+1<7) e.target.matches('.next') && slider.append(items[0]);
    //e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
    const a = new AutoWriter(`mess${j}`,data[j].message,120);
    a.start();
}*/


document.querySelector(".next").addEventListener('click',function(){
    if(j!=0 && j+1<=5) {j++;slider.append(slider.firstElementChild);} else if(j==5){
        const a = new AutoWriter(`mess${0}`,data[0].message,120);
        a.start();
        slider.append(slider.firstElementChild);
        j=10;
        document.getElementById("next").style.display="none";
    }
    if(j!=10){
        const a = new AutoWriter(`mess${j}`,data[j].message,120);
        a.start();
    }
    console.log(j);
});
/*document.querySelector(".prev").addEventListener('click',function(){
    j = (j-1)<0?5:j-1;
});*/

// handle click event
//document.addEventListener('click', activate, false);

// handle keyboard event
document.addEventListener('keydown', function (e) {
    e.preventDefault();
    if (e.key === 'ArrowLeft') {
        //j = (j-1)<0?5:j-1;
        //slider.prepend(slider.lastElementChild);
    } else if (e.key === 'ArrowRight') {
        if(j!=0 && j+1<=5){ j++; slider.append(slider.firstElementChild)} 
        else if(j==5) {
            slider.append(slider.firstElementChild);
            const a = new AutoWriter(`mess${0}`,data[0].message,120);
            a.start();
            j=10;
            document.getElementById("next").style.display="none";
        }
    }
    if(j!=10){
        const a = new AutoWriter(`mess${j}`,data[j].message,120);
        a.start();
    }
});
