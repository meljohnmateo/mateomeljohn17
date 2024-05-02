<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirmpassword = $_POST['confirm-password'];

// Create database connection
$conn = new mysqli('127.0.0.1:3306', 'root', 'mte*ujhn34*', 'createaccount');

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO new_table (username, email, password, confirmpassword) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $username, $email, $password, $confirmpassword);

// Execute SQL statement
if ($stmt->execute()) {
    echo "Registration successful";
} else {
    echo "Error: " . $conn->error;
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
