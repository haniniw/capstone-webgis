<?php
session_start();
include('configuration.php');  

$searchInput = "";
if (isset($_GET['q'])) {
    $searchInput = pg_escape_string($connection, $_GET['q']);
}

$query = 'SELECT "Nama" as lokasi, "_Koordinat_latitude" AS lat, "_Koordinat_longitude" AS lng, "Keterangan", "Foto", "Foto_URL" FROM "Tempat"';
if (!empty($searchInput)) {
    $query .= ' WHERE "Nama" ILIKE \'%' . $searchInput . '%\'';
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
