const age = 18;
function submit() {
    let yourAge = document.getElementById("age").value;
    if (yourAge >= age) {
        alert("You are eligible")
    } else {
        alert("You are young")
    }
}