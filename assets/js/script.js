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

$("#9 .text-value").val(localStorage.getItem("9"))
$("#10 .text-value").val(localStorage.getItem("10"))
$("#11 .text-value").val(localStorage.getItem("11"))
$("#12 .text-value").val(localStorage.getItem("12"))
$("#13 .text-value").val(localStorage.getItem("13"))
$("#14 .text-value").val(localStorage.getItem("14"))
$("#15 .text-value").val(localStorage.getItem("15"))
$("#16 .text-value").val(localStorage.getItem("16"))
$("#17 .text-value").val(localStorage.getItem("17"))



function cssupdate (){
    var currentTime = moment().hours()
    console.log(currentTime)
    $(".border").each(function(){
    var divNumber=$(this).attr("id")
    if (divNumber<currentTime){
        $(this).addClass("past")
    }
    else if(divNumber==currentTime){
        $(this).addClass('present')
    }
    else if(divNumber>currentTime){
        $(this).addClass('future')
    }
    })
}
cssupdate()