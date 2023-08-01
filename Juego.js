//Variables
const opcionOne = document.querySelector('#opcionOne');
const opcionTwo = document.querySelector('#opcionTwo');
const contenedor = document.querySelector('#contenedor');

const rock = document.querySelector('#Piedra').id;
const paper = document.querySelector('#Papel').id;
const tijereichon = document.querySelector('#Tijera').id;



Eventos();

function Eventos() {
    contenedor.addEventListener('click', e => {
        e.preventDefault();
        if(e.target.id === 'Piedra' || e.target.id === 'Papel' || e.target.id === 'Tijera' ){
            agregarImagen(e.target.id);
        }
    });
}

function agregarImagen(id){
    const opcion = document.createElement('img');
    opcion.setAttribute('src', `/Img/${id}.png`)
    opcion.setAttribute('id', `${id}`)
    opcion.classList.add("h-40");
    if(opcionOne.children.length == 0){
        let selectOne =opcion.id;
        opcionOne.appendChild(opcion);
    }else if(opcionTwo.children.length == 0){
        opcionTwo.appendChild(opcion)
        let selectTwo =opcion.id;
    };

    if(opcionOne.children.length > 0 && opcionTwo.children.length >0){
        // Resul(selectOne,selectTwo);
    };


}


function Resul(opcionOne,opcionTwo){
    
    console.log(opcionOne);
    console.log(opcionTwo);
    
    
    if(opcionOne == opcionTwo){
        alert("Empate")
    };

}