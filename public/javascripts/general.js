$(document).ready(function(){
  $(".pg-see-less").hide();
  $(".pg-dimmed-glass").hide();
  $(".pg-footer-links").hide();

  $(".pg-see-more").click(function(){
    $(".pg-see-less").show();
    $(".pg-dimmed-glass").show();
    $(".pg-footer-links").show();
    $(this).hide()
  })

  $(".pg-see-less").click(function(){
    $(".pg-see-more").show();
    $(".pg-dimmed-glass").hide();
    $(".pg-footer-links").hide();
    $(this).hide()
  })
})

function getDeferrer(){
  var url_string = window.location.href;
  console.log(url_string);
  var url = new URL(url_string);
  var deferrer = url.searchParams.get("from");
  $("#deferrerField").val(deferrer)
}
