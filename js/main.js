;(function($){
    "use srict";
  	var teamSlider = $('.ba-team-slider');
  	teamSlider.slick({
  	//	dots: true,
  		slide: '.ba-slide',
  		prevArrow: '.ba-slider-prev',
  		nextArrow: '.ba-slider-next',
      arrows: true,
  	//	slidesToShow: 1
  	});
      var teamSlider = $('.ba-team-slider2');
      teamSlider.slick({
      //  dots: true,
        slide: '.ba-slide2',
        prevArrow: '.ba-slider-prev2',
        nextArrow: '.ba-slider-next2',
        arrows: true,
       slidesToShow: 1
      });


  		  function initMap() {
  		  	var mapDiv = document.getElementById('map'),
  		  		poltavaAdress = mapDiv.innerHTML
  			var poltava = {lat: 48.856614, lng: 2.352222};
  			          var map = new google.maps.Map(mapDiv, {
  			            zoom: 3,
  			            center: poltava,
  			            disableDefaultUI: true,
  			            draggable: false,


  			            styles: [
  			                        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  			                        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  			                        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  			                        {
  			                          featureType: 'administrative.locality',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#d59563'}]
  			                        },
  			                        {
  			                          featureType: 'poi',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#d59563'}]
  			                        },
  			                        {
  			                          featureType: 'poi.park',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#263c3f'}]
  			                        },
  			                        {
  			                          featureType: 'poi.park',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#6b9a76'}]
  			                        },
  			                        {
  			                          featureType: 'road',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#38414e'}]
  			                        },
  			                        {
  			                          featureType: 'road',
  			                          elementType: 'geometry.stroke',
  			                          stylers: [{color: '#212a37'}]
  			                        },
  			                        {
  			                          featureType: 'road',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#9ca5b3'}]
  			                        },
  			                        {
  			                          featureType: 'road.highway',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#746855'}]
  			                        },
  			                        {
  			                          featureType: 'road.highway',
  			                          elementType: 'geometry.stroke',
  			                          stylers: [{color: '#1f2835'}]
  			                        },
  			                        {
  			                          featureType: 'road.highway',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#f3d19c'}]
  			                        },
  			                        {
  			                          featureType: 'transit',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#2f3948'}]
  			                        },
  			                        {
  			                          featureType: 'transit.station',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#d59563'}]
  			                        },
  			                        {
  			                          featureType: 'water',
  			                          elementType: 'geometry',
  			                          stylers: [{color: '#17263c'}]
  			                        },
  			                        {
  			                          featureType: 'water',
  			                          elementType: 'labels.text.fill',
  			                          stylers: [{color: '#515c6d'}]
  			                        },
  			                        {
  			                          featureType: 'water',
  			                          elementType: 'labels.text.stroke',
  			                          stylers: [{color: '#17263c'}]
  			                        }
  			                      ]//стиль карты

  			          });
  			          var marker = new google.maps.Marker({
  			            position: poltava,
  			            map: map,
  			            animation: google.maps.Animation.BOUNCE,//для того аби постійно пригав


  			          });


  		            var marker2 = new google.maps.Marker({
  		              position: {lat: 41.902783, lng: 12.496366},
  		              map: map,
  		              animation: google.maps.Animation.BOUNCE,


  		            });  /*if we wont two or more marers*/

                  var marker3 = new google.maps.Marker({
                    position: {lat: 40.416775, lng: -3.703790},
                    map: map,
                    animation: google.maps.Animation.BOUNCE,


                  });



  			          infowindow.open(map, marker); //вставка надписи над изображением

  			      }
  			          window.onload = initMap;

})(jQuery);
