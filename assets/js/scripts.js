jQuery(function() {
    initCarouselUnidadNegocio();
    initCarouselPromociones();
    initCarouselVideos();
    initCarouselUltimasNoticias();
    initCarouselLogo();
    initCarouselRecomendaciones();
    initCarouselRelacionados();
    initCarouselGenericoNavImg();
    initCarouselNosotros();   
});
/*Inicia lightgallery promociones*/ 
for (var i = 1; i < 5; i++){
  lightGallery(
     document.getElementById('item-promo-'+i)     
  );       
};
/*Inicia lightgallery videos*/ 
for (var i = 1; i < 5; i++){
  lightGallery(
     document.getElementById('video-gallery-'+i)     
  );       
};
function initCarouselRecomendaciones(){
    "use strict";  
  $('.carousel-recomendaciones').slick({  
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,    
    infinite: true,
    adaptiveHeight: false,
    touchMove:true,
    centerPadding: '0px',

  });
}
function initCarouselUnidadNegocio(){
  "use strict";    
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav', 
    centerPadding: '0px',
    autoplay: false,
    touchMove:true   
  });
  $('.slider-nav').slick({
    vertical:true,
    slidesPerRow:1,
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    rows:2,
    autoplay: false,
    focusOnSelect: true
  });
}
function initCarouselPromociones(){
  "use strict";  
  $('.carousel-promociones').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    variableWidth: true,
    infinite: true,
    adaptiveHeight: false,
    touchMove:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          variableWidth: true,
          infinite: true,
          touchMove:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots:false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          infinite: true,
          autoplay: true,         
          speed: 6000,
          touchMove:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          arrows: false,
          speed: 5000,
          mobileFirst:true,
          centerPadding: '0px',
          touchMove:true,
        }
      }
    ]
  });
}
function initCarouselVideos(){
  "use strict";    
  $('.carousel-videos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      arrows: false,
      speed: 6000,	
      adaptiveHeight: false,
      touchMove:true,
      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          }

        ]
  });
}
function initCarouselUltimasNoticias(){
  "use strict";    
  $('.carousel-ultimas-noticias').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      arrows: true,
      speed: 6000,	
      touchMove:true,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,              
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: true,
              speed: 6000,
              touchMove:true,	
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          }

        ]
  });
}
function initCarouselLogo(){
  "use strict";    
  $('.carousel-franquicias').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      autoplay: true,
      arrows: false,
      speed: 4000,
      touchMove:true,	
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 4000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 4000,
              touchMove:true,	
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true,
              arrows: false,
              speed: 4000,
              touchMove:true,	
            }
          }

        ]
  });
}
function initCarouselRelacionados(){
  "use strict";    
  $('.carousel-Relacionados').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      autoplay: true,
      arrows: true,
      speed: 6000,
      touchMove:true,	
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,              
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,	
              touchMove:true,
            }
          },
          {
            breakpoint: 567,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
              arrows: false,
              speed: 6000,
              touchMove:true,	
            }
          }

        ]
  });
}
function initCarouselGenericoNavImg(){
  "use strict";    
  $('.slider-for2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-nav2',
    mobileFirst:true,
    touchMove:true,	
    infinite: true,
    dots: false,
    speed: 6000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          asNavFor: '.slider-nav2',
          mobileFirst:true,
          speed: 6000,
          touchMove:true,	
          infinite: true,
          dots: false,
          autoplay: true,
        }
      }

    ]
  });
  $('.slider-nav2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for2',
    dots: false,
    centerMode: true,
    mobileFirst:true,
    centerPadding: '25px',
    touchMove:true,	
    speed: 6000,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slider-for2',
          dots: false,
          centerMode: true,
          mobileFirst:true,
          centerPadding: '24px',
          arrows: false,
          touchMove:true,	
          speed: 6000,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          asNavFor: '.slider-for2',
          dots: false,
          centerMode: false,
          mobileFirst:true,
          centerPadding: '10px',
          arrows: false,
          touchMove:true,	
          infinite: true,
        },
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.slider-for2',
          dots: false,
          mobileFirst:true,
          centerPadding: '20px',
          arrows: false,
          touchMove:true,	
          infinite: true,
        }

      }
    ]
  });
}
function initCarouselNosotros(){
  "use strict";  
  $('.nosotros-for').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: true,
    variableWidth: true,
    infinite: true,
    adaptiveHeight: false,
    touchMove:true,
    asNavFor: '.nosotros-nav',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 8000,
          variableWidth: true,
          infinite: true,
          touchMove:true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          arrows: true,
          dots:false,
          slidesToShow: 3,
          slidesToScroll: 1,          
          centerPadding: '0px',
          infinite: true,
          autoplay: true,         
          speed: 8000,
          mobileFirst:true,
          touchMove:true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          arrows: true,
          speed: 8000,
          mobileFirst:true,
          centerPadding: '10px',
          touchMove:true,          
        }
      }
    ]
  });
  $('.nosotros-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.nosotros-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    mobileFirst:true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.nosotros-for',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          mobileFirst:true,
          centerPadding: '0px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.nosotros-for',
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          mobileFirst:true,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.nosotros-for',
          dots: true,
          centerMode: false,
          focusOnSelect: false,
          mobileFirst:true,
          centerPadding: '20px'
        }
      }
    ]
  });
}

/*Carga de archivo*/
function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
 
    reader.onload = function(e) {
      var htmlPreview =        
        '<p>' + input.files[0].name + '</p>';
      var wrapperZone = $(input).parent();
      var previewZone = $(input).parent().parent().find('.publinet-zone');
      var boxZone = $(input).parent().parent().find('.publinet-zone').find('.box').find('.box-body'); 
      wrapperZone.removeClass('dragover');
      previewZone.removeClass('hidden');
      boxZone.empty();
      boxZone.append(htmlPreview);    
    }; 
    reader.readAsDataURL(input.files[0]);
  }
} 
function reset(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
} 
$(".dropzone").change(function() {
  readFile(this);
});
$('.dropzone-wrapper').on('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('dragover');
});
$('.dropzone-wrapper').on('dragleave', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass('dragover');
});
$('.remove-preview').on('click', function() {
  var boxZone = $(this).parents('.publinet-zone').find('.box-body');
  var previewZone = $(this).parents('.publinet-zone');
  var dropzone = $(this).parents('.form-group').find('.dropzone');
  boxZone.empty();
  previewZone.addClass('hidden');
  reset(dropzone);
});


/*Cambiar franja*/

if (document.querySelector(".slick-current .rojo")) {  
  var f_rojo = document.getElementsByClassName('f-rojo');
  f_rojo.style.display = 'block';
} 
if (document.querySelector(".slick-current .azul")) {
  var f_azul = document.getElementsByClassName('f-azul');
  f_azul.style.display = 'block';
} 


