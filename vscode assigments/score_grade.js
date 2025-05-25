function assignedScore(score) {
    // Determine the grade based on the score
    var grade;

    if (score >= 90) {
        grade = "A";
    }
    else if (score >= 80) {
        grade = "B";
    }
    else if (score >= 70) {
        grade = "C";
    }
    else if (score >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    // Display the result
    alert("WOW! You scored an " + grade);
    
}



//Get user score    
 
var score = parseInt(prompt("Enter your score (0-100):"));
// Validate input
if (score === null || score === "" || isNaN(score) || score < 0 || score > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
}
else {
    assignedScore(score);
}

