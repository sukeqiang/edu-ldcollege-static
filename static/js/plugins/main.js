var timer_file_list;
$(document).ready(function(){
    $('.scroll-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
//    $('.js_api_signup_form .js_api_signup').click(function(){
//        $('.js_signup_loading').show();
//        var data = new Object();
//        data['action'] = 'signup';
//        data['login'] = $('.js_api_signup_form [name=login]').val();
//        data['password'] = $('.js_api_signup_form [name=password]').val();
//        send('/ajax/signup', data, function(){
//            $('.js_signup_loading').hide();
//        });
//    });
//    $('.js_api_signin_form .js_api_signin').click(function(){
//        var data = new Object();
////        data['action'] ="/signin";
////        data['login'] = $('.js_api_signin_form [name=login]').val();
////        data['password'] = $('.js_api_signin_form [name=password]').val();
//        var params = $("#comment_form").serialize();
//        send('/signin', params, function(){
//           
//        });
//    });
    $('.js_api_logout').click(function(){
        var data = new Object();
        data['action'] = 'logout';
        send('/ajax/logout', data, function(){
            
        });
    });
    $('#alerts').click(function(){
        $('.js-alert-msg').fadeOut(200);
    });
    $('.js_send_mail_confirm').click(function(){
        var data = new Object();
        send('/ajax/mail_confirm_send', data, function(){
            
        });
    });
    
//    $.getJSON("/getLdclass", function(data) {
//    	var selectObj = $("#selectpicker");
//    	selectObj.find("option").remove();
//    	selectObj.append();
//    	$.each(data, function() {
//    		
//    	})
//    });
});
function delete_file_check(file_id){
    if(confirm("Are you sure?")){
        var data = new Object();
        data['file_id'] = file_id;
        send('/ajax/delete_file_check', data, function(){
            $('[data-file-check-id='+file_id+']').hide();
        });
    }
}


function send(url, params, callback){

//	$.ajax({
//        type: "post",
//        url: url,
//        data: params,
//        success: function(data) {
//            if(data.is_reload_page != null){
//                location.reload(); 
//            }
//            if(data.new_location != null && data.new_location.length > 0){
//                location = data.new_location;
//            }
//            if(data.msgs != null){
//                $.each(data.msgs, function(k, v) {
//                    show_msg(v.body, v.type);
//                });
//            }
//            callback(data);
//        }
//    });
}

//type 1-ok, 2-warning, 3-error
function show_msg(title, type, time){
    $(document).ready(function(){
        class_name = 'alert-success';
        if(type == '1'){
            class_name = 'alert-success';
        }
        if(type == '2'){
            class_name = 'alert-warning';
        }
        if(type == '3'){
            class_name = 'alert-danger';
        }
        alarm = '<div class="b-left alert '+class_name+' js-alert-msg">'+title+'<img src="/img/svg/close_alert.svg" title="" alt="close" data-toggle="tooltip" data-placement="top" title="" class="js-close-alert close animate" data-dismiss="alert" data-original-title="Close">';
        $('#alerts').append(alarm);
        $('.alerts').append(alarm);
    });
}

//----MAIN PAGE ANIMATION
$(window).load(function(){
    setTimeout(function(){
        $('.animate-el1').animate({
            bottom: '0',
        }, {
            duration: 500,
            specialEasing: "ease-out"
        });
        $('.animate-el2').animate({
            bottom: '0',
        }, {
            duration: 500,
            specialEasing: "ease-out"
        });
    }, 0);
});

$(document).ready(function(){
//----LOGIN ANIMATION   
    $(".js_signup").animate({marginTop:'5%'}, 0);
    $(".js_signup").animate({marginTop:'8%'}, 500, 'easeOutQuad'); 
//----VALIDATION   
  $(function() {
    $(".form-block, .js-form-block").find("input,textarea,select").jqBootstrapValidation({
        submitError: function($form, event, errors) {
            $('.form-block').removeClass('form-block-error');
            $('.form-block').addClass('form-block-error');  
        },
    });
    $('input').focus(function(){
       $('.form-block').removeClass('form-block-error'); 
    });
    $('.js_form_long_preloader').submit(function(){
        $('.js_signup_before_loading_icon').hide();
        $('.js_signup_loading').show();
        //return false;
    });
});
//----TOOLTIP
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

//----SCROLL FEATURES 
    function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: (aTag.offset().top - 65)}, 1000);
    }
    $('.link1').click(function() {
       scrollToAnchor('id10');
       return false;
    });
    $('.link2').click(function() {
       scrollToAnchor('id9');
       return false;
    });
//----CUSTOM SELECT 
$('.custom-select').selectpicker();
//----POPUP WINDOW
$('.js-popup-init').click(function(){
        $('.js-window, .js-login-window').fadeIn(200);
    });
    $('.p-window').animate({ "margin-top": "8%" }, 500, 'easeInQuart');    
    $('.js-window-close, .js-close-login').click(function(){
        //$('.p-window').animate({ "margin-top": "-20%" }, 400, 'easeInQuart');
        $('.js-window').delay(0).fadeOut(100);
    });

//PRELOADER SHOWER ON SAVE
    $('.js-preloader').click(function(){
    	$('.progress-indicator').show().delay(400).fadeOut(500);
    });
});