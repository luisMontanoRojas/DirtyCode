
class MovieServices{
    constructor(){}
    show() {
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
}
