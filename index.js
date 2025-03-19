function myFunction() {
    let marks = document.getElementById("Subject").value;
    
    marks = parseFloat(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("result").innerText = "Please enter valid marks between 0 and 100.";
        return;
    }
    
    let grade;
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    
    document.getElementById("result").innerText = `Your grade is: ${grade}`;
}