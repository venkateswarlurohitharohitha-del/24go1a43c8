function calculateGrade() {

    let maths = Number(document.getElementById("maths").value);
    let english = Number(document.getElementById("english").value);
    let computer = Number(document.getElementById("computer").value);
    let science = Number(document.getElementById("science").value);
    let social = Number(document.getElementById("social").value);

    let total = maths + english + computer + science + social;
    let average = total / 5;

    let grade;

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    let result;

    if (average >= 50) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    document.getElementById("total").innerHTML = total;
    document.getElementById("average").innerHTML = average.toFixed(2) + "%";
    document.getElementById("grade").innerHTML = grade;
    document.getElementById("result").innerHTML = result;
}
