//LOGICA PARA PETICIONES


const jokeUrl = 'https://api.chucknorris.io/jokes/random';


 const obtenerChiste = async () => { 

 try {
    const resp = await fetch( jokeUrl );

    if( !resp.ok )return alert('No se puede realizar la peticion');
 
    const  {icon_url, id , value} = await resp.json();
    return {icon_url, id , value};

 } catch (error) {
     
    throw error;

 }

}









export {

    obtenerChiste
}


/* APUNTES

const jokeUrl = 'https://api.chucknorris.io/jokes/random';

fetch( jokeUrl ).then ( response => {

    response.json().then(data => {
        console.log(data.id);
        console.log(data.value);
    })
    
    //esto de arriba es lo mismo que-->
     fetch( jokeUrl )
       .then( resp => resp.json() )
       .then( ({ id, value }) => {
         console.log(id+"<br>"+ value);
       })


    
})

*/