jQuery(document).ready(function($) {    
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
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-left"><path d="M16132.414,1882.83h0l-1.414-1.414,1.414-1.414,6-6,1.415,1.414-5,5h11.585v2h-11.588l5,5-1.415,1.414Z" transform="translate(-16127.414 -1869.414)" fill="#010001"/></g></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0,0H24V24H0Z" fill="#fff" opacity="0"/><g id="arrow-right"><path d="M16097.588,1887.414l5-5H16091v-2h11.589l-5-5L16099,1874l6,6,1.414,1.415-7.417,7.413Z" transform="translate(-16086 -1869.414)" fill="#010001"/></g></svg></div>'
            ],
            animateOut: 'slideInLeft',
            // animateIn: 'slideInLeft',
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
        jQuery(this).closest('.search--box').find('input').val('');
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
    jQuery(document).on('click', '.menu-responsive .menu-item-has-children span', function(){
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
    });
    jQuery(document).on('click', '.menu2-responsive .menu--back', function(){
        jQuery('.menu2-responsive').removeClass('open');
    });

    jQuery(document).on('click', '.dropdown .dropdown--current', function(){
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
        if (jQuery(this).val() == 'Tất cả' && jQuery(this).prop('checked')) {
            jQuery(this).closest('.dropdown--checkboxes').find('input').prop('checked', true);
            jQuery(this).closest('.dropdown').find('.dropdown--current span').text('Tất cả');
        } else if (jQuery(this).val() == 'Tất cả' && !jQuery(this).prop('checked')) {
            jQuery(this).closest('.dropdown--checkboxes').find('input').prop('checked', false);
            jQuery(this).closest('.dropdown').find('.dropdown--current span').text(0 + ' lựa chọn');
        } else {            
            if(jQuery(this).closest('.dropdown--checkboxes').find('input[value="Tất cả"]:checked')){
                jQuery(this).closest('.dropdown--checkboxes').find('input[value="Tất cả"]').prop('checked', false);
            };
            jQuery(this).closest('.dropdown').find('.dropdown--current span').text(count + ' lựa chọn');
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
});

function copy(copyText) {
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
    alert("Đã copy");
}