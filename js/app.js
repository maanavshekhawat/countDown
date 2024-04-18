const endDate = "15 April 2024 15:06:00";


document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll('input')

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end);
    // console.log(now);
    const diff = (end-now)/1000;
    // console.log(diff);
    if(diff < 0) return;
    // convert into days
    inputs[0].value = Math.floor(diff/3600/24);
    // convert into Hours
    inputs[1].value = Math.floor(diff/3600)%24;
    // convert into Minutes
    inputs[2].value = (Math.floor(diff/60)%60);
    // convert into Seconds
    inputs[3].value = (Math.floor(diff)%60);

}

//initial call
clock();

setInterval(() => {
    clock();
}, 1000);


