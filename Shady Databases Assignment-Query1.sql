select nctorilentz.movies.Company, nctorilentz.movies.title, nctorilentz.actors.FirstName, nctorilentz.actors.LastName
from nctorilentz.movies, nctorilentz.moviecast, nctorilentz.actors
where nctorilentz.movies.MovieID = nctorilentz.moviecast.MovieID
and nctorilentz.moviecast.ActorID = nctorilentz.actors.ActorID
order by nctorilentz.movies.Company, nctorilentz.movies.Title, nctorilentz.actors.LastName