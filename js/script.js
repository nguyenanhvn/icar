jQuery(document).ready(function($) {    
    // Slider Range
    if(jQuery( "#slider-range" ).length > 0){
        jQuery( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 30000,
            values: [ 5800, 15800 ],
            slide: function( event, ui ) {
                jQuery( "#count-number #from-price span" ).text(numberWithCommas(ui.values[ 0 ]));
                jQuery( "#count-number #to-price span" ).text(numberWithCommas(ui.values[ 1 ]));
            }
        });

        jQuery( "#count-number #from-price span" ).text( numberWithCommas(jQuery( "#slider-range" ).slider( "values", 0 )));
        jQuery( "#count-number #to-price span" ).text( numberWithCommas(jQuery( "#slider-range" ).slider( "values", 1 )));
    }
// Dropdown Header
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

// Slider
    if (jQuery('.banner').length > 0) {
        jQuery('.banner').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            dots: true,
            items: 1,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-left"><path d="M16132.414,1882.83h0l-1.414-1.414,1.414-1.414,6-6,1.415,1.414-5,5h11.585v2h-11.588l5,5-1.415,1.414Z" transform="translate(-16127.414 -1869.414)" fill="#fff"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-right"><path d="M16097.588,1887.414l5-5H16091v-2h11.589l-5-5L16099,1874l6,6,1.414,1.415-7.417,7.413Z" transform="translate(-16086 -1869.414)" fill="#fff"/></g></svg></div>'
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
    var tslider = jQuery('.thumbs--slider');
    if (tslider.length> 0){
        tslider.owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            dots: false,
            items: 1,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g><path d="M16132.414,1882.83h0l-1.414-1.414,1.414-1.414,6-6,1.415,1.414-5,5h11.585v2h-11.588l5,5-1.415,1.414Z" transform="translate(-16127.414 -1869.414)" fill="#fff"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g><path d="M16097.588,1887.414l5-5H16091v-2h11.589l-5-5L16099,1874l6,6,1.414,1.415-7.417,7.413Z" transform="translate(-16086 -1869.414)" fill="#fff"/></g></svg></div>'
                ],
        });
        jQuery(document).on('click', '.thumbs--list li', function(){
            var index = jQuery(this).index();
            tslider.data('owl.carousel').to(index, 300, true);
        });
    }
    
    if (jQuery('.snews .box-slider').length > 0) {
        jQuery('.snews .box-slider').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            dots: true,
            margin: 24,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-left"><path d="M16132.414,1882.83h0l-1.414-1.414,1.414-1.414,6-6,1.415,1.414-5,5h11.585v2h-11.588l5,5-1.415,1.414Z" transform="translate(-16127.414 -1869.414)" fill="#010001"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-right"><path d="M16097.588,1887.414l5-5H16091v-2h11.589l-5-5L16099,1874l6,6,1.414,1.415-7.417,7.413Z" transform="translate(-16086 -1869.414)" fill="#010001"/></g></svg></div>'
                ],
            responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
            },
        });
    } 
    if (jQuery('.doptions .box-slider').length > 0) {
        jQuery('.doptions .box-slider').owlCarousel({
            loop: true,
            nav: true,
            autoplay: true,
            dots: true,
            items: 1,
            margin: 24,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-left"><path d="M16132.414,1882.83h0l-1.414-1.414,1.414-1.414,6-6,1.415,1.414-5,5h11.585v2h-11.588l5,5-1.415,1.414Z" transform="translate(-16127.414 -1869.414)" fill="#fff"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-right"><path d="M16097.588,1887.414l5-5H16091v-2h11.589l-5-5L16099,1874l6,6,1.414,1.415-7.417,7.413Z" transform="translate(-16086 -1869.414)" fill="#fff"/></g></svg></div>'
                ],
        });
    } 

