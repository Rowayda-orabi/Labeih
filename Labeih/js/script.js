$.noConflict();
jQuery(document).ready(function ($) {
    
    //old-login page -------------------------------------
    $('.content .none').addClass('d-none');
    
    $('.loginbuttons button').click(function(){
        $(this).addClass('myactive').siblings().removeClass('myactive');
    });
    
    //login-content
    //نسيت كلمة السر
    $('.login-content .forget').click(function(){
        $(this).parents('.content').contents().filter('.forgoten-content')
        .addClass('d-block').siblings('div').removeClass('d-block').addClass('d-none');
    });
    
    //forgoten-content
    //ارسال 
    $('.forgoten-content .send').click(function(){
        $(this).parent().parent().contents().filter('.verify-content')
        .addClass('d-block').siblings('div').removeClass('d-block').addClass('d-none');
    });
    //رجوع
    $('.forgoten-content .return').click(function(){
        $(this).parent().parent().contents().filter('.login-content')
        .addClass('d-block').siblings('div').removeClass('d-block').addClass('d-none');
    });

    //verify-content
    //رجوع
    $('.verify-content .back').click(function(){
        $(this).parent().parent().contents().filter('.forgoten-content')
        .addClass('d-block').siblings('div').removeClass('d-block').addClass('d-none');
    });
    //ارسال
    $('.verify-content .enter').click(function(){
        $(this).parent().parent().contents().filter('.newPassword')
        .addClass('d-block').siblings('div').removeClass('d-block').addClass('d-none');
    });
    
    //newPassword
    $('.newPassword .unsure').click(function(){
        $(this).parent().parent().contents().filter('.verify-content')
        .addClass('d-block').siblings('div').removeClass('d-block').addClass('d-none');
    });
    

    //validate the form
    $.validate({
        modules: 'security'
    });
    
    $('input[type=file]').css('display', 'none');
    
    //preview images
        function readURL(input,pic) {
        
        var reader = new FileReader();

        reader.onload = function(e) {
          $("#"+pic).attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
        }

        $('input[type=file]').change(function() {
            var photo =$(this).siblings().children('.img').attr('id');
            readURL(this,photo);
        });
   

    //general   -------------------------------------------------------------- 
    $('.toActivities').css('cursor', 'pointer').click(function () {
        $(this).attr('href','profile-page.html#nav-myActvities');
    });
    
    $('.navbar-brand').css('cursor', 'pointer').click(function () {
        $(this).attr('href','index.html');
    });
    
    
    
    //pagination ----------------------------------------------------------------
    //hide pages till the current  
    //$('.current-page:gt(0)').hide();
    $('.current-page').not(':first-child').hide();
   
    //active pagination  1/2/3 buttons
    $('.pagination li.page-item').on('click', function () {
        if ($(this).hasClass('active')) {
            return false;
        } else {
            var current = $(this).index();
            $(this).addClass('active').siblings('.page-item').removeClass('active');
            $('.current-page').hide();
            for (var i = current - 1; i < current; i++) {
                //$('.current-page:eq('+i+')').show();
                $('.current-page').parent().find('.current-page:eq(' + i + ')').show();
            }

        }

    });

    //activate next button   
    
    var currentPage = $('.pagination li.active').index();
    function paginationFunction (){
        $('.pagination li.page-item').removeClass('active');
        $('.current-page').hide();
        for (var i = currentPage - 1; i < currentPage; i++) {
            $('.current-page').parent().find('.current-page:eq(' + i + ')').show();
            $('.pagination li.page-item:eq(' + (currentPage) + ')').addClass('active');
        };
    };
    
    function activePagination (){
        $('.current-page').eq(currentPage -1).show();
        $('.pagination li.page-item:eq(' + (currentPage) + ')').addClass('active').siblings().removeClass('active');
            
    };
    
    $('.next').on('click', function () {
            if (currentPage === 3) {
                currentPage =1;
                activePagination();
                }
            else{
                currentPage++; 
                paginationFunction();
            }
        
    });
    
     //activate prev button
    $('.prev').on('click', function () {
            if (currentPage === 1) {
                currentPage =3;
                activePagination();
            }
            else{
                currentPage--;
                paginationFunction();
            }
        
    });
    
    
    
    
    //index page --------------------------------------------------
    //towns section

    $('.towns .towns-content i').css('cursor', 'pointer').click(function () {
        $(this).css('color', '#ab0001');
    });
    //direction section
    $('.direction .col-md-4 a').css('cursor', 'pointer').click(function () {
        $(this).attr('href', 'Restaurants.html');
    });
    // places content
    $('.places .places-content span i.fa-heart').css('cursor', 'pointer').click(function () {
        $(this).css('color', '#ab0001');
    });
    
    // places content show & hiden slide part
    $('.places-content').hover(function(){
       $(this).parent().find('.hide-cont').css('display', 'block');
       $(this).find('.stars').css('display', 'none');
    },function(){
       $(this).parent().find('.hide-cont').css('display', 'none');
       $(this).find('.stars').css('display', 'block');
    });
    
    //modal owl carousal in any page
    $('.modal-body .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        rtl: true,
        dots: 0,
        loop: true,
        
    });
    
    
    //owl carusal
    $('.owl-carousel').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: 0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    
    
    



    





    // in search result page------& restaurant page------------------------------------------------
    // from header or content or imge to shop page
    //from any tag with class toRestPage to shop page
    $('a.toRestPage').css('cursor', 'pointer').click(function () {
        $(this).attr('href', 'shop.html')
    });

    //image slider 
    var imageIndex1 = 1;
    var imageIndex2 = 1;
    var imageIndex3 = 1;
    $('.slider-images .nextElement').css('cursor', 'pointer').click(function () {

        //to know click occure in which row
        var clicked = $(this).parent().parent().parent().parent().index();
        //to assign index to image depending on row index
        switch (clicked) {
            case 0: {
                var imageObject = $('.res-img')[0];
                imageIndex1++;
                if (imageIndex1 == 4) {
                    imageIndex1 = 1;
                }
                imageObject.src = "images/yalpeeh/" + imageIndex1 + ".png";
                break;
            }
            case 1: {
                var imageObject = $('.res-img')[1];
                imageIndex2++;
                if (imageIndex2 == 4) {
                    imageIndex2 = 1;
                }
                imageObject.src = "images/yalpeeh/" + imageIndex2 + ".png";
                break;
            }
            case 2: {
                var imageObject = $('.res-img')[2];
                imageIndex3++;
                if (imageIndex3 == 4) {
                    imageIndex3 = 1;
                }
                imageObject.src = "images/yalpeeh/" + imageIndex3 + ".png";
                break;
            }
        }
        

    });

    $('.slider-images .prevElement').css('cursor', 'pointer').click(function () {
        var clicked = $(this).parent().parent().parent().parent().index();
        
        switch (clicked) {
            case 0: {
                var imageObject = $('.res-img')[0];
                imageIndex1--;
                if (imageIndex1 == 0) {
                    imageIndex1 = 3;
                }
                imageObject.src = "images/yalpeeh/" + imageIndex1 + ".png";
                break
            }
            case 1: {
                var imageObject = $('.res-img')[1];
                imageIndex2--;
                if (imageIndex2 == 0) {
                    imageIndex2 = 3;
                }
                imageObject.src = "images/yalpeeh/" + imageIndex2 + ".png";
                break
            }
            case 2: {
                var imageObject = $('.res-img')[2];
                imageIndex3--;
                if (imageIndex3 == 0) {
                    imageIndex3 = 3;
                }
                imageObject.src = "images/yalpeeh/" + imageIndex3 + ".png";
                break
            }
        }
        

    });

    //الجزء ده موجود في اغلب الصفحات
    //من كل جزء فيه تقييمات يقدر يروح لصفحة التقييمات
    $('.rates').css('cursor', 'pointer').click(function () {
        $(this).attr('href', 'shop-rates.html');
    });


    //shop page ---------------------------------------------------------------
    // لاظهار واخفاء وصف الصوره

    $('.hidden-discrip').hide();
    $('.food').hover(function () {
        $(this).find('.hidden-discrip').fadeIn('2');

    }, function () {
        $(this).find('.hidden-discrip').fadeOut('2');
    });

    //from edit link to edit product page
    $('.edit-post').css('cursor', 'pointer').click(function () {
        $(this).attr('href', 'edit-product.html');
    });
    //delete the element
    $('.delete').css('cursor', 'pointer').click(function () {
        $(this).parents('.food').css('display', 'none');
    });
    //from love mark to favourit page
    $('.toFavouritsPage').css('cursor' , 'pointer').click(function(){
        $(this).attr('href','profile-page.html#nav-myFavourits');
    });
     
    //duplicated questions---------------------------------------------------
    //card -----
    $('.card-content div').click(function () {
        var paragraph = $(this).find('.title').next().is('.show');
        if (paragraph == false) {
            $(this).find('.title i').removeClass('fa-plus').addClass('fa-minus'); //to add minus mark
            $(this).find('.title').addClass('title-p') // border color
        } else {
            $(this).find('.title i').removeClass('fa-minus').addClass('fa-plus');
            $(this).find('.title').removeClass('title-p');
        }

    });


    //notification page    --------------------------------------------------------------   
    //to close any notification
    $('.notice').css('cursor', 'pointer').click(function () {
        $(this).parents('.row').fadeOut();
    });
    

    
    //profile page    -------------------------------------------------------------- 
    //to close any favourit on the right side
    $('.close-fav').css('cursor', 'pointer').click(function () {
        $(this).parents('.aside-favourit').fadeOut();
    });

    //tabs in right section
    
    // Javascript to enable link to tab
    $('.nav-tabs a.active').css('background','#fcfcfc');
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
    };
    // Change hash for page-reload
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    });
    
     //responsive profile tab
    var right=$('.right-content').css('display');
    if(right=="none"){
        $('.responsive-menu button').css('display','block');
        $('.right-content .nav-tabs').appendTo('.taaabs');
        $('.responsive-menu button').click(function(){
            $('.taaabs').toggle();
        });
    }
    
    //hide & show pagination bar
    $('.page-navigtion').addClass('d-block');
    $('.profile-content .nav-tabs a').click(function(){
        var icon=$(this).find('i').attr('class').split(" ")[1];
        if(icon=='fa-eye'||icon=='fa-calendar-alt'||icon=='fa-star'){
            $('.page-navigtion').addClass('d-none').removeClass('d-block');
        }else{
            $('.page-navigtion').addClass('d-block').removeClass('d-none');
            
        }
    });
    
    //Reservation-page -------------------------------
    //ابحث عن طاوله 
    $('.search-table').click(function(){
        $('.choose-buttons').fadeIn();
        $(this).parent().fadeOut();
    });
    
    // to resrvation form page
    $('.choose-button').click(function(){
        $('.reserve-form').fadeIn();
        $(this).parent().parent().fadeOut();
        $('.Reservation-header').css('background','#eef3ff');
        $('.editToSearchTable').fadeIn();
    });
    
    //edit link => to Search Table
    $('.editToSearchTable').css('cursor', 'pointer').click(function () {
        $(this).fadeOut();
        $('.choose-buttons').fadeIn();
        $('.reserve-form').fadeOut();
        $('.Reservation-header').css('background','#FFF');
    });
    
   //تاكيد الحجز
    $('.confirm').click(function(){
        $('.pays-way').fadeIn();
        $('.editToReserveForm').fadeIn();
        $(this).parent().fadeOut();
        $('.reserve-form').fadeOut();
        $('.editToSearchTable').fadeOut();
    });
    
    //edit link => to resrvation form page
    $('.editToReserveForm').css('cursor', 'pointer').click(function(){
        $('.confirm').parent().fadeIn();
        $('.reserve-form').fadeIn();
        $('.editToSearchTable').fadeIn();
        $('.pays-way').fadeOut();
        $(this).fadeOut();
    });
    
    
    //shop reservation page
    $('.toReservationDetails').css('cursor', 'pointer').click(function(){
        $(this).attr('href', 'reservation-details.html');
    });
    
    
    //messages
    var right=$('.msg-body .col-4').css('display');
    if(right=="none"){
        $('.responsive-menu button').css('display','block');
        $('.msg-body .nav-tabs').appendTo('.taaabs');
        $('.responsive-menu button').click(function(){
            $('.taaabs').toggle();
        });
    }
    
   
    
});
