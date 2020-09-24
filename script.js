//import {Movie} from '../DirtyCode/src/Movie'
Movie = require('../DirtyCode/src/Movie');
//MovieService = require('../DirtyCode/src/MovieService');

movies = [];

firstMovie = Movie(1,"El Señor de los Anillos: la Comunidad del Anillo","3h 48m","Peter Jackson")
secondMovie = Movie(2,"harry potter y la piedra filosofal","2h 39m","Chris Columbus")
thirdMovie = Movie(3,"Star Wars: episodio IV - una nueva esperanza","2h 5m","George Lucas")

movies.push(firstMovie)
movies.push(secondMovie)
movies.push(thirdMovie)

document.getElementById("btn1").addEventListener("click", show());


document.getElementById("form1").addEventListener("submit",Post)
async function Post(event){
    event.preventDefault();
    const formElement = event.target.elements;
    var id = Object.keys(movies).length+1;
    var data = {
        name: formElement.Name.value,
        duration: formElement.Duration.value,
        director: formElement.Director.value
    };
    data.id =id;
    movies.push(data)
}

document.getElementById("form2").addEventListener("submit",Edit)
async function Edit(event){
    event.preventDefault();
    const formElement = event.target.elements;
    var data = {
        id: parseInt(formElement.Id.value, 10),
        name: formElement.Name.value,
        duration: formElement.Duration.value,
        director: formElement.Director.value
    };
    const found = movies.find(element=>{element.id==data.id;
        if(element.id==data.id)
        {
            element.name = data.name;
            element.duration = data.duration;
            element.director = data.director;
        }
    });
}

document.getElementById("form3").addEventListener("submit",Delete)
async function Delete(event){
    event.preventDefault();
    const formElement = event.target.elements;
    var id = parseInt(formElement.Id.value,10);
    movies.find(element=>{element.id==id;
        if(element.id==id){
            var i = movies.indexOf( element );
            movies.splice( i, 1 );
        }
    })
}