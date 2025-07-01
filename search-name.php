<?php
session_start();
include('configuration.php');  

$searchInput = "";
if (isset($_GET['q'])) {
    $searchInput = pg_escape_string($connection, $_GET['q']);
}

$query = 'SELECT "Nama Lokal" as nama_umum, "Nama Latin" as nama_latin, "Tempat", "Famili", "Persebaran", "Foto", "_Koordinat_latitude" AS lat, "_Koordinat_longitude" AS lng FROM "Tanaman"';
if (!empty($searchInput)) {
    $query .= ' WHERE "Nama Lokal" ILIKE \'%' . $searchInput . '%\'';
}

$result = pg_query($connection, $query);

if (!$result) {
    echo json_encode([]);
    exit;
}

$data = array();
while ($row = pg_fetch_assoc($result)) {
    $data[] = $row;
}

header('Content-Type: application/json');
echo json_encode($data);

pg_free_result($result);
pg_close($connection);
?>
