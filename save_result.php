<?php
// save_result.php

$category = $_POST['category'] ?? 'Unknown';
$difficulty = $_POST['difficulty'] ?? 'Unknown';
$score = $_POST['score'] ?? 0;
$timeTaken = $_POST['timeTaken'] ?? 0;

// Display results (or optionally save to database)
echo "<h1>Quiz Result Saved!</h1>";
echo "<p>Category: <strong>$category</strong></p>";
echo "<p>Difficulty: <strong>$difficulty</strong></p>";
echo "<p>Score: <strong>$score</strong></p>";
echo "<p>Time Taken: <strong>$timeTaken s</strong></p>";
echo '<a href="index.php">Go Back to Quiz</a>';
?>
