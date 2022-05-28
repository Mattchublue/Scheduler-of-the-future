// to update time on the webpage
function updateTime() {
    let today = moment();

$("#currentDay").text(today.format("MMMM Do YYYY"))
};
updateTime()