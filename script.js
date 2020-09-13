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