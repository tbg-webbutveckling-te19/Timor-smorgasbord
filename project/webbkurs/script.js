document.addEventListener("DOMContentLoaded", function() {
    EventHandlers.initialize()

    DocumentEdit.logMessage()


})

var DocumentEdit = (function() {
    function logMessage() {
        console.log("Hello there")

        console.log("Hello again")
    }

    return {
        logMessage
    }
})()

var EventHandlers = (function() {
    function initialize() {
        var clickMeBtn = document.getElementById("click-me-btn")
        clickMeBtn.addEventListener("click", onClickClickMeBtn)

        var startCountDownBtn = document.getElementById("start-countdown")
        startCountDownBtn.addEventListener("click", startCountDown )
    }

    function onClickClickMeBtn() {
        var inputTextarea = document.getElementById("input-textarea")
        var editText = document.getElementById("edit-text");

        editText.innerText = inputTextarea.value
    }

    function startCountDown(){
        var Countdown = 10

        var interval = setInterval(function() {
            var countdownParagraph = document.getElementById("Countdown")
            countdownParagraph.innerText = Countdown


            if(Countdown == 0) {
                clearInterval(interval)
            }

            Countdown = Countdown - 1
        }, 1000)
    }


    return {
        initialize
    }
})()