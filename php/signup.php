<?php
// Database connection
$servername = "localhost";
$username = "root";
$dbname = "test_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user = $conn->real_escape_string($_POST['username']);
    $email = $conn->real_escape_string($_POST['email']);
    $pass = password_hash($conn->real_escape_string($_POST['password']), PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (username, email, password) VALUES ('$user', '$email', '$pass')";
    if ($conn->query($sql) === TRUE) {
        // Redirect to index.html
        header("Location: index.html");
        exit();
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
