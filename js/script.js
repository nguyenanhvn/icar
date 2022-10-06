jQuery(document).ready(function($) {    
    jQuery(document).on('click', '.header .header-top .top--left .actions li', function(){
        jQuery('.header .header-top .top--left .actions li').removeClass('active');
        jQuery(this).toggleClass('active');
    });
    jQuery(document).on('click', '.header .header-top .top--left .actions li .li--dropdown', function(e){
        e.stopPropagation();
    });
    jQuery(document).on('click', '.header .header-top .top--left .actions li .li--dropdown .dropdown--close', function(){
        jQuery(this).closest('li').removeClass('active');
    });

// Click Show Phone
    jQuery(document).on('click', '.middle--right .child', function(){
        jQuery(this).toggleClass('open');
    });
    jQuery(document).on('click', '.middle--right a', function(e){
        e.stopPropagation()
    });
    if (jQuery('.banner').length > 0) {
        jQuery('.banner').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            dots: true,
            items: 1,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-left"><path d="M16132.414,1882.83h0l-1.414-1.414,1.414-1.414,6-6,1.415,1.414-5,5h11.585v2h-11.588l5,5-1.415,1.414Z" transform="translate(-16127.414 -1869.414)" fill="#010001"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-right"><path d="M16097.588,1887.414l5-5H16091v-2h11.589l-5-5L16099,1874l6,6,1.414,1.415-7.417,7.413Z" transform="translate(-16086 -1869.414)" fill="#010001"/></g></svg></div>'
            ],
        });
    } 
    if (jQuery('.slider-review').length > 0) {
        jQuery('.slider-review').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            dots: false,
            items: 1,
            animateOut: 'slideOutRight',
            animateIn: 'slideInLeft',
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g><path d="M16132.414,1882.83h0l-1.414-1.414,1.414-1.414,6-6,1.415,1.414-5,5h11.585v2h-11.588l5,5-1.415,1.414Z" transform="translate(-16127.414 -1869.414)" fill="#fff"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g><path d="M16097.588,1887.414l5-5H16091v-2h11.589l-5-5L16099,1874l6,6,1.414,1.415-7.417,7.413Z" transform="translate(-16086 -1869.414)" fill="#fff"/></g></svg></div>'
            ],
        });
    } 
    if (jQuery('.partners').length > 0) {
        jQuery('.partners').owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            margin: 56,
            responsive: {
                0: {
                    items: 2,
                    slideBy: 2,
                    dots: true,
                },
                450: {
                    items: 3,
                    slideBy: 3,
                    dots: true,
                },
                767: {
                    items: 4,
                    slideBy: 4,
                    dots: true,
                },
                992: {
                    items: 5,
                    slideBy: 5,
                    dots: true,
                },
                1200: {
                    items: 6,
                    dots: false,
                },
                1400: {
                    items: 7,
                    dots: false,
                },
                1600: {
                    items: 8,
                    dots: false,
                },
                1800: {
                    items: 9,
                    dots: false,
                }
            },
        });
    } 

    jQuery(document).on('mouseover', '.hgrid3 .content_items .item', function() {
        var index = jQuery(this).index();
        if(!jQuery(this).hasClass('active')){
            jQuery('.hgrid3 .content_items .item').removeClass('active');
            jQuery(this).closest('.hgrid3').attr('data-item', index + 1);
            jQuery(this).addClass('active');
        }
        if(jQuery(window).width() > 1200){            
            jQuery(this).find('.item_table').slideDown(500);
        }
    });
    jQuery(document).on('mouseleave', '.hgrid3 .content_items .item', function() {
        jQuery(this).closest('.hgrid3').attr('data-item', 0);
        if(jQuery(window).width() > 1200){            
            jQuery(this).find('.item_table').slideUp(500);
        }
    });

    jQuery(document).on('mouseover', '.upgrade ul li', function() {
        var index = jQuery(this).index() + 1;
        if(!jQuery(this).parent().parent().hasClass('content-left')){
            jQuery('.upgrade ul li').removeClass('active');
            jQuery(this).closest('.box-content').attr('data-item', index + 4);
            jQuery(this).addClass('active');
        } else {
            jQuery('.upgrade ul li').removeClass('active');
            jQuery(this).closest('.box-content').attr('data-item', index);
            jQuery(this).addClass('active');
        }
    });
    jQuery(document).on('mouseleave', '.upgrade ul li', function() {
        jQuery('.box-content').attr('data-item', 0);
        jQuery(this).removeClass('active');
    });

    jQuery(document).on('click', '.action--search .search--show', function(e){
        e.stopPropagation();
        jQuery(this).closest('.header-bottom').addClass('searched');
    });
    jQuery(document).on('click', '.action--search .search--box .search--reset', function(){
        jQuery(this).closest('.search--box').find('input').val('');
    });
    
    jQuery(document).on('click', '.action--search .search--box', function(e){
        e.stopPropagation()
    });
    jQuery(document).on('click', 'html, body', function(e){
        jQuery('.header-bottom').removeClass('searched');
    });
});