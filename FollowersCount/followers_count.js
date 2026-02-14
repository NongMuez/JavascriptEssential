let count = 0;

function increaseCount() {
    count++;
    displayCount();
    congratulateMilestone();
}

function displayCount() {
    document.getElementById('countDisplay').innerText = count;
}

function congratulateMilestone() {
    if (count === 10) {
        alert("Congratulations! You've reached a milestone of 10 followers!");
    } else if (count === 50) {
        alert("Amazing! You've reached a milestone of 50 followers!");
    } else if (count === 100) {
        alert("Incredible! You've reached a milestone of 100 followers!");
    } else if (count === 0) {
        alert("Your followers count has been reset. Keep going to reach new milestones!");
    }
}

function resetCount() {
    count = 0;
    displayCount();
    congratulateMilestone();
}