// Filter Listing
    jQuery(document).on('click', '.box-filter .filter--sort', function() {
        jQuery(this).closest('.container').toggleClass('filter-active');
        if(jQuery(this).closest('.container').hasClass('filter-active')){
            jQuery(this).find('span').text(jQuery(this).attr('text-hide'));
        } else {
            jQuery(this).find('span').text(jQuery(this).attr('text-show'));
        }
    });
    jQuery(document).on('click', '.box-mfilter .mfilter--sort', function() {
        jQuery(this).closest('.container').addClass('filter-active');
    });
    jQuery(document).on('click', '.sort--head .sort--close', function() {
        jQuery(this).closest('.container').removeClass('filter-active');
    });

    jQuery(document).on('click', '.box-mfilter .mfilter--by', function() {
        jQuery(this).closest('.box-mfilter').find('.mfilter--by').addClass('by-active');
    });
    jQuery(document).on('click', '.by--head .by--close', function() {
        jQuery(this).closest('.box-mfilter').find('.mfilter--by').removeClass('by-active');
    });
    
    jQuery(document).on('click', '.hproducts .box-sort .child .child--title', function() {
        if(jQuery(this).parent().hasClass('active')){
            jQuery(this).parent().find('.child--box').slideUp(200);
            jQuery(this).parent().removeClass('active');
        } else {
            jQuery(this).parent().find('.child--box').slideDown(200);
            jQuery(this).parent().addClass('active');
        }
    });

// Grid 3 Dai Ly
    jQuery(document).on('mouseover', '.hgrid3 .content_items .item', function() {
        var index = jQuery(this).index();
        if(!jQuery(this).hasClass('active')){
            jQuery('.hgrid3 .content_items .item').removeClass('active');
            jQuery(this).closest('.hgrid3').attr('data-item', index + 1);
            jQuery(this).addClass('active');
        }        
        jQuery(this).find('.item_table').slideDown(500);
    });
    jQuery(document).on('mouseleave', '.hgrid3 .content_items .item', function() {
        jQuery(this).closest('.hgrid3').attr('data-item', 0);
        jQuery(this).find('.item_table').slideUp(500);
    });

// Upgrade
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

// Search Header
    jQuery(document).on('click', '.action--search .search--show', function(e){
        e.stopPropagation();
        jQuery(this).closest('.header-bottom').addClass('searched');
    });
    jQuery(document).on('click', '.action--search .search--box .search--reset', function(){
        jQuery('.header-bottom').removeClass('searched');
    });
    
    jQuery(document).on('click', '.action--search .search--box', function(e){
        e.stopPropagation()
    });
    jQuery(document).on('click', 'html, body', function(e){
        jQuery('.header-bottom').removeClass('searched');
    });
    
// Header Mobile
    jQuery(document).on('click', '.action--hambuger', function(e){
        jQuery(this).toggleClass('open');
        jQuery('.menu-responsive').toggleClass('open');
        jQuery('body').toggleClass('none-scroll');
    });
    jQuery(document).on('click', '.menu-responsive .menu-item-has-children span, .menu-responsive .menu-item-has-children > a', function(){
        jQuery('.menu2-responsive .menu--top span').html(jQuery(this).text());
        jQuery('.menu2-responsive .menu--box').html(jQuery(this).parent().find('.sub-menu').html());
        jQuery('.menu2-responsive').addClass('open');
    });
    jQuery(document).on('click', '.menu-responsive .has--child', function(){
        jQuery('.menu2-responsive .menu--top span').html(jQuery(this).attr('text'));
        jQuery('.menu2-responsive .menu--box').html(jQuery(this).find('.li--area').html());
        jQuery('.menu2-responsive').addClass('open');
    });
    jQuery(document).on('click', '.menu2-responsive .menu--close', function(){
        jQuery('.menu2-responsive').removeClass('open');
        jQuery('.menu-responsive').removeClass('open');
        jQuery('.action--hambuger').removeClass('open');
        jQuery('body').removeClass('none-scroll');
    });
    jQuery(document).on('click', '.menu2-responsive .menu--back', function(){
        jQuery('.menu2-responsive').removeClass('open');
    });

    jQuery(document).on('click', '.dropdown:not(.disabled) .dropdown--current', function(){
        var index = jQuery(this).closest('.dropdown').index();
        for (let i = 0; i < jQuery('.dropdown').length; i++) {
            if (i != index){
                jQuery('.dropdown--options').eq(i).addClass('select-hide');
                jQuery('.dropdown').eq(i).removeClass('active');
            }            
        }        
        jQuery(this).parent().find('.dropdown--options').toggleClass('select-hide');
        jQuery(this).parent().toggleClass('active');
    });

    jQuery(document).on('change', '.dropdown .dropdown--checkboxes input', function(){
        var count = jQuery(this).closest('.dropdown--checkboxes').find('input:checked').length;
        var current = jQuery(this).closest('.dropdown--checkboxes').find('input:checked').val();
        if (jQuery(this).val() == 'all' && jQuery(this).prop('checked')) {
            jQuery(this).closest('.dropdown--checkboxes').find('input').prop('checked', true);
            jQuery(this).closest('.dropdown').find('.dropdown--current span').text('Tất cả');
        } else if (jQuery(this).val() == 'all' && !jQuery(this).prop('checked')) {
            jQuery(this).closest('.dropdown--checkboxes').find('input').prop('checked', false);
            jQuery(this).closest('.dropdown').find('.dropdown--current span').text(jQuery(this).closest('.dropdown').find('.dropdown--current span').attr('text'));
        } else {            
            if(jQuery(this).closest('.dropdown--checkboxes').find('input[value="all"]:checked')){
                jQuery(this).closest('.dropdown--checkboxes').find('input[value="all"]').prop('checked', false);
            };
            if(count == 0){
                jQuery(this).closest('.dropdown').find('.dropdown--current span').text(jQuery(this).closest('.dropdown').find('.dropdown--current span').attr('text'));
            } else if(count > 1){
                jQuery(this).closest('.dropdown').find('.dropdown--current span').text(count + ' lựa chọn');
            } else {
                jQuery(this).closest('.dropdown').find('.dropdown--current span').text(current);
            }
        }
    });
    
