const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
let count = 1;

next.addEventListener('click', () =>{
    count++;
    if(count > circles.length)
        count = circles.length
    update();
})

prev.addEventListener('click', ()=>{
    count--;
    if(count < 1)
        count = 1;
    update();
})

function update(){

    // progress.style.width = '66.66%';
    // console.log(count);
    // console.log(circles.length);
    circles.forEach((circle, idx) =>{
        if(idx < count)
        {
            circle.classList.add('active');
        }
        else
        circle.classList.remove('active');
});

    const actives = document.querySelectorAll('.active');

    // console.log(actives.length);
    // console.log(circles.length);
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if(count === 1)
        prev.disabled = true;
    else if(count === circles.length)
        next.disabled = true;
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}
