//variables

let countHome = 0
let countGuest = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")



// Home Score
function homeBtn1() {
    countHome = countHome + 1
    homeScore.textContent = countHome
}
function homeBtn2() {
    countHome = countHome + 2
    homeScore.textContent = countHome
}
function homeBtn3() {
    countHome = countHome + 3
    homeScore.textContent = countHome
}

// Guest Score
function guestBtn1() {
    countGuest = countGuest + 1
    guestScore.textContent = countGuest
}
function guestBtn2() {
    countGuest = countGuest + 2
    guestScore.textContent = countGuest
}
function guestBtn3() {
    countGuest = countGuest + 3
    guestScore.textContent = countGuest
}
