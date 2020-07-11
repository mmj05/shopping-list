$(function(){
    $("#js-shopping-list-form").submit (function(event) {
    event.preventDefault();
    $("ul").append('<li><span class="shopping-item"></span><div "shopping-item-controls"><button class="shopping-item-toggle"><spanclass="button-label">check</span></button class="shopping-item-delete"><button><span class="button-label">delete</span></button></div></li>');
    var shoppingItem = $("#js-shopping-list-form input").val();

    $("ul li .shopping-item").last().text(shoppingItem);

    $(".shopping-list").on("click", ".shopping-item-delete", ( function(event) {
        console.log(event);
        console.log("hello");
        console.log(event.currentTarget);
        $(this).closest("li").remove();
    
    }))
    

  
})

$(".shopping-list").on("click", ".shopping-item-toggle", ( function(event) {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");

}))



})

