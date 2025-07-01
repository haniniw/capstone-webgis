// Data tanaman
var tanaman = [
    { GID: 1, ID: "T001", Nama: "Anggrek", NamaLatin: "Orchidaceae", JenisTanaman: "Hias" , Lokasi: "CCR", Gambar: "url_to_anggrek_image" },
    { GID: 2, ID: "T002", Nama: "Melati", NamaLatin: "Jasminum", JenisTanaman: "Hias", Lokasi: "CCR", Gambar: "url_to_melati_image" },
    { GID: 3, ID: "T003", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "FAPERTA" },
    { GID: 4, ID: "T004", Nama: "Kangkung", NamaLatin: "Kangkung Sativa", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 1, ID: "T001", Nama: "Anggrek", NamaLatin: "Orchidaceae", JenisTanaman: "Hias", Lokasi: "CCR" },
    { GID: 2, ID: "T002", Nama: "Melati", NamaLatin: "Jasminum", JenisTanaman: "Hias", Lokasi: "CCR" },
    { GID: 3, ID: "T003", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 4, ID: "T004", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 5, ID: "T005", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 6, ID: "T006", Nama: "Tomat", NamaLatin: "Tomat sativa", JenisTanaman: "Pangan", Lokasi: "FAHUTAN" },
    { GID: 7, ID: "T007", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 8, ID: "T008", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 9, ID: "T009", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "FMIPA" },
    { GID: 10, ID: "T010", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 11, ID: "T011", Nama: "Padi", NamaLatin: "Oryza sativa", JenisTanaman: "Pangan", Lokasi: "AHN" },
    { GID: 12, ID: "T012", Nama: "Mawar", NamaLatin: "Rosa", JenisTanaman: "Hias", Lokasi: "FMIPA" },
    { GID: 13, ID: "T013", Nama: "Kaktus", NamaLatin: "Cactaceae", JenisTanaman: "Hias", Lokasi: "CCR" },
    { GID: 14, ID: "T014", Nama: "Lidah Buaya", NamaLatin: "Aloe vera", JenisTanaman: "Obat", Lokasi: "FMIPA" },
    { GID: 15, ID: "T015", Nama: "Singkong", NamaLatin: "Manihot esculenta", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 16, ID: "T016", Nama: "Jagung", NamaLatin: "Zea mays", JenisTanaman: "Pangan", Lokasi: "CCR" },
    { GID: 17, ID: "T017", Nama: "Kelapa", NamaLatin: "Cocos nucifera", JenisTanaman: "Industri", Lokasi: "AHN" },
    { GID: 18, ID: "T018", Nama: "Kopi", NamaLatin: "Coffea", JenisTanaman: "Industri", Lokasi: "CCR" },
    { GID: 19, ID: "T019", Nama: "Teh", NamaLatin: "Camellia sinensis", JenisTanaman: "Industri", Lokasi: "CCR" },
    { GID: 20, ID: "T020", Nama: "Jeruk", NamaLatin: "Citrus", JenisTanaman: "Buah", Lokasi: "CCR" },
    { GID: 21, ID: "T021", Nama: "Mangga", NamaLatin: "Mangifera indica", JenisTanaman: "Buah", Lokasi: "BARA" },
    { GID: 22, ID: "T022", Nama: "Apel", NamaLatin: "Malus domestica", JenisTanaman: "Buah", Lokasi: "CCR" },
    { GID: 23, ID: "T023", Nama: "Pisang", NamaLatin: "Musa", JenisTanaman: "Buah", Lokasi: "CCR" },
    { GID: 24, ID: "T024", Nama: "Nanas", NamaLatin: "Ananas comosus", JenisTanaman: "Buah", Lokasi: "CCR" },
    { GID: 25, ID: "T025", Nama: "Durian", NamaLatin: "Durio zibethinus", JenisTanaman: "Buah", Lokasi: "GYMNAS" },
    { GID: 26, ID: "T026", Nama: "Kentang", NamaLatin: "Solanum tuberosum", JenisTanaman: "Sayur", Lokasi: "CCR" },
    { GID: 27, ID: "T027", Nama: "Tomat", NamaLatin: "Solanum lycopersicum", JenisTanaman: "Sayur", Lokasi: "CCR" },
    { GID: 28, ID: "T028", Nama: "Cabai", NamaLatin: "Capsicum", JenisTanaman: "Sayur", Lokasi: "CCR" },
    { GID: 29, ID: "T029", Nama: "Bawang Merah", NamaLatin: "Allium cepa", JenisTanaman: "Sayur", Lokasi: "CCR" },
    { GID: 30, ID: "T030", Nama: "Bawang Putih", NamaLatin: "Allium sativum", JenisTanaman: "Sayur", Lokasi: "CCR" },
    { GID: 31, ID: "T031", Nama: "Kubis", NamaLatin: "Brassica oleracea", JenisTanaman: "Sayur", Lokasi: "CCR" }
    // Tambahkan data lain di sini
];

