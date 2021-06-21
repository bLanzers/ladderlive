
jQuery(document).ready(function(){
    // const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
    
    // toggleSwitch.addEventListener('change', switchTheme, false);
    
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const contactForm = document.getElementById('contact-form');
    const errorElement = document.getElementById('error');
    const successMsg = document.getElementById('success-msg');
    const submitBtn = document.getElementById('submit');
    
    const validate = (e) => {
      e.preventDefault();
    
      if (name.value.length < 3) {
        errorElement.innerHTML = 'Your name should be at least 3 characters long.';
        return false;
      }
    
      if (!(email.value.includes('.') && (email.value.includes('@')))) {
        errorElement.innerHTML = 'Please enter a valid email address.';
        return false;
      }
    
      if (!emailIsValid(email.value)) {
        errorElement.innerHTML = 'Please enter a valid email address.';
        return false;
      }
    
      if (message.value.length < 15) {
        errorElement.innerHTML = 'Please write a longer message.';
        return false;
      }
    
      errorElement.innerHTML = '';
      successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.';
    
      e.preventDefault();
      setTimeout(function () {
        successMsg.innerHTML = '';
        document.getElementById('contact-form').reset();
      }, 6000);
    
      return true;
    
    }
    
    const emailIsValid = email => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    submitBtn.addEventListener('click', validate);
    
    });
    
    
  jQuery(document).ready(function($){
  var Expand = (function() {
    var tile = $('.strips__strip');
    var tileLink = $('.strips__strip > .strip__content');
    var btnLink = $('.btn_page');
    var tileText = tileLink.find('.strip__inner-text');
    var stripClose = $('.strip__close');
  
    var expanded  = false;
  
    var open = function() {
  
      var tile = $(this).parent();
  
        if (!expanded) {
          tile.addClass('strips__strip--expanded');
          // add delay to inner text
          tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
          stripClose.addClass('strip__close--show');
          stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
          expanded = true;
        }
      };
  
      var openbtn = function() {
  
        close();
        var tile = $($(this).data("page"));
  
          if (!expanded) {
            tile.addClass('strips__strip--expanded');
            // add delay to inner text
            tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
            stripClose.addClass('strip__close--show');
            stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
            expanded = true;
          }
        };
  
    var close = function() {
      if (expanded) {
        tile.removeClass('strips__strip--expanded');
        // remove delay from inner text
        tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.removeClass('strip__close--show');
        stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
        expanded = false;
      }
    }
  
      var bindActions = function() {
        tileLink.on('click', open);
        btnLink.on('click', openbtn);
        // btnLink.on('click', close);
        stripClose.on('click', close);
      };
  
      var init = function() {
        bindActions();
      };
  
      return {
        init: init
      };
  
    }());
  
  Expand.init();
  
  });
  
  
  jQuery(document).ready(function(){
  
    jQuery('.gallery ul li a').click(function() {
      var itemID = jQuery(this).attr('href');
      debugger;
      jQuery('.strip__close').css("opacity",0);
      jQuery('.gallery ul').addClass('item_open');
      jQuery(itemID).addClass('item_open');
      return false;
    });
    jQuery('.close').click(function() {
      jQuery('.port, .gallery ul').removeClass('item_open');
      jQuery('.strip__close').css("opacity",1);
      return false;
    });
    
    jQuery(".gallery ul li a").click(function() {
      jQuery('html, body').animate({
          scrollTop: parseInt(jQuery("#top").offset().top)
      }, 400);
    });
    
    });
  
    $(function(){
      var flag=0;
    
      $('.share').on('click',function(){
       if(flag == 0)
        {
          $(this).siblings('.one').animate({
          bottom:'240px',
         right:'30px',
        },200);
    
         $(this).siblings('.two').delay(200).animate({
          bottom:'170px',
          right:'30px'
        },200);
    
         $(this).siblings('.three').delay(300).animate({
          bottom:'100px',
          right:'30px'
        },200);
    
        $('.one i,.two i, .three i').delay(500).fadeIn(200);
          flag = 1;
        }
    
    
      else{
        $('.one, .two, .three').animate({
            bottom:'25px',
            right:'25px'
          },200);
    
      $('.one i,.two i, .three i').delay(500).fadeOut(200);
          flag = 0;
        }
      });
    });
    