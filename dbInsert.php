<?php 
  
 require("creds.php"); 
  
 echo $_POST["method"](); 
  
 function sanitize($str, $quotes = ENT_NOQUOTES) { 
     $str = htmlspecialchars($str, $quotes); 
     return $str; 
 } 
  
 function getMovieActors() { 
     $dbConn = mysqli_connect(server(), username(), password(), db()); 
  
     $query = "SELECT * FROM movieactors"; 
     $result = $dbConn->query($query); 
     if ($dbConn->connect_error) { 
         $return->connect_error = "Connection failed: " . $dbConn->connect_error; 
         $return->success = false; 
         return json_encode($return); 
     } 
  
     $movieactors = array(); 
  
     if ($result) { 
         while ($row = $result->fetch_array()) { 
             $allColumns = array(); 
             for ($i = 0; $i < 3; $i++) { 
                 array_push($allColumns, $row[$i]); 
             } 
             array_push($movieactors, $allColumns); 
         } 
     } 
  
     $return = new StdClass(); 
     $return->success = true; 
     $return->movieactors = $movieactors; 
     $return->querystring = $query; 
    return json_encode($return); 
 } 
  
 function getMovies() { 
     $dbConn = mysqli_connect(server(), username(), password(), db()); 
  
     $query = "SELECT * FROM movies"; 
     $result = $dbConn->query($query); 
     if ($dbConn->connect_error) { 
         $return->connect_error = "Connection failed: " . $dbConn->connect_error; 
         $return->success = false; 
         return json_encode($return); 
     } 
  
     $movies = array(); 
  
     if ($result) { 
         while ($row = $result->fetch_array()) { 
             $allColumns = array(); 
             for ($i = 0; $i < 2; $i++) { 
                 array_push($allColumns, $row[$i]); 
             } 
             array_push($movies, $allColumns); 
         } 
     } 
  
    $return = new StdClass(); 
     $return->success = true; 
     $return->movies = $movies; 
     $return->querystring = $query; 
     return json_encode($return); 
 } 
  
 function insertMovieActors() { 
     if (isset($_POST['MovieID'])) { 
         $MovieID = json_decode(sanitize($_POST['MovieID'])); 
     } 
  
     if (isset($_POST['ActorFN'])) { 
         $ActorFN = json_decode(sanitize($_POST['ActorFN'])); 
     } 
  
     if (isset($_POST['ActorLN'])) { 
         $ActorLN = json_decode(sanitize($_POST['ActorLN'])); 
     } 
 
     $dbConn = mysqli_connect(server(), username(), password(), db()); 
  
     if ($dbConn->connect_error) { 
         die("Connection failed: " . $dbConn->connect_error); 
     } 
  
     $query = "INSERT INTO movieactors ( MovieID, ActorFN, ActorLN) " . 
             "VALUES ( " . 
             "" . $MovieID . ", " . 
             "'" . $ActorFN . "', " . 
            "'" . $ActorLN . "' );"; 
     $result = $dbConn->query($query); 
     $return = new stdClass(); 
     $return->querystring = (string) $query; 
     if ($result) { 
         $return->success = true; 
     } else { 
         $return->success = false; 
     } 
     return json_encode($return); 
 } 
