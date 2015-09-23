var shopMap = new GMaps({
  el: '#shopsMap',
  lat: 36.162640,
  lng: -86.781399
});

var spinMap = new GMaps({
  el: '#spinMap',
  lat: 36.162640,
  lng: -86.781399
});

$("#spin").on('click', function(){
  $("#spinMap").show()
  $("#shopsMap").hide()
})

$("#shop").on('click', function(){
  $("#spinMap").hide()
  $("#shopsMap").show()
})

$(window).load(function(){
  $("#spinMap").hide()
})

shopMap.addMarker({
  lat: 36.122404,
  lng: -86.789937,
  title: 'Halcyon Bike Shop',
  infoWindow: {
  content: '<p>Halcyon Bike Shop</p><a target="_blank" href="http://www.halcyonbike.com/"<p>halcyonbike.com</p></a><p>A worker owned and operated used bicycle shop with repairs, sales, customization, and local handmade cycling goods.</p>'
  }
});

shopMap.addMarker({
  lat: 36.177225,
  lng: -86.749744,
  title: 'Eastside Cycles',
  infoWindow: {
  content: '<p>Eastside Cycles</p><a target="_blank" href="http://www.eastside-cycles.com"<p>eastside-cycles.com</p></a><p>Family owned full service bicycle shop that sells, rents, and repairs bicycles.</p>'
  }
});

shopMap.addMarker({
  lat: 36.143188,
  lng: -86.792926,
  title: 'Green Fleet Bicycle Shop',
  infoWindow: {
  content: '<p>Green Fleet Bicycle Shop</p><a target="_blank" href="http://www.greenfleetbikes.com/"<p>greenfleetbikes.com/</p></a><p>Full service bike shop offering bike tours, rentals, repairs, and sales.</p>'
  }
});

shopMap.addMarker({
  lat: 36.189330,
  lng: -86.624808,
  title: 'Ride615',
  infoWindow: {
  content: '<p>Ride615</p><a target="_blank" href="http://www.ride615.com/" <p>ride615.com</p></a><p>A community driven, community focused bicycle shop with rentals, repairs, sales, and consignment.</p>'
  }
});

shopMap.addMarker({
  lat: 36.103357,
  lng: -86.869321,
  title: 'Gran Fondo Cycles',
  infoWindow: {
  content: '<p>Gran Fondo Cycles</p><a target="_blank" href="http://www.granfondocycles.com/" <p>granfondocycles.com</p></a><p>Independently owned bicycle shop with offerings including sales, fittings, repairs, and financing.</p>'
  }
});

shopMap.addMarker({
  lat: 36.046363,
  lng: -86.954228,
  title: 'Trace Bikes',
  infoWindow: {
  content: '<p>Trace Bikes</p><a target="_blank" href="http://www.tracebikes.com/" <p>tracebikes.com</p></a><p>A family owned full service bike shop offering financing, bicycles from Felt, Trek and Giant, repairs, professional bike fittings, maintenance clinics, group rides, rental bikes and more</p>'
  }
});

shopMap.addMarker({
  lat: 36.046363,
  lng: -86.954228,
  title: "R.B.'s Cyclery",
  infoWindow: {
  content: '<p>R.B.\'s Cyclery</p><a target="_blank" href="http://www.rbscyclery.com/" <p>rbscyclery.com</p></a><p>A locally owned shop with road, triathlon, and mountain bike sales including Cervelo, Felt, Cannondale, Scott and more.  Accessories, repairs, and fittings available as well.</p>'
  }
});

shopMap.addMarker({
  lat: 35.946587,
  lng: -86.879550,
  title: "Macs Harpeth Bikes",
  infoWindow: {
  content: '<p>R.B.\'s Cyclery</p><a target="_blank" href="http://www.macsharpethbikes.com/" <p>macsharpethbikes.com</p></a><p>Family owned shop catering to casual riders with sales, accessories, nutrition, and used bikes.</p>'
  }
});

spinMap.addMarker({
  lat: 35.946587,
  lng: -86.879550,
  title: "Macs Harpeth Bikes",
  infoWindow: {
  content: '<p>R.B.\'s Cyclery</p><a target="_blank" href="http://www.macsharpethbikes.com/" <p>macsharpethbikes.com</p></a><p>Family owned shop catering to casual riders with sales, accessories, nutrition, and used bikes.</p>'
  }
});


