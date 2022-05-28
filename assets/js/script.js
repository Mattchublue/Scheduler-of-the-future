// to update time on the webpage
function updateTime() {
    let today = moment();

$("#currentDay").text(today.format("MMMM Do YYYY"))
};
updateTime()

$(".save-icon").on("click",function(){
    let textValue = $(this).siblings(".text-value").val()
    let divNumber = $(this).parent().attr("id")
    localStorage.setItem(divNumber,textValue)
})