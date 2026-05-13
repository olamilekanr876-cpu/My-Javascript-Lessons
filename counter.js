
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('addBtn')
const decreaseBtn = document.getElementById('decreaseBtn')
const reset =  document.getElementById('resetBtn');
const userInput = document.getElementById('userInput');
const backgroundBtn= document.getElementById('bgBtn');
const doubleBtn= document.getElementById('double');


let count = 0;

function updateCount () {
    counter.textContent = count

    if(count>0) {
        counter.style.color = 'green';
    }else if(count < 0) {
        counter.style.color =  'red'
    }else {
         counter.style.color = 'black'
    }
}

increaseBtn.addEventListener('click', ()=>{
    count = count + 1;
    updateCount()
    
})

decreaseBtn.addEventListener('click', ()=> {
     
        count =  count - 1;
        updateCount()
     
     
    
    

})

reset.addEventListener('click', ()=> {
    count = 0;
    updateCount()
})

doubleBtn.addEventListener('click', ()=> {
    count = count * 2
    updateCount()
})


document.addEventListener('keydown', (e)=> {
     if(e.key === 'ArrowUp') {
        count = count + 1;
        updateCount()
     }

     if(e.key === 'ArrowDown') {
        count =  count - 1;
         updateCount()

     }

     if(e.key === 'r') {
        count = 0;
        updateCount()
     }
}) 


backgroundBtn.addEventListener('click', ()=> {
    document.body.style.backgroundColor = userInput.value;

    userInput.value = ''
})





