$(".myButton").click(function(){
    var value = this.innerHTML;
    $("h1").text(value + " is clicked.").addClass("style1");
});