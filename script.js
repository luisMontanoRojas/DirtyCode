movie = {
    id: Number,
    name: String,
    duration: String,
    director: String
}
movies = movie[100];
movies = [{
        id: 1,
        name: "hola",
        duration: "10",
        director: "yo"
    },
    {
        id: 2,
        name: "hola",
        duration: "10",
        director: "yo"
    },
    {
        id: 3,
        name: "hola",
        duration: "10",
        director: "yo"
    }
]

document.getElementById("getMoviesBtn").addEventListener("click", show);
async function show() {
    try {
        const request = movies;
        console.log(request);
        document.getElementById("moviesContainer").innerHTML = `<table><tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Duracion</th>
        <th>Director</th>
        </tr>
        ${movies.map(e=>`<tr><td>${e.id}</td><td>${e.name}</td><td>${e.duration}</td><td>${e.director}</td></tr>`).join('')}
        </table>`
    }catch(error){
    }
}

document.getElementById("NewMovieFrm").addEventListener("submit",PostMovie)
async function PostMovie(event){
    event.preventDefault();
    const formElement = event.target.elements;
    var id = Object.keys(movies).length+1;
    var data = {
        name: formElement.NewMovieName.value,
        duration: formElement.NewMovieDuration.value,
        director: formElement.NewMovieDirector.value
    };
    data.id =id;
    movies.push(data)
}

document.getElementById("EditMovieForm").addEventListener("submit",EditMovie)
async function EditMovie(event){
    event.preventDefault();
    const formElement = event.target.elements;
    var data = {
        id: formElement.EditMovieId.value,
        name: formElement.EditMovieName.value,
        duration: formElement.EditMovieDuration.value,
        director: formElement.EditMovieDirector.value
    };    
}

document.getElementById("DeleteMovieForm").addEventListener("submit",DeleteMovie)
async function DeleteMovie(event){
    event.preventDefault();
    const formElement = event.target.elements;
    //var url = 'https://localhost:44362/api/movie';
    var data = formElement.DeleteMovieId.value;
    // fetch(url, {
    // method: 'DELETE',
    // body: JSON.stringify(data),
    // headers:{
    //     'Content-Type': 'application/json'
    // }
    // }).then((res) => {
    //     return res.json()})
    // .catch(error => console.error('Error:', error))
    // .then((response) => {
    //     console.log('Success:', response)
    // });
}

document.getElementById("GetMovieForm").addEventListener("submit",ShowMovie)
async function ShowMovie(event){
    event.preventDefault();
    try{
        const formElement = event.target.elements;
        var id = formElement.GetMovieId.value;
        //var url = 'https://localhost:44362/api/movie'
        //const request=await fetch(`${url}/${id}`);
        const data=await request.json()
        document.getElementById("oneMovie").innerHTML=`<table><tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Duracion</th>
        <th>Director</th>
        </tr>
        ${data.map(e=>`<tr><td>${e.id}</td><td>${e.name}</td><td>${e.duration}</td><td>${e.director}</td></tr>`).join('')}
        </table>`
    }catch(error){

    }

}