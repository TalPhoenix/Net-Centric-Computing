select *
from nctorilentz.movies, nctorilentz.moviecast, nctorilentz.actors
where nctorilentz.movies.MovieID = nctorilentz.moviecast.MovieID
and nctorilentz.moviecast.ActorID = nctorilentz.actors.ActorID