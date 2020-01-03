
// we need to use on() method because of the dynamic li
// when an li is clicked inside of an ul run this code
$("ul").on ('click', 'li', (function() {
  $(this).toggleClass("completed");
}));

// click on X to delete a todo
$("ul").on ('click', 'span', (function(event) {
  // to remove X
  $(this).parent().fadeOut(500,function(){
      //'this' represents li here
      $(this).remove();
  });

  // to prevent event bubbling
  event.stopPropagation();
}));
$("input[type='text']").keypress(function(event){
    // 13 represents the enter key
    if(event.which===13){
        // grabbing text from input box
        var todoText = $('input').val();
        // remove the text from the input box with empty string
        $(this).val('')
        // create a new li and add text to ul
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span>' + ' ' + todoText + '</li>')

    }
})
$(".fa-plus").click(function(){
  $('input').fadeToggle(100)
})

//if the color is red, we have to use rgb format
/* if ($(this).css("color") === "rgb(255, 0, 0)") {
    // turn it black
    $(this).css({
        color: "black",
        textDecoration: "none"
      });
  } else
    $(this).css({
      color: "rgb(255, 0, 0)",
      textDecoration: "line-through"
    });
}); */