//search
    jQuery(document).on('input', '.dropdown--search input', function(){
        jQuery(this).closest('.dropdown').find('.dropdown--checkboxes ul li').removeClass('active').removeClass('show').hide();
        jQuery(this).closest('.dropdown').find('.dropdown--values ul li').removeClass('active').removeClass('show').hide();
        var value = jQuery(this).val();
        if(value != '') {
            jQuery(this).closest('.dropdown').find(".dropdown--checkboxes ul li label:contains("+value+")").parent().addClass('show').show();
            jQuery(this).closest('.dropdown').find(".dropdown--values ul li:contains("+value+")").addClass('show').show();
        } else {
            jQuery(this).closest('.dropdown').find(".dropdown--checkboxes ul li").addClass('show').show();
            jQuery(this).closest('.dropdown').find(".dropdown--values ul li").addClass('show').show();
        }
        // jQuery(".list-city ul li.show:eq(0)").addClass('active');
    });
    jQuery(document).on('click', '.dropdown--search .search--reset', function(){
        jQuery(this).parent().find('input').val('');
        jQuery(this).closest('.dropdown').find(".dropdown--checkboxes ul li").addClass('show').show();
        jQuery(this).closest('.dropdown').find(".dropdown--values ul li").addClass('show').show();
    });

    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
    };

// Video
    var myVideo = document.getElementById("video"); 
    var iframe = document.getElementById("iframe"); 
    jQuery(document).on('click', '.child--video .video--play', function(e){
        if(myVideo){
            myVideo.play();            
        } else if(iframe) {
            e.preventDefault();
            jQuery('#iframe')[0].src += "&autoplay=1";
        }
        jQuery(this).closest('.child--video').addClass('played');
    });
    jQuery(document).on('click', '.videos .box-main .video--play', function(){
        if(myVideo){
            myVideo.play();            
        }
        if(iframe){
            var srcVideo = jQuery(this).closest('.video').find('iframe').attr('src');
            var source = document.getElementById('iframe');
            source.setAttribute('src', srcVideo);
            jQuery('#iframe')[0].src += "&autoplay=1";
        }
        jQuery(this).closest('.video').addClass('played');
    });
    jQuery(document).on('click', '.videos .box-list .video--play', function(){
        if(jQuery(window).width() > 993){
            jQuery(this).closest('.box-list').find('.item.active').removeClass('active');
            var srcVideo = jQuery(this).closest('.video').find('iframe').attr('src');
            var titleVideo = jQuery(this).parent().find('strong').text();
            jQuery(this).closest('.item').addClass('active');

            var source = document.getElementById('iframe');

            source.setAttribute('src', srcVideo);
            jQuery('#iframe')[0].src += "&autoplay=1";

            // myVideo.load();
            // myVideo.play();

            jQuery('#iframe').closest('.video').addClass('played');
            jQuery('#iframe').closest('.video').find('strong').text(titleVideo);
        }
    });
    $("video").on("pause", function (e) {
        jQuery(this).closest('.child--video').removeClass('played');
        jQuery(this).closest('.video').removeClass('played');
    });

    if(jQuery('.videos .box-list').length > 0){
        if(jQuery(window).width() > 992){
            jQuery('.videos .box-list').css('max-height', jQuery('.videos .box-main .video').outerHeight() + 80);
        }
        jQuery(window).resize(function () { 
            if(jQuery(window).width() > 992){
                jQuery('.videos .box-list').css('max-height', jQuery('.videos .box-main .video').outerHeight() + 80);
            } else {
                jQuery('.videos .box-list').css('max-height', '100%');
            }
        });
    }

