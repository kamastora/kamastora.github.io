"use strict"; // Start of use strict
$("body").on('click','.btndownloadaction',function (e) {
            var email = $("#email").val();
            var name = $("#name").val();
            var company_name = $("#company_name").val();
            var website = $("#website").val();
            var token = $("input[name='_token']").val();
            var url = $(this).attr("data-url");
            if(email != ""){
            var fd = new FormData();
            fd.append('email',email);
            fd.append('name',name);
            fd.append('company_name',company_name);
            fd.append('website',website);
            fd.append('_token',token);
            fd.append('token',token);
            $.ajax({
                url: url,
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function(response){
                    if(response != 0){
                      $(".form_errors").text("");
                            $("#exampleModal").modal('show');
                      
                    
                    }else{
                        
                            $(".form_errors").text("Email Required");
                     
                      
                    }
                },error: function(response){
               
                        $(".form_errors").text("Error Occurs in Sending form").css("color","red").css("font-weight","bold");
                 
              
                },
            });
        }else{
                $(".form_errors").text("Email Required").css("color","red").css("font-weight","bold");
      
           
        }
    });

$("body").on('click','.subscribe_footer_btn2',function (e) {
    
            var email = $("#subscribeEmail").val();
            var token = $("input[name='_token']").val();
            var url = $(this).attr("data-url");
            if(email != ""){
            var fd = new FormData();
            fd.append('email',email);
            fd.append('_token',token);
            fd.append('token',token);
            $.ajax({
                url: url,
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function(response){
                    if(response != 0){
                      $("#subscribeEmail").val("");
                            $(".subscribe_footer_btn2").text("Subscribe Successfully").prop('disabled',true);
                      
                    
                    }else{
                        $("#subscribeEmail").val("");
                            $(".subscribe_footer_btn2").text("Email Required");
                     
                      
                    }
                },error: function(response){
               
                        $(".result_msg_subscribe").text("Error Occurs in Subscribe").css("color","red").css("font-weight","bold");
                 
              
                },
            });
        }else{
                $(".result_msg_subscribe").text("Email Required").css("color","red").css("font-weight","bold");
      
           
        }
    });

$("body").on('click','.subscribe_footer_btn',function (e) {
    
            var email = $("#email_subscribe").val();
            var token = $("input[name='_token']").val();
            var url = $(this).attr("data-url");
            if(email != ""){
            var fd = new FormData();
            fd.append('email',email);
            fd.append('_token',token);
            fd.append('token',token);
            $.ajax({
                url: url,
                type: 'post',
                data: fd,
                contentType: false,
                processData: false,
                success: function(response){
                    if(response != 0){
                      
                            $(".result_msg_subscribe").text("Subscribe Successfully").css("color","green").css("font-weight","bold");
                      
                    
                    }else{
                        
                            $(".result_msg_subscribe").text("Email Required").css("color","red").css("font-weight","bold");
                     
                      
                    }
                },error: function(response){
               
                        $(".result_msg_subscribe").text("Error Occurs in Subscribe").css("color","red").css("font-weight","bold");
                 
              
                },
            });
        }else{
                $(".result_msg_subscribe").text("Email Required").css("color","red").css("font-weight","bold");
      
           
        }
    });

function sliderTestimonials() {
    $('.testimonials_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="public/frontend/images/icons/left-arrow.svg" /></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="public/frontend/images/icons/right-arrow.svg" /></button>',
        // responsive: [{
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });
var width = $(window).width();
console.log(width);
if(width >= 768){
    $('.legalServicesSlider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.wide-services-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}else{
    $('.legalServicesSlider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    $('.wide-services-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
}

}

function changeImgOnHover() {
    $('.legalServiceItem').mouseenter(function () {
        let name = $(this).find('.render_img').data('title');
        $(this).find('.render_img').attr('src', `public/frontend/images/icons/${name}_w.svg`)
    })

    $('.legalServiceItem').mouseleave(function () {
        let name = $(this).find('.render_img').data('title');
        $(this).find('.render_img').attr('src', `public/frontend/images/icons/${name}.svg`)
    })
}

function changeImgPerson() {
    $('.teamImg').mouseenter(function () {
        let name = $(this).find('.render_img').data('user');
        $(this).find('.render_img').attr('src', `public/frontend/images/users/${name}_other.png`)
    })

    $('.teamImg').mouseleave(function () {
        let name = $(this).find('.render_img').data('user');
        $(this).find('.render_img').attr('src', `public/frontend/images/users/${name}.png`)
    })
}

function changeLang(e) {
    if (!window.location.pathname.includes('-ar')) {
        let pathname = window.location.pathname;

        let file = location.pathname.split('/');
        console.log(file[file.length - 1])
        if (file[file.length - 1] === '/' || file[file.length - 1] === '' || file[file.length - 1] === 'index.html') {
            location.replace('index-ar.html');
        } else {
            if (file[file.length - 1].includes('.html')) {
                let path = file[file.length - 1].split('.html')[0];
                console.log({path})
                location.replace(path + '-ar.html')
            } else {
                location.replace(file[file.length - 1] + '-ar.html')
            }
        }
    }
}


function initAOS() {
    AOS.init();
}

jQuery(document).on('ready', function () {
    (function ($) {
        sliderTestimonials();
        changeImgOnHover();
        changeImgPerson();
    })(jQuery);

});