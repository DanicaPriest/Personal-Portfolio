
$('document').ready(function(){
  var hide = true; $('#viewMore').click(function(){
    if(hide){
    $('#viewMore').html('View Less');
    hide= false;}
    else{$('#viewMore').html('View More'); hide= true;}
    $('#extraP').toggleClass('hidden')
  })
  
})