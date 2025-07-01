<?php
// konfigurasi koneksi database PostgreSQL
$host = "localhost";         // alamat server database, bisa 'localhost' jika server sama
$port = "5432";              // port default PostgreSQL
$dbname = "IPB_Bio"; // nama database Anda (sesuaikan)
$user = "postgres";          // username database PostgreSQL
$password = "hanini101"; // password user database PostgreSQL

// buat koneksi
$connection = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$connection) {
    die("Connection failed: " . pg_last_error());
}
?>
