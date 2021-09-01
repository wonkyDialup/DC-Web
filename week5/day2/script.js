
const mainContainer = document.querySelector(".main");
const searchButton = document.querySelector(".searchButton");

searchButton.addEventListener("click", retrieve);

function retrieve(e) {

    e.preventDefault();

    const apiKey = `9be4f18efc3a4da7b6442b920a280bf2`
    let topic = document.querySelector('.searchBox').value;
    let url = `https://newsapi.org/v2/everything?qInTitle=${topic}&apiKey=${apiKey}`

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        data.articles.forEach(article =>{
            const newsDiv = document.createElement("div");
            newsDiv.className = "news";
            const image = document.createElement("img");
            // const newsTitle = document.createElement("h4");
            const source = document.createElement("a");
            source.setAttribute('href', article.url );
            source.setAttribute('target', '_blank')
            source.textContent = article.title;
            image.src = article.urlToImage;
            // newsTitle.innerText = article.Title;
            newsDiv.append(source, image);
            mainContainer.append(newsDiv);
        })
    })

     console.log(topic)

}
searchButton.addEventListener("click", () => retrieve());

// fetch("https://newsapi.org/v2/everything?domains=techcrunch.com&apiKey=9be4f18efc3a4da7b6442b920a280bf2")
//    .then(response => response.json())
//    .then(articles => showArticles(articles.results));

//    showArticles = article => {
//     const mainContainer = document.querySelector(".main");
//     article.forEach(article => {
//       const newsDiv = document.createElement("div");
//       newsDiv.className = "news";
//       const image = document.createElement("img");
//       console.table(showArticles());
//       const newsTitle = document.createElement("h4");
//     //   newsElement.innerText = `${articles.title}`;
//       poster.src = article.urlToImage;
//       NewsTitle.innerText = article.Title;
//       newsDiv.append(newsTitle, image);
//       mainContainer.append(newsDiv);
//     //   newsDiv.append(newsElement);
//     });
//   }

function initMap() {
    var latlng = new google.maps.LatLng(34.075375, -84.294090);

    var myOptions = {
      zoom: 18,
      center: latlng,
      disableDefaultUI: true,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    };

    var map = new google.maps.Map(document.getElementById("map1"), myOptions);

    map.panBy(-100, -40);

    var myMarker = new google.maps.Marker(
      {
        position: latlng,
        map: map,
        icon: 'assets/images/svg/pin.svg'
      });
  }