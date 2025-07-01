<?php
session_start();
include('configuration.php');

$searchInput = "";
if (isset($_GET['searchInput'])) {
    $searchInput = pg_escape_string($connection, $_POST['searchInput']);
}

$query = "SELECT * FROM InfoTumbuhan";
if (!empty($searchInput)) {
    $query .= " WHERE nama_umum ILIKE '%$searchInput%' OR nama_saintifik ILIKE '%$searchInput%' OR deskripsi ILIKE '%$searchInput%' OR kegunaan ILIKE '%$searchInput%' OR status_konservasi ILIKE '%$searchInput%'";
}

$result = pg_query($connection, $query);

if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$data = array();
while ($row = pg_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($data);

pg_free_result($result);
pg_close($connection);
?>
