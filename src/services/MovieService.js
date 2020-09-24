import Movie from "../modals/Movie"
export default class MovieService{

    constructor(){
        movies = [];

        firstMovie = Movie(1,"El Señor de los Anillos: la Comunidad del Anillo","3h 48m","Peter Jackson");
        secondMovie = Movie(2,"harry potter y la piedra filosofal","2h 39m","Chris Columbus");
        thirdMovie = Movie(3,"Star Wars: episodio IV - una nueva esperanza","2h 5m","George Lucas");
    
        movies.push(firstMovie);
        movies.push(secondMovie);
        movies.push(thirdMovie);
    } 
  

    async show(movies) {
        try {
            const request = movies;
            document.getElementById("container").innerHTML = `<table><tr>
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

    async Post(event){
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

    async Edit(event){
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

    async  Delete(event){
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
}