// Dropdown
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("dropdown--values");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("span");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        // a.innerText = selElmnt.options[selElmnt.selectedIndex].innerText;
        if(selElmnt.options[selElmnt.selectedIndex].id) {
            a.id = selElmnt.options[selElmnt.selectedIndex].id;
        }
        x[i].parentElement.parentElement.firstElementChild.firstElementChild.appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("ul");
        b.setAttribute("class", "select-items");
        for (j = 0; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("li");
            c.innerHTML = selElmnt.options[j].innerHTML;
            if (selElmnt.options[j].selected){
                c.setAttribute("class", 'same-as-selected');
                c.setAttribute("data-id", selElmnt.options[j].getAttribute('data-provinceid'));
                c.setAttribute("id","province_selected");
            }
            if(selElmnt.options[j].id) {
                c.id = selElmnt.options[j].id;
            }
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        h.id = this.id;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        this.setAttribute("data-id",s.options[i].getAttribute('data-provinceid'));
                        this.setAttribute("id","province_selected");
                        break;
                    }else{
                        this.removeAttribute("id","province_selected");
                    }
                }
                // h.click();
                jQuery('.dropdown').removeClass('active');
                jQuery('.dropdown--options').addClass('select-hide');
                jQuery(this).closest('.dropdown').find('.dropdown--current span').html(jQuery(this).text());
                // 
            });
            b.appendChild(c);
        }
        
        x[i].appendChild(b);
    }
    jQuery(document).click(function (e){
        // Đối tượng container chứa popup
        var container = $(".dropdown");    
        // Nếu click bên ngoài đối tượng container thì ẩn nó đi
        if (!container.is(e.target) && container.has(e.target).length === 0){
            $(".dropdown .dropdown--options").addClass('select-hide');
            $(".dropdown").removeClass('active');
        }
    });

    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName("dropdown--by");
    l = x.length;
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        // a = document.createElement("span");
        // a.setAttribute("class", "select-selected");
        // a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        // a.innerText = selElmnt.options[selElmnt.selectedIndex].innerText;
        // if(selElmnt.options[selElmnt.selectedIndex].id) {
        //     a.id = selElmnt.options[selElmnt.selectedIndex].id;
        // }
        // x[i].parentElement.parentElement.firstElementChild.firstElementChild.appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("ul");
        b.setAttribute("class", "select-items");
        for (j = 0; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("li");
            c.innerHTML = selElmnt.options[j].innerHTML;
            if (selElmnt.options[j].selected){
                c.setAttribute("class", 'same-as-selected');
            }
            if(selElmnt.options[j].id) {
                c.id = selElmnt.options[j].id;
            }
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        h.id = this.id;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                // h.click();
                jQuery('.mfilter--by').removeClass('by-active');
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
    }

// Dropdown ICAN
    if(jQuery('#hang-xe').length > 0){
        renderDropdown();
    }

