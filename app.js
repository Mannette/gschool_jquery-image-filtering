$(document).ready(function() {
  var container = $(".image-container");
  addCabin("http://www.tranquilacrescabins.com/images/cabins/tulip_poplar_log_cabin2.jpg", "10000").appendTo(container);
  addCabin("http://vignette1.wikia.nocookie.net/batman/images/a/a9/Wayne_Manor_2.jpg/revision/latest?cb=20120801235608", "420000000000").appendTo(container);
  addCabin("http://static1.squarespace.com/static/53cff745e4b086bb2fc69073/545d1c2ce4b03a44d112e9cb/552886c9e4b0719b1e01c186/1428719306432/Lukowski_Alice_MadHatterHouse_01_900.jpg?format=1000w", "1").appendTo(container);

$('.dark').on("click", function(){
  $('body').css({"background-image": "url(img/dark_wood.png)"});
});

$('.light').on("click", function(){
  $('body').css({"background-image": "url(img/tileable_wood_texture.png)"});
});

$('<span>').addClass("forest").css({"background-image":"url(img/forest.jpg)"}).appendTo($('.textures')).on("click",function(){
  $('body').css({"background-size":"cover","background-image": "url(img/forest.jpg)"});

  $(".low").on("click", function(){
    $(".image-container").html($(".home").sort(function(a, b){
      return $(a).attr('data-price') - $(b).attr('data-price');
    }));
  });
});

$('.low').on('click',function(){

});
});


function addCabin(url, price) {
  var house = $("<article>").attr({"class": "home", "data-price": price});
  $("<img>").attr({"src": url, "height": "150px", "width": "150px"}).appendTo(house);
  $("<h4>").html(price).appendTo(house);
  return house;
}
function parseSort(array) {
  var homeArray = $('.home');
  var prices = [];

  for (var i = 0; i < homeArray.length; i++) {
    prices.push(parseInt($(homeArray[i]).attr("data-price")));
  }
  
  return prices.sort(function(a, b){return a - b;});
}
parseSort();

