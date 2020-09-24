//must be a class
movie = {
    id: Number,
    name: String,
    duration: String,
    director: String
}

//movies can be managed as array
movies = movie[100];

//this data must be send by params in Movie constructor
movies = [{
        id: 1,
        name: "El Señor de los Anillos: la Comunidad del Anillo",
        duration: "3h 48m",
        director: "Peter Jackson"
    },
    {
        id: 2,
        name: "harry potter y la piedra filosofal",
        duration: "2h 39m",
        director: "Chris Columbus"
    },
    {
        id: 3,
        name: "Star Wars: episodio IV - una nueva esperanza",
        duration: "2h 5m",
        director: "George Lucas"
    }
]

//the button id is undescriptible
document.getElementById("btn1").addEventListener("click", show);
async function show() {
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

//the form id is undescriptible
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

//the form id is undescriptible
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

//the form id is undescriptible
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