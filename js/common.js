$(document).ready(function() { // код будет работает после загрузки всей страницы

	$.getJSON('http://alex.devel.softservice.org/testapi/', function(data){ // получаем json с ресурса

	 	// Получаем значение Через AJAX и записываем в val
	  $.each(data, function(key, val){

		  	$( "#slider" ).slider({
	  	    range: "min", // тип слайдера
	  	    value: 0, // изначальное значение
	  	    min: 0, // минимальное значение
	  	    step: 0.2,  // шаг изменения значения
	  	    max: 15, // максимальное значение
	  	    change: function( event, ui ) { // получние значения ползунка при каждом изменении его положения
	  	    	$( "#amount" ).val( "$" + ui.value );

	  	    	// вызов функция при изменение значения
	  	    	scrollDecrement();

	  	    	// изменения фона 'target' и скрытие надписи 'You need' когда значение равно 15
	  	    	if ( $("#slider").slider("value") == 15 ) { // проверка равно ли значение 15 (максимальному для приложения)
	  	    		$('.modal__target').css('background', '#00a910'); // изменения фона 'target' на зеленой
	  	    		$('.modal__info').animate({ // плавное скрытие фразы 'You need' 
	  	    			opacity: 0
	  	    		}, 200)
	  	    	} else {
	  	    		$('.modal__target').css('background', 'grey') // изменения фона 'target' обртано на серый
	  	    		$('.modal__info').animate({  // плавное показывание фразы 'You need' 
	  	    			opacity: 1
	  	    		}, 200)
	  	    	}
	  	    },
	  	    create: function( event, ui ) {
	  	    	scrollSlider(); // Вызов функции для инициализация увеличения знаяения
	  	    }
	  	   });

		// Функция для увелеичения знаяения ползунка
		function scrollSlider() {	
			var slideValue = $("#slider").slider("value");
	        if ( slideValue < val ) { // код выполняется только до полученного знаяения через AJAX
        		$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) ); // получение значения ползунка
        	    $("#slider").slider("value", slideValue + 0.2); // увелечения знаяения на 0.2
        	    setTimeout(scrollSlider, 2000); // время изменения значения в миллисекундах
        	}
	       
	    };	

    	// Функция изменения значения для "You need"
    	function scrollDecrement() {
    		var valueOf = Math.round(Math.abs($( "#slider" ).slider( "value") - 15));
    		$('#want-pay').val( "$" + valueOf); 
    	}
	    
	    // Значение для ползунка добавляем по него
	  	$(".ui-slider-handle").append($("#amount"));
	  	} );

	  });

	});

