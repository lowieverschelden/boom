const userinput = document.getElementById('userInput');
const knop = document.getElementById('restart');
const countdowntext = document.getElementById('countdown');
const result = document.getElementById('result');
let randomnumber;
let countdownnumber = 5;


knop.addEventListener('click', () => {

    countdowntext.innerHTML = countdownnumber;
    const countdownInterval = setInterval(() => {
        countdownnumber--;
        countdowntext.innerHTML = countdownnumber;
        if(countdownnumber <=0) {
            clearInterval(countdownInterval);
            countdowntext.innerHTML = 'Finito!'
        }
    },1000);

    console.log(userinput.value);
    const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            randomnumber = Math.floor(Math.random()*3)+1;
            resolve(randomnumber);
        }, 5000);
    });
    promesa1.then((resolve) => {
        console.log(resolve);
        result.innerHTML = resolve;
        resolve == parseInt(userinput.value) ? result.innerHTML = 'Je hebt gewonnen' : result.innerHTML = 'Je bent verloren';
    });
});



