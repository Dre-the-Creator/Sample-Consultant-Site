let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  const loc = { lat: 40.432820, lng: -105.098520 }
  map = new Map(document.getElementById("map"), {
    center: loc,
    zoom: 8
  });
  // The Markr, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map })
}

initMap(); 

// Sticky Menu Background
window.addEventListener('scroll', function() { 
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// // Smooth Scrolling 
$('#navbar a').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});