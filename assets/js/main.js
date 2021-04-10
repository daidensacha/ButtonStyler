
// NAVBAR OFFCANVAS JS
$(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
     
       $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
       $('.offcanvas-collapse').toggleClass('open')
     })
     
     
   // document ready  
   });
   
   
   window.onload = function() {
    // executes when complete page is fully loaded, including all frames, objects and images
   console.log("window is loaded");
     
     
   // window load  
   };

// ==============  RANGE SLIDER ================================================
// Range with tooltip
// https://css-tricks.com/value-bubbles-for-range-inputs/
var rangeSlider = function(){
    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
      
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function(){
        $(this).next(value).html(this.value);
      });
    });
  };
  
  rangeSlider();

// BOOTSTRAP SLIDE SWITCH
// https://gitbrent.github.io/bootstrap4-toggle/#usage

// This function enables and disables the text shadow group
$(function() {
    $('#blur-group-toggle').on('change', function() {
      	if(this.checked) {
$('.blur-group').prop('disabled', false);
	}
	else {
		$(".blur-group").prop('disabled', true);
	} 
    });
});

// This function enables and disables the box shadow group
$(function() {
    $('#shadow-group-toggle').on('change', function() {
      	if(this.checked) {
$('.shadow-group').prop('disabled', false);
	}
	else {
		$(".shadow-group").prop('disabled', true);
	} 
    });
});

// This function toggles options in the padding group
$(function() {
    $('#padding-group-toggle').on('change', function() {
      	if(!!this.checked) {
   $('#style-rl-padding, #style-tb-padding').prop('disabled', false) && $('#style-box-padding').prop('disabled', true);
	}
	else {
		$("#style-rl-padding, #style-tb-padding").prop('disabled', true) && $('#style-box-padding').prop('disabled', false);
	} 
    });
});

// This function enables and disables the box shadow group
$(function() {
    $('#bg-group-toggle').on('change', function() {
      	if(!!this.checked) {
   $('#style-gradient1-color, #style-gradient2-color, #gradient-direction').prop('disabled', false) && $('#style-bg-color').prop('disabled', true);
	}
	else {
		$("#style-gradient1-color, #style-gradient2-color, #gradient-direction").prop('disabled', true) && $('#style-bg-color').prop('disabled', false);
	} 
    });
});

// This function toggles option between solid and gradient background for the hover group
$(function() {
    $('#hover-group-toggle').on('change', function() {
      	if(!!this.checked) {
   $('#style-gradient1-hover, #style-gradient2-hover, #gradient-hover-direction').prop('disabled', false) && $('#style-color-hover').prop('disabled', true);
	}
	else {
		$("#style-gradient1-hover, #style-gradient2-hover, #gradient-hover-direction").prop('disabled', true) && $('#style-color-hover').prop('disabled', false);
	} 
    });
});

// This function enables and disables the border hover group
$(function() {
    $('#hover-border-toggle').on('change', function() {
      	if(this.checked) {
$('#hover-border-color, #hover-border-width').prop('disabled', false);
	}
	else {
		$("#hover-border-color, #hover-border-width").prop('disabled', true);
	} 
    });
});
