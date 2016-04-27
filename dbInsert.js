var movies; 
var movieactors; 
 
 
 function onLoad() { 
     getMovies();
	 getMovieActors(); 
 } 
 
 
 function insertMovieActors() { 
     var MovieID, ActorFN, ActorLN; 
     MovieID = JSON.stringify($('#Movies option:selected').val()); 
     ActorFN = JSON.stringify($('#ActorFN').val()); 
     ActorLN = JSON.stringify($('#ActorLN').val()); 
     ajax = ajaxinsertMovieActors("insertMovieActors", MovieID, ActorFN, ActorLN); 
     ajax.done(insertMovieActorsCallback); 
     ajax.fail(function () { 
         alert("Failure"); 
     }); 
 } 
 
 
 function ajaxinsertMovieActors(method, MovieID, ActorFN, ActorLN) { 
     return $.ajax({ 
         url: 'dbInsert.php', 
         type: 'POST', 
         data: { 
             method: method, 
             MovieID: MovieID, 
             ActorFN: ActorFN, 
             ActorLN: ActorLN 
         } 
     }); 
 } 
 

 function insertMovieActorsCallback(response_in) { 
     response = JSON.parse(response_in); 
  
     if (!response['success']) { 
         $("#results").html(""); 
         alert("Insert failed on query:" + '\n' + response['querystring']); 
     } else { 
         $("results").html( 
                 response['querystring'] + '<br>' + 
                 response['success'] + '<br>' 
                 ); 
         getMovieActors(); 
         getMovies(); 
     } 
 } 
 
 
 function showMovieActors() { 
     var movieactorsList = ""; 
     { 
         $.each(movieactors, function (key, value) { 
             var itemString = ""; 
             $.each(value, function (key, item) { 
                 itemString += item + '&nbsp' + '&nbsp'; 
             }); 
             movieactorsList += itemString + '<br>'; 
         }); 
         $("#movieactors").html(movieactorsList); 
     } 
 } 
 
 
 function getMovieActors() { 
     ajax = ajaxgetMovieActors("getMovieActors"); 
     ajax.done(getMovieActorsCallback); 
     ajax.fail(function () { 
         alert("Failure"); 
    }); 
 } 
 
 
 function ajaxgetMovieActors(method, async) { 
     return $.ajax({ 
         url: 'dbInsert.php', 
         type: 'POST', 
         async: async, 
         data: {method: method} 
     }); 
 } 
 
 
 function getMovieActorsCallback(response_in) { 
     var response = JSON.parse(response_in); 
     movieactors = response["movieactors"]; 
     if (!response['success']) { 
         $("#results").html("getMovieActors() failed"); 
     } 
 } 
 
/*  function showMovies() { 
     var moviesList = ""; 
     { 
         $.each(Movies, function (key, value) { 
             var itemString = ""; 
             $.each(value, function (key, item) { 
                 itemString += item + '&nbsp' + '&nbsp'; 
             }); 
             moviesList += itemString + '<br>'; 
         }); 
         $("#Movies").html(moviesList); 
     } 
 } */
 
 function getMovies() { 
     ajax = ajaxgetMovies("getMovies");	  
     ajax.done(getMoviesCallback); 
     ajax.fail(function () { 
         alert("Failure"); 
     }); 
 } 
 
 
 function ajaxgetMovies(method) { 
     return $.ajax({ 
         url: 'dbInsert.php', 
         type: 'POST', 
         data: {method: method} 
     }); 
 } 
 
 
 function getMoviesCallback(response_in) { 
     response = JSON.parse(response_in); 
     $movies = response["movies"]; 
     if (!response['success']) { 
         $("#results").html("getMovies() failed"); 
     } else { 
         $('#Movies').find('option').remove(); 
         $.each($movies, 
                 function (key, columns) { 
                     $("#Movies") 
                             .append($('<option>', 
                                     { 
                                         value: columns[0].toString(), 
                                         text: columns[1].toString() 
                                     })); 
                 }); 
     } 
 } 
