const contResenas = document.getElementById ("contResenas");


fetch("../js/array.json")
    .then (response => response.json ())
    .then (result =>  {
            const resenas = result
            resenas.forEach (resenas => {
                contResenas.innerHTML += `
                    <div class="resenas__cont--articulo">
                        <div class="resenas__cont--portada">
                            <img src="../img/${resenas.image}" alt="portada album"></a>
                        </div>
                        <div class="resenas__cont--info">
                            <h3>${resenas.titulo}</h3>
                            <h4>${resenas.artista}</h4>
                            <p>${resenas.anio}</p>
                        </div>    
                        <div class="resenas__cont--autor">
                            <p>por: ${resenas.autor}</p>
                        </div>
                    </div>
                    `
            })
    })
    .catch (error => console.log (error))