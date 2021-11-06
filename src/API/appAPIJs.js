// Cargar Películas>>
// TMDB: c66eb9e2b42b5d1d179fff7ac34ce71f (Clave)
//(A)
const addMovies = async () => {
  try {
    // Conectar con la API> / Respuesta a la Petición>>
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c66eb9e2b42b5d1d179fff7ac34ce71f&language=es-MX`
    );
    console.log(response);
    // Promesa>

    //(C) Status / Si la respuesta es correcta >
    if (response.status === 200) {
      //(B)
      const data = await response.json(); // (Acceso a los datos)
      //console.log(data);
      let movies = ``;
      data.results.forEach((movie) => {
        movies += `<div class ="movie">
        <img class="poster" id="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
        <h3 class="title">${movie.title}</h3>;
        </div>`;
      });

      //> Agregar a HTML>>>
      document.getElementById(`container`).innerHTML = movies;
      // Status>>>
    } else if (response.status === 401) {
      console.log("La llave no está bien puesta o ejecutada");
    } else if (response.status === 404) {
      console.log("Error al cargar el sitio");
    } else {
      console7.log("Tenemos un error");
    }
  } catch (error) {
    console.log(error);
  }
};

addMovies();
