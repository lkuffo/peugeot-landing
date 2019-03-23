$(document).ready(function(){
  $(".pg-see-less").hide();
  $(".pg-dimmed-glass").hide();
  $(".pg-footer-links").hide();
  $(".pg-carrusel").hide()

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
    $(".pg-carrusel").hide();
    $(this).hide()
  })

  $(".pg-show-carrusel").click(function(){
    $(".pg-see-less").show();
    $(".pg-dimmed-glass").show();
    $(".pg-carrusel").show();
    $('.slick-dots .slick-active button').click();
    $(this).removeClass("infinite");
    initCarrusel();
  })

  $("#pg-submit-btn").click(function(){
    gtag('event', 'GeneracionLeadsLanding', {
      'event_category': 'mensaje',
      'event_action': 'enviado',
      'event_label': 'Label',
      'value': 'Value'
    });
  })
})

function getDeferrer(){
  var url_string = window.location.href;
  console.log(url_string);
  var url = new URL(url_string);
  var deferrer = url.searchParams.get("from");
  $("#deferrerField").val(deferrer)
}

function initCarrusel(){
  $('.pg-carrusel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    variableWidth: true,
    // centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 3
    // autoplay: true,
    // autoplaySpeed: 5000,
    // fade: true,
    // cssEase: 'linear'
  });
}
