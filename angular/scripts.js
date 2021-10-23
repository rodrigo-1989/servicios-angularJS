const subirImagen= event => {
    const archivos = event.target.files;
    const data = new FormData();
  
    data.append('archivo', archivos[0]);
  
 
  }
  
  document.querySelector('#subir_archivo').addEventListener('change', event => {
      subirImagen(event);
  });