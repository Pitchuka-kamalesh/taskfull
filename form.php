<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $student_name = $_POST["student_name"];
    $registration_number = $_POST["registration_number"];
    $gender = $_POST["gender"];
    $student_image = $_FILES["student_image"];
    $courses = $_POST["courses"]??[];

    echo "Student Name: " . $student_name . "<br>";
    echo "Registration Number: " . $registration_number . "<br>";
    echo "Gender: " . $gender . "<br>";
    echo "Student Image: " . $student_image["name"] . "<br>";
    if (is_array($courses)) {
        echo implode(', ', $courses);
    } else {
        echo htmlspecialchars($courses); // fallback if it’s a single string (not expected)
    }

    
}
?>

