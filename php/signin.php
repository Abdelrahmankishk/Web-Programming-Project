<?php
// Database connection
$servername = "localhost";
$username = "root";
$dbname = "test_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process sign-in form
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $conn->real_escape_string($_POST['email']);
    $password = $conn->real_escape_string($_POST['password']);

    // Check if the user exists
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verify the password
        if (password_verify($password, $row['password'])) {
            // Redirect to index.html
            header("Location: index.html");
            exit();
        } else {
            echo "<p style='color: red; text-align: center;'>Invalid email or password.</p>";
        }
    } else {
        echo "<p style='color: red; text-align: center;'>Invalid email or password.</p>";
    }

    $conn->close();
}
?>
