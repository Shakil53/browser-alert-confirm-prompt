// function alertFun() {
//     alert("shakil is here have to say bhoom");
// }

const alertFun = () => {
    alert("Hey User, Tomorrow we have a exam!!!");
}

const confirmBtn = () => {
    const response = confirm("Do you want attend the Exam?");
    if (response == true) {
        console.log("Yes I want");
        alert("Exam Started at 10 o'clock");

    }
    else {
        console.log("No I am not prepared");
        alert("Ok, Prepare for the Next Exam!!")
    }
}

const askName = () => {
    const inputData = prompt("What is Your Name");
    alert(inputData);
}
