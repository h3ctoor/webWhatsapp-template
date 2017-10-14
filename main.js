$(function() {

  $("#mesajInput").focus();
  var objDiv = document.getElementById("mesajlar");

  $('#mesajlar').animate({ 
  scrollTop: objDiv.scrollHeight 
  }, 1500); 
    
   $("button").on("click",function(){

    var mesaj = $("#mesajInput").val();
    var tarih = new Date();
    var dk = tarih.getMinutes();
    var saat = tarih.getHours();
    var zaman = saat + ":" + dk;

    $("#mesaj").append('<li class="benimGonderdigim" data-tarih="'+zaman+'" >'+mesaj+'</li>');

    $("#mesajInput").val("");

    objDiv.scrollTop = objDiv.scrollHeight;
    return false;

   });

});