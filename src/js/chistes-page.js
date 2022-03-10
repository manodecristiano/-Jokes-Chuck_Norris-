import { obtenerChiste } from "./http-provider";


//referencias

const body = document.body;
//al no estar aún creados no los = a document
let btnOtro, olList;
let num =0;


//creación de la estructura del HTML
const crearEstrucHtml = () => {

    const divChistes = document.createElement('div');
    
    const html = `
      <h1 class="mt-5">Chistes</h1>
      <hr>
      <button class="btn btn-primary">Otro chiste</button>
      <ol class="mt-2 list-group">
     
      </ol>
    `;
    
    
    divChistes.innerHTML = html;
    body.append( divChistes);
}

//eventos
const eventos = () => {

  olList = document.querySelector('ol');
  btnOtro = document.querySelector('button');  

    btnOtro.addEventListener('click',async () => {
          
        btnOtro.disabled = true;

        dibujarChiste(await obtenerChiste());
    
        btnOtro.disabled = false;

    })
}

const dibujarChiste = ( chiste )  => {
   num++;
    const olItem = document.createElement('li');
    olItem.innerHTML = `${num}<br> ${ chiste.id }: </br> ${ chiste.value }`;
    olItem.classList.add('list-group-item');

    olList.append(olItem);



}


export const init = () => {
  crearEstrucHtml();
  eventos();
}