let filteredTanaman = tanaman; // Maintain a filtered list for display

// Fungsi untuk mengisi tabel dengan data tanaman

function populateTable() {
    var tableBody = document.getElementById("dataTableBody");
    tableBody.innerHTML = ""; // Bersihkan isi tabel sebelumnya
    tanaman.forEach(function (tanaman) {
        var row = `<tr>
                        <td>${tanaman.GID}</td>
                        <td>${tanaman.ID}</td>
                        <td>${tanaman.Nama}</td>
                        <td>${tanaman.NamaLatin}</td>
                        <td>${tanaman.JenisTanaman}</td>
                        <td>${tanaman.Lokasi}</td>
                    </tr>`;
        tableBody.innerHTML += row;
    });
    displayData(filteredTanaman, currentPage, itemsPerPage);
}

// Search Bar
document.getElementById("searchInput").addEventListener("keyup", function() {
    filterTanaman();
});

// Add event listeners for location and type filters
document.getElementById("locationFilter").addEventListener("change", filterTanaman);
document.getElementById("typeFilter").addEventListener("change", filterTanaman);

function filterTanaman() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const locationFilter = document.getElementById("locationFilter").value;
    const typeFilter = document.getElementById("typeFilter").value;

    filteredTanaman = tanaman.filter(item => {
        return (
            (locationFilter === "" || item.Lokasi === locationFilter) &&
            (typeFilter === "" || item.JenisTanaman === typeFilter) &&
            (item.Nama.toLowerCase().includes(searchInput) ||
            item.NamaLatin.toLowerCase().includes(searchInput))
        );
    });

    currentPage = 1; // Reset to the first page whenever filters change
    displayData(filteredTanaman, currentPage, itemsPerPage);
}

// Mendapatkan elemen-elemen yang dibutuhkan
const itemPerPageSelect = document.getElementById("item-per-page-wrapper");
const tableBody = document.getElementById("dataTableBody");
const pageInfo = document.getElementById("pageInfo");
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPage = 1;
let itemsPerPage = parseInt(itemPerPageSelect.value);

/* Fungsi DropDown Item Perpage dan Button Next or Undo Page */
// Fungsi untuk menampilkan data dalam tabel
function displayData(items, page, perPage) {
    tableBody.innerHTML = ''; // Clear table body

    const startIdx = (page - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentItems = items.slice(startIdx, endIdx);

    currentItems.forEach(item => {
        const row = tableBody.insertRow();
        Object.values(item).forEach(value => {
            row.insertCell().textContent = value;
        });
    });

    updatePageInfo(page, items.length, perPage);
}

// Fungsi untuk update pagination info
function updatePageInfo(page, totalItems, perPage) {
    const startItem = (page - 1) * perPage + 1;
    const endItem = Math.min(startItem + perPage - 1, totalItems);
    pageInfo.textContent = `Showing ${startItem}-${endItem} of ${totalItems}`;
}

// Event listener untuk perubahan pada dropdown item per page dan tombol navigasi halaman
itemPerPageSelect.addEventListener("change", () => {
    itemsPerPage = parseInt(itemPerPageSelect.value);
    currentPage = 1;
    displayData(filteredTanaman, currentPage, itemsPerPage);
});

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayData(filteredTanaman, currentPage, itemsPerPage);
    }
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredTanaman.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayData(filteredTanaman, currentPage, itemsPerPage);
    }
});

// Tampilkan data awal
displayData(filteredTanaman, currentPage, itemsPerPage);

// Panggil fungsi untuk mengisi tabel saat halaman dimuat
populateTable();

// Tambahkan event listener untuk tombol tambah data
document.getElementById("tambahData").addEventListener("click", tambahDataBaru);