// Scroll Gioi Thieu
    if(jQuery('#c1').length > 0 && jQuery('#c2').length > 0){
        if(jQuery('#c2').offset().top < $(document).scrollTop() + 300){
            if (jQuery('#c3').offset().top < $(document).scrollTop() + 300){
                $("[data-id=c1]").css('opacity', 0);
                $("[data-id=c2]").css('opacity', 0);
                $("[data-id=c3]").css('opacity', 1);
            } else {
                $("[data-id=c1]").css('opacity', 0);
                $("[data-id=c3]").css('opacity', 0);
                $("[data-id=c2]").css('opacity', 1);
            }
        } else if($(document).scrollTop() + 300 > jQuery('#c3').offset().top) {
            $("[data-id=c1]").css('opacity', 0);
            $("[data-id=c2]").css('opacity', 0);
            $("[data-id=c3]").css('opacity', 1);
        } else {
            $("[data-id=c3]").css('opacity', 0);
            $("[data-id=c2]").css('opacity', 0);
            $("[data-id=c1]").css('opacity', 1);
        }

        if(jQuery('#intro2').offset().top < $(document).scrollTop() + 300){
            if (jQuery('#intro3').offset().top < $(document).scrollTop() + 300){
                $(".introduce5 .grid--text .text--box").attr('data-index', 2);
            } else {
                $(".introduce5 .grid--text .text--box").attr('data-index', 1);
            }
        } else if($(document).scrollTop() + 300 > jQuery('#intro3').offset().top) {
            $(".introduce5 .grid--text .text--box").attr('data-index', 2);
        } else {
            $(".introduce5 .grid--text .text--box").attr('data-index', 0);
        }

        var lastScrollTop = 0, delta = 5;
        $(window).scroll(function(){
            if(jQuery('.introduce6').offset().top > $(document).scrollTop() + 500){

            }
            var nowScrollTop = $(this).scrollTop();
            if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
             if (nowScrollTop > lastScrollTop){
                if(jQuery('#c2').offset().top < $(document).scrollTop() + 300){
                    if (jQuery('#c3').offset().top < $(document).scrollTop() + 300){
                        $("[data-id=c1]").css('opacity', 0);
                        $("[data-id=c2]").css('opacity', 0);
                        $("[data-id=c3]").css('opacity', 1);
                    } else {
                        $("[data-id=c1]").css('opacity', 0);
                        $("[data-id=c3]").css('opacity', 0);
                        $("[data-id=c2]").css('opacity', 1);
                    }
                } else if($(document).scrollTop() + 300 > jQuery('#c3').offset().top) {
                    $("[data-id=c1]").css('opacity', 0);
                    $("[data-id=c2]").css('opacity', 0);
                    $("[data-id=c3]").css('opacity', 1);
                } else {
                    $("[data-id=c3]").css('opacity', 0);
                    $("[data-id=c2]").css('opacity', 0);
                    $("[data-id=c1]").css('opacity', 1);
                }
                if(jQuery('#intro2').offset().top < $(document).scrollTop() + 300){
                    if (jQuery('#intro3').offset().top < $(document).scrollTop() + 300){
                        $(".introduce5 .grid--text .text--box").attr('data-index', 2);
                    } else {
                        $(".introduce5 .grid--text .text--box").attr('data-index', 1);
                    }
                } else if($(document).scrollTop() + 300 > jQuery('#intro3').offset().top) {
                    $(".introduce5 .grid--text .text--box").attr('data-index', 2);
                } else {
                    $(".introduce5 .grid--text .text--box").attr('data-index', 0);
                }
                     // SCROLLING DOWN 
            } else {
                if(jQuery('#c2').offset().top < $(document).scrollTop() + 600){
                    if (jQuery('#c3').offset().top < $(document).scrollTop() + 600){
                        $("[data-id=c1]").css('opacity', 0);
                        $("[data-id=c2]").css('opacity', 0);
                        $("[data-id=c3]").css('opacity', 1);
                    } else {
                        $("[data-id=c1]").css('opacity', 0);
                        $("[data-id=c3]").css('opacity', 0);
                        $("[data-id=c2]").css('opacity', 1);
                    }
                } else if($(document).scrollTop() + 600 > jQuery('#c3').offset().top) {
                    $("[data-id=c1]").css('opacity', 0);
                    $("[data-id=c2]").css('opacity', 0);
                    $("[data-id=c3]").css('opacity', 1);
                } else {
                    $("[data-id=c3]").css('opacity', 0);
                    $("[data-id=c2]").css('opacity', 0);
                    $("[data-id=c1]").css('opacity', 1);
                }

                if(jQuery('#intro2').offset().top < $(document).scrollTop() + 600){
                    if (jQuery('#intro3').offset().top < $(document).scrollTop() + 600){
                        $(".introduce5 .grid--text .text--box").attr('data-index', 2);
                    } else {
                        $(".introduce5 .grid--text .text--box").attr('data-index', 1);
                    }
                } else if($(document).scrollTop() + 600 > jQuery('#intro3').offset().top) {
                    $(".introduce5 .grid--text .text--box").attr('data-index', 2);
                } else {
                    $(".introduce5 .grid--text .text--box").attr('data-index', 0);
                }
                     // SCROLLING UP 
            }
            lastScrollTop = nowScrollTop;
        }
    });
    }
});
function copy(copyText) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    alert("Đã copy");
}
function renderDropdown(){    
    var x, j, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    var options = '<option value="All">All</option>';
    var arr = [];
    for (let index = 0; index < jQuery('.table--cars .item').length; index++) {
        var name = jQuery('.table--cars .item:eq('+index+')').attr('data-name');
        if(arr.length == 0 || !arr.find(abc => abc == name)){
            options += '<option value="'+name+'">'+name+'</option>';
            arr.push(name);
        }
    }
    jQuery('#hang-xe select').html(options);
    jQuery('#dong-xe').closest('.dropdown').addClass('disabled');
    jQuery('#doi-xe').closest('.dropdown').addClass('disabled');

    x = document.getElementById("hang-xe");
    selElmnt = x.getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("span");
    a.setAttribute("class", "select-selected");
    // a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    // a.innerText = selElmnt.options[selElmnt.selectedIndex].innerText;
    if(selElmnt.options[selElmnt.selectedIndex].id) {
        a.id = selElmnt.options[selElmnt.selectedIndex].id;
    }
    x.parentElement.parentElement.firstElementChild.firstElementChild.appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("ul");
    b.setAttribute("class", "select-items");
    for (j = 0; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("li");
        c.innerHTML = selElmnt.options[j].innerHTML;
        if (selElmnt.options[j].selected){
            c.setAttribute("class", 'same-as-selected');
        }
        if(selElmnt.options[j].id) {
            c.id = selElmnt.options[j].id;
        }
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    h.id = this.id;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            // h.click();
            jQuery('.dropdown').removeClass('active');
            jQuery('.dropdown--options').addClass('select-hide');
            jQuery(this).closest('.dropdown').find('.dropdown--current span').html(jQuery(this).text());
            jQuery('.table--cars .item').show();
            if(jQuery(this).text() != 'All'){
                for (let index = 0; index < jQuery('.table--cars .item').length; index++) {
                    var name = jQuery('.table--cars .item:eq('+index+')').attr('data-name');
                    if(jQuery(this).text() != name){
                        jQuery('.table--cars .item:eq('+index+')').hide();
                    }
                }
            }
            renderDropdown2(jQuery(this).text());
            jQuery('#dong-xe .select-items').closest('.dropdown').find('.dropdown--current span').text('Dòng xe');
            jQuery('#doi-xe .select-items').closest('.dropdown').find('.dropdown--current span').text('Đời xe');
        });
        b.appendChild(c);
    }
    x.appendChild(b);
}
function renderDropdown2(text){    
    var x, j, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    var options = '<option value="All">All</option>';
    var arr = [];
    for (let index = 0; index < jQuery('.table--cars .item').length; index++) {
        var name = jQuery('.table--cars .item:eq('+index+')').attr('data-name');
        var classN = jQuery('.table--cars .item:eq('+index+')').attr('data-class');
        if(name == text){
            if(!arr.find(abc => abc == classN)){
                options += '<option value="'+classN+'">'+classN+'</option>';
                arr.push(classN);
            }
        }
    }
    jQuery('#dong-xe select').html(options);
    if(text != 'All'){
        jQuery('#dong-xe').closest('.dropdown').removeClass('disabled');
    } else {
        jQuery('#dong-xe').closest('.dropdown').addClass('disabled');
    }
    jQuery('#doi-xe').closest('.dropdown').addClass('disabled');
    jQuery('#dong-xe .select-items').remove();
    x = document.getElementById("dong-xe");
    selElmnt = x.getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("span");
    a.setAttribute("class", "select-selected");
    // a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    // a.innerText = selElmnt.options[selElmnt.selectedIndex].innerText;
    if(selElmnt.options[selElmnt.selectedIndex].id) {
        a.id = selElmnt.options[selElmnt.selectedIndex].id;
    }
    x.parentElement.parentElement.firstElementChild.firstElementChild.appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("ul");
    b.setAttribute("class", "select-items");
    for (j = 0; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("li");
        c.innerHTML = selElmnt.options[j].innerHTML;
        if (selElmnt.options[j].selected){
            c.setAttribute("class", 'same-as-selected');
        }
        if(selElmnt.options[j].id) {
            c.id = selElmnt.options[j].id;
        }
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    h.id = this.id;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            // h.click();
            jQuery('.dropdown').removeClass('active');
            jQuery('.dropdown--options').addClass('select-hide');
            jQuery(this).closest('.dropdown').find('.dropdown--current span').html(jQuery(this).text());
            jQuery('.table--cars .item').show();
            for (let index = 0; index < jQuery('.table--cars .item').length; index++) {
                var name = jQuery('.table--cars .item:eq('+index+')').attr('data-name');
                var classN = jQuery('.table--cars .item:eq('+index+')').attr('data-class');
                if(jQuery(this).text() == 'All'){
                    if((name != text)){
                        jQuery('.table--cars .item:eq('+index+')').hide();
                    }
                } else {
                    if(jQuery(this).text() == classN && name == text){
                        jQuery('.table--cars .item:eq('+index+')').show();
                    } else {
                        jQuery('.table--cars .item:eq('+index+')').hide();
                    }
                }
            }
            renderDropdown3(text, jQuery(this).text());
            jQuery('#doi-xe .select-items').closest('.dropdown').find('.dropdown--current span').text('Đời xe');
        });
        b.appendChild(c);
    }
    x.appendChild(b);
}
function renderDropdown3(text, oClass){    
    var x, j, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    var options = '<option value="All">All</option>';
    var arr = [];
    for (let index = 0; index < jQuery('.table--cars .item').length; index++) {
        var name = jQuery('.table--cars .item:eq('+index+')').attr('data-name');
        var classN = jQuery('.table--cars .item:eq('+index+')').attr('data-class');
        var year = jQuery('.table--cars .item:eq('+index+')').attr('data-year');
        if(arr.length == 0 || !arr.find(abc => abc == year)){
            if(name == text && classN == oClass){
                options += '<option value="'+year+'">'+year+'</option>';
                arr.push(year);
            }
        }
    }
    jQuery('#doi-xe select').html(options);
    jQuery('#doi-xe').closest('.dropdown').removeClass('disabled');
    jQuery('#doi-xe .select-items').remove();
    x = document.getElementById("doi-xe");
    selElmnt = x.getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("span");
    a.setAttribute("class", "select-selected");
    // a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    // a.innerText = selElmnt.options[selElmnt.selectedIndex].innerText;
    if(selElmnt.options[selElmnt.selectedIndex].id) {
        a.id = selElmnt.options[selElmnt.selectedIndex].id;
    }
    x.parentElement.parentElement.firstElementChild.firstElementChild.appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("ul");
    b.setAttribute("class", "select-items");
    for (j = 0; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("li");
        c.innerHTML = selElmnt.options[j].innerHTML;
        if (selElmnt.options[j].selected){
            c.setAttribute("class", 'same-as-selected');
        }
        if(selElmnt.options[j].id) {
            c.id = selElmnt.options[j].id;
        }
        c.addEventListener("click", function(e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    h.id = this.id;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            // h.click();
            jQuery('.dropdown').removeClass('active');
            jQuery('.dropdown--options').addClass('select-hide');
            jQuery(this).closest('.dropdown').find('.dropdown--current span').html(jQuery(this).text());
            jQuery('.table--cars .item').show();
            for (let index = 0; index < jQuery('.table--cars .item').length; index++) {
                var name = jQuery('.table--cars .item:eq('+index+')').attr('data-name');
                var classN = jQuery('.table--cars .item:eq('+index+')').attr('data-class');
                var year = jQuery('.table--cars .item:eq('+index+')').attr('data-year');
                if(jQuery(this).text() == 'All'){
                    if((name != text)){
                        jQuery('.table--cars .item:eq('+index+')').hide();
                    } else {
                        if(oClass != classN){
                            jQuery('.table--cars .item:eq('+index+')').hide();
                        }
                    }
                } else {
                    if(oClass == classN && name == text && jQuery(this).text() == year){
                        jQuery('.table--cars .item:eq('+index+')').show();
                    } else {
                        jQuery('.table--cars .item:eq('+index+')').hide();
                    }
                }
            }
        });
        b.appendChild(c);
    }
    x.appendChild(b);
}
function numberWithCommas(x) {
    if (x !== null) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}