const DEFAULT_COORD = [-6.5539484, 106.7207479];

// Initialize the map with zoom control
const Map = L.map('render-map', {
    zoomControl: true
}).setView(DEFAULT_COORD, 15);

Map.zoomControl.setPosition("bottomright");

// Define layers
const osmTile = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 20,
    minZoom: 2,
    useCache: true,
    crossOrigin: true,
    cacheMaxAge: 24 * 3600 * 1000 // Cache tiles for 24 hours
});

const satellite = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    minZoom: 2,
    attribution: 'Imagery ©2022 Google',
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    useCache: true,
    crossOrigin: true,
    cacheMaxAge: 24 * 3600 * 1000 // Cache tiles for 24 hours
});

const terrain = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Data © OpenTopoMap (CC-BY-SA)',
    maxZoom: 20,
    minZoom: 2,
    useCache: true,
    crossOrigin: true,
    cacheMaxAge: 24 * 3600 * 1000 // Cache tiles for 24 hours
});

// Add the default layer asynchronously
setTimeout(() => {
    osmTile.addTo(Map);
}, 500);

function changeLayer(type) {
    Map.eachLayer(function (layer) {
        if (layer instanceof L.TileLayer) {
            Map.removeLayer(layer);
        }
    });
    if (type === 'default') {
        osmTile.addTo(Map);
    } else if (type === 'satellite') {
        satellite.addTo(Map);
    } else if (type === 'terrain') {
        terrain.addTo(Map);
    }
}

// Custom Zoom Functionality
function zoomInMap() {
    Map.zoomIn();
}

function zoomOutMap() {
    Map.zoomOut();
}

// Define styles for circle markers
const markerStyle = {
    color: '#000',
    fillColor: '#FF7800',
    fillOpacity: 0.8,
    radius: 10,
    weight: 2
};

// Array to store the marker references
const markers = [];



function createCustomIcon(iconUrl) {
    return new L.Icon({
        iconUrl: iconUrl,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
}

// Clear existing markers function (moved outside)
function clearMarkers() {
    markers.forEach(marker => {
        Map.removeLayer(marker);
    });
    markers.length = 0;
}

// Search button event
$('#search-btn').on('click', function () {
    let searchTerm = $('#search-input').val().trim();
    if (!searchTerm) {
        alert('Masukkan nama tanaman untuk mencari!');
        return;
    }

    $.ajax({
        url: '../search-name.php',
        data: { q: searchTerm },
        dataType: 'json',
        success: function (data) {
            if (!data || data.length === 0) {
                alert('Nama tanaman tidak ditemukan.');
                return;
            }

            clearMarkers();

            // Use the first result
            let lokasi = data[0];
            let lat = parseFloat(lokasi.lat);
            let lng = parseFloat(lokasi.lng);
            let name = lokasi.nama_umum || lokasi.name || lokasi.Nama;

            let marker = L.marker([lat, lng]).addTo(Map);
            markers.push(marker);
            // TANAMAAAAN
            marker.bindPopup(`
                <div style="font-family: 'Poppins', sans-serif; display: flex; align-items: center; text-align: left; padding: 10px;">
                    <div style="margin-right: 10px;">
                        <img src="${lokasi.Foto}" alt="${lokasi.Foto}" width="145" style="border-radius: 10px;">
                    </div>
                    <div>
                        <h2 style="margin-bottom: 5px; line-height: 2.5;">${lokasi.nama_umum}</h2>
                        <div style="line-height: 1.5;">
                            <p style="margin: 2px 0;"><strong>Nama Latin:</strong> <span style="font-style: italic;">${lokasi.nama_latin}</span></p>
                            
                            <p style="margin: 2px 0;"><strong>Lokasi:</strong> ${lokasi.Tempat}</p>
                        </div>
                    </div>
                </div>
            `).openPopup();

            Map.setView([lat, lng], 17);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('AJAX error:', textStatus, errorThrown);
            alert('Koneksi Eror');
        }
    });
});

$('#location-btn').on('click', function () {
    let searchTerm = $('#location-input').val().trim();
    if (!searchTerm) {
        alert('Masukkan nama lokasi untuk mencari!');
        return;
    }

    $.ajax({
        url: '../search-location.php',
        data: { q: searchTerm },
        dataType: 'json',
        success: function (data) {
            if (!data || data.length === 0) {
                alert('Lokasi tidak ditemukan.');
                return;
            }

            clearMarkers();

            // Use the first result
            let lokasi = data[0];
            let lat = parseFloat(lokasi.lat);
            let lng = parseFloat(lokasi.lng);
            let name = lokasi.lokasi || lokasi.Lokasi;

            let marker = L.marker([lat, lng]).addTo(Map);
            markers.push(marker);

            marker.bindPopup(`
                <div style="font-family: 'Poppins', sans-serif; display: flex; align-items: center; text-align: left; padding: 5px; justify-content: justify-between;">
                    <div style="margin-right: 10px;">
                        <img src="${lokasi.Foto_URL}" alt="${lokasi.lokasi}" width="120" height="120" style="border-radius: 10px; object-fit: cover;">
                    </div>
                    <div>
                        <h2 style="margin-bottom: 5px; line-height: 1.5;">${lokasi.lokasi}</h2>
                        <div style="line-height: 1.5;">
                            <p style="margin: 2px 0;"><strong>Keterangan:</strong> ${lokasi.Keterangan}</p>
                        </div>
                    </div>
                </div>
            `).openPopup();

            Map.setView([lat, lng], 17);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('AJAX error:', textStatus, errorThrown);
            alert('Koneksi Eror');
        }
    });
});

var blueIcon = createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png');
var redIcon = createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png');
var greenIcon = createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png');
var yellowIcon = createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png');
var violetIcon = createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png');
var blackIcon = createCustomIcon('https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png');


var wfs_url = "http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite%3ATanaman&maxFeatures=50&outputFormat=application%2Fjson";


// Fetch GeoJSON and group nearby features
$.getJSON(wfs_url).then((res) => {
    const groupedFeatures = {};

    res.features.forEach((feature) => {
        const coords = feature.geometry.coordinates;
        const roundedKey = coords.map(c => c.toFixed(5)).join(',');

        if (!groupedFeatures[roundedKey]) {
            groupedFeatures[roundedKey] = [];
        }
        groupedFeatures[roundedKey].push(feature);
    });

    Object.entries(groupedFeatures).forEach(([key, features]) => {
        const coords = features[0].geometry.coordinates;
        const latlng = L.latLng(coords[1], coords[0]);

        // Build scrollable popup content
        let popupInnerContent = features.map((f) => `
            <div style="display: flex; align-items: center; padding: 10px;">
                <div style="margin-right: 10px;">
                    <img src="${f.properties.Foto}" alt="${f.properties.Foto}" width="100" height="100" style="border-radius: 10px; object-fit: cover;">
                </div>
                <div style="font-family: 'Poppins', sans-serif;">
                    <h3 style="margin-bottom: 5px;">${f.properties["Nama Lokal"]}</h3>
                    <p style="margin: 2px 0;"><strong>Nama Latin:</strong> ${f.properties["Nama Latin"]}</p>
                    <p style="margin: 2px 0;"><strong>Famili:</strong> ${f.properties.Famili}</p>
                    <p style="margin: 2px 0;"><strong>Persebaran:</strong> ${f.properties.Persebaran}</p>
                    <p style="margin: 2px 0;"><strong>Tempat:</strong> ${f.properties.Tempat}</p>
                </div>
            </div>
        `).join('<hr>');

        const popupContent = `
            <div style="
                max-height: 300px;
                overflow-y: auto;
                font-family: 'Poppins', sans-serif;
            ">
                ${popupInnerContent}
            </div>
        `;

        const marker = L.marker(latlng, { icon: greenIcon }).addTo(Map);
        marker.bindPopup(popupContent, { maxWidth: 400 });
        markers.push(marker);
    });
});
// Tambahkan data tempat IPB dengan blueIcon
var tempat_url = "http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite%3ATempat&maxFeatures=50&outputFormat=application%2Fjson";

$.getJSON(tempat_url).then((res) => {
    const groupedTempat = {};

    res.features.forEach((feature) => {
        const coords = feature.geometry.coordinates;
        const roundedKey = coords.map(c => c.toFixed(5)).join(',');

        if (!groupedTempat[roundedKey]) {
            groupedTempat[roundedKey] = [];
        }
        groupedTempat[roundedKey].push(feature);
    });

    Object.entries(groupedTempat).forEach(([key, features]) => {
        const coords = features[0].geometry.coordinates;
        const latlng = L.latLng(coords[1], coords[0]);

        // Build scrollable popup content for tempat
        let popupInnerContent = features.map((f) => `
            <div style="display: flex; align-items: center; padding: 10px;">
                <div style="margin-right: 10px;">
                    <img src="${f.properties.Foto_URL}" alt="${f.properties.Foto_URL}" width="100" height="100" style="border-radius: 10px; object-fit: cover;">
                </div>
                <div style="font-family: 'Poppins', sans-serif;">
                    <h3 style="margin-bottom: 5px;">${f.properties.Nama}</h3>
                    <p style="margin: 2px 0;"><strong>Keterangan:</strong> ${f.properties.Keterangan}</p>
                </div>
            </div>
        `).join('<hr>');

        const popupContent = `
            <div style="
                max-height: 300px;
                overflow-y: auto;
                font-family: 'Poppins', sans-serif;
            ">
                ${popupInnerContent}
            </div>
        `;

        const marker = L.circleMarker(latlng, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 8 // ukuran lingkaran dalam piksel, responsif terhadap zoom
        }).addTo(Map);

        marker.bindPopup(popupContent, { maxWidth: 400 });
        markers.push(marker);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector('.toggle-button');
    const settingsDrawer = document.querySelector('.settings-drawer');

    toggleButton.addEventListener('click', function () {
        settingsDrawer.classList.toggle('hidden');
    });

    // Adding custom zoom buttons to the UI
    const zoomInButton = document.createElement('button');
    zoomInButton.innerText = 'Zoom In';
    zoomInButton.onclick = zoomInMap;
    document.body.appendChild(zoomInButton);

    const zoomOutButton = document.createElement('button');
    zoomOutButton.innerText = 'Zoom Out';
    zoomOutButton.onclick = zoomOutMap;
    document.body.appendChild(zoomOutButton);
});



// GEOSERVER LAYER CONNECT

// var wfs_url = "http://localhost:8080/geoserver/cite/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=cite%3Aipb_biodiversity&maxFeatures=50&outputFormat=application%2Fjson";

// $.getJSON(wfs_url).then((res) => {
//   var layer = L.geoJson(res, {
//     onEachFeature: function (f, l) {
//       l.bindPopup(`
//             <div style="font-family: 'Poppins', sans-serif; display: flex; align-items: center; text-align: left; padding: 10px;">
//                 <div style="margin-right: 10px;">
//                     <img src="${f.properties.Foto_URL}" alt="${f.properties.Foto_URL}" width="145" height="145" style="border-radius: 10px; object-fit: cover;">
//                 </div>
//                 <div>
//                     <h2 style="margin-bottom: 5px; line-height: 1.25;">${f.properties.Nama}</h2>
//                     <div style="line-height: 1.5;">
//                         <p style="margin: 2px 0;"><strong>Nama Latin:</strong><br><span style="font-style: italic;">${f.properties.Nama_Latin}</span></p>
//                         <p style="margin: 2px 0;"><strong>Kategori:</strong><br>${f.properties.Kategori}</p>
//                         <p style="margin: 2px 0;"><strong>Lokasi:</strong><br>${f.properties.Lokasi}</p>
//                     </div>
//                 </div>
//             </div>
//         `);
//     },
//   }).addTo(Map);
// });S