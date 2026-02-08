const api_url = "../db.json";

const div_bebida = document.getElementById('cont_img_bebida');
const estado_mobile = window.matchMedia("(max-width:768px)");
fetch(api_url)
    .then(response => {
        // Convierte la respuesta a formato JSON
        return response.json();
    })
    .then(data => {
        // Llama a una función para mostrar los datos
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');

            setTimeout(() => {

                if (document.getElementById("cont_maquina_snack")) {
                    Estructura_Snack(data);
                }
                if (document.getElementById("cont_maquina_cafe")) {
                    Estructura_Slider(data);
                }
                if (document.getElementById("cont_maquina_cafe_min_vending")) {
                    Estructura_Min_Vending(data)
                }

                loader.style.display = 'none'; // Ocultar loader
            }, 1000);
            //Mostrar(data)
        })
    })
    .catch(error => {
        console.error('Fijate Hubo un error al obtener los datos:', error);
    });



function Estructura_Slider(data) {
    let i = 0;
    maquina_cafe = Object.values(data.maquinas_cafe);
    maquina_cafe.forEach(element => {


        imagen1 = Object.values(element.img)[0]
        imagen2 = Object.values(element.img)[1]


        if (estado_mobile.matches) {
            document.getElementById("cont_maquina_cafe").innerHTML +=
                `
        <div class="cont_slider_especificaciones">
        <div class="slider" id="slider"> 
                <h2 class="nombre_maquina" id="${element.modelo}">${element.modelo}</h2>
                <div class="swiper-container mySwiper" id="mySwiper">
                    <div class="swiper-wrapper" id="swiper-wrapper">
                        <div class="swiper-slide"">
                            <img src=${imagen1} alt="img1">
                        </div>
                        <div class="swiper-slide">
                            <img src=${imagen2}>
                        </div>
                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                </div>
        </div>
        <div class="cont_bebidas_especificaciones">
                <div class="cont_bebidas" id="cont_bebidas">
                    <div class="cont_beb" id="cont_beb">
                   
                        <div class="cont_bebida" id="cont_bebida">
                        ${Generar_Bebida(element)}
                        </div>
                    </div>
                </div>
                <div class="cont_especificaciones">
                    <p>Peso: ${element.peso}</p>
                    <p>Dimensiones:${element.dimension}</p>
                    <p>Marca: ${element.marca}</p>
                    <p>Tension: 230V</p>
                    <p>Potencia Maxima: ${element.potencia}</p>
                    <p>Cantidad de bebidas: ${element.cantidad_bebidas}</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
        </div>
        </div>
        `
        }
        else {
            if (i % 2 == 0) {
                document.getElementById("cont_maquina_cafe").innerHTML +=
                    `
        <div class="cont_slider_especificaciones">
        <div class="slider" id="slider"> 
                <h2 class="nombre_maquina" id="${element.modelo}">${element.modelo}</h2>
                <div class="swiper-container mySwiper mySwiperA" id="mySwiper">
                <div class="swiper-wrapper" id="swiper-wrapper">
                    <div class="swiper-slide"">
                        <img src=${imagen1} alt="img1">
                    </div>
                    <div class="swiper-slide">
                        <img src=${imagen2}>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                   
                    </div>
        </div>
        <div class="cont_bebidas_especificaciones">
                <div class="cont_bebidas" id="cont_bebidas">
                    <div class="cont_beb" id="cont_beb">
                   
                        <div class="cont_bebida" id="cont_bebida">
                        ${Generar_Bebida(element)}
                        </div>
                    </div>
                </div>
                <div class="cont_especificaciones">
                    <p>Peso: ${element.peso}</p>
                    <p>Dimensiones:${element.dimension}</p>
                    <p>Marca: ${element.marca}</p>
                    <p>Tension: 230V</p>
                    <p>Potencia Maxima: ${element.potencia}</p>
                    <p>Cantidad de bebidas: ${element.cantidad_bebidas}</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
        </div>
        </div>
        `

            }
            else {
                document.getElementById("cont_maquina_cafe").innerHTML +=
                    `
        <div class="cont_slider_especificaciones">
            <div class="cont_bebidas_especificaciones">
                <div class="cont_bebidas_2">
                    <div class="cont_beb" data-aos="fade-up">
                   
                        <div class="cont_bebida_2" id="cont_bebida_2">
                                ${Generar_Bebida(element)}
                        </div>
                    </div>
                </div>
                <div class="cont_especificaciones" data-aos="fade-up">
                    <p>Peso: ${element.peso}</p>
                    <p>Dimensiones:${element.dimension}</p>
                    <p>Marca: ${element.marca}</p>
                    <p>Tension: 230V</p>
                    <p>Potencia Maxima: ${element.potencia}</p>
                    <p>Cantidad de bebidas: ${element.cantidad_bebidas}</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
            </div>
            <div class="slider" id="slider"> 
            <h2 class="nombre_maquina">${element.modelo}</h2>
            
                <div class="swiper-container mySwiper mySwiperB" id="mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src=${imagen1} alt="img1">
                        </div>
                        <div class="swiper-slide">
                            <img src=${imagen2}>
                        </div>
                    </div>

                    
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
        </div>
        </div>
        
        `
            }
        }

        var swiper = new Swiper(`.mySwiper`, {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        i++;
    });

}

function Estructura_Min_Vending(data) {
    let i = 0;
    maquina_cafe = Object.values(data.maquinas_min_vending);
    maquina_cafe.forEach(element => {

        console.log("Estoy en mini vending")
        imagen1 = Object.values(element.img)[0]
        imagen2 = Object.values(element.img)[1]


        if (estado_mobile.matches) {
            console.log("mini_vending_mobile")
            document.getElementById("cont_maquina_cafe_min_vending").innerHTML +=
                `
        <div class="cont_img_especificaciones">
       <div class="cont_img_nombre"> 
                <h2 class="nombre_maquina" id="${element.modelo}">${element.modelo}</h2>
                    <div class="cont_img"">
                        <img src=${imagen1} alt="img1">
                    </div>
                    </div>
        <div class="cont_bebidas_especificaciones">
                <div class="cont_bebidas" id="cont_bebidas">
                    <div class="cont_beb" id="cont_beb">
                   
                        <div class="cont_bebida" id="cont_bebida">
                        ${Generar_Bebida(element)}
                        </div>
                    </div>
                </div>
                <div class="cont_especificaciones">
                    <p>Peso: ${element.peso}</p>
                    <p>Dimensiones:${element.dimension}</p>
                    <p>Marca: ${element.marca}</p>
                    <p>Tension: 230V</p>
                    <p>Cantidad de bebidas: ${element.cantidad_bebidas}</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
        </div>
        </div>
        `
        }
        else {
            if (i % 2 == 0) {
                document.getElementById("cont_maquina_cafe_min_vending").innerHTML +=
                    `
        <div class="cont_img_especificaciones">
        <div class="cont_img_nombre"> 
                <h2 class="nombre_maquina" id="${element.modelo}">${element.modelo}</h2>
                    <div class="cont_img"">
                        <img src=${imagen1} alt="img1">
                    </div>
                    </div>
        <div class="cont_bebidas_especificaciones">
                <div class="cont_bebidas" id="cont_bebidas">
                    <div class="cont_beb" id="cont_beb">
                   
                        <div class="cont_bebida" id="cont_bebida">
                        ${Generar_Bebida(element)}
                        </div>
                    </div>
                </div>
                <div class="cont_especificaciones">
                    <p>Peso: ${element.peso}</p>
                    <p>Dimensiones:${element.dimension}</p>
                    <p>Marca: ${element.marca}</p>
                    <p>Tension: 230V</p>
                    <p>Cantidad de bebidas: ${element.cantidad_bebidas}</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
        </div>
        </div>
        `

            }
            else {
                document.getElementById("cont_maquina_cafe_min_vending").innerHTML +=
                    `
        <div class="cont_img_especificaciones">
            <div class="cont_bebidas_especificaciones">
                <div class="cont_bebidas_2">
                    <div class="cont_beb" data-aos="fade-up">
                   
                        <div class="cont_bebida_2" id="cont_bebida_2">
                                ${Generar_Bebida(element)}
                        </div>
                    </div>
                </div>
                <div class="cont_especificaciones" data-aos="fade-up">
                    <p>Peso: ${element.peso}</p>
                    <p>Dimensiones:${element.dimension}</p>
                    <p>Marca: ${element.marca}</p>
                    <p>Tension: 230V</p>
                    <p>Cantidad de bebidas: ${element.cantidad_bebidas}</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
            </div>
            <div class="cont_img_nombre"> 
                <h2 class="nombre_maquina" id="${element.modelo}">${element.modelo}</h2>
                    <div class="cont_img"">
                        <img src=${imagen1} alt="img1">
                    </div>
                    </div>
            </div>
        </div>
        
        `
            }
        }

        var swiper = new Swiper(`.mySwiper`, {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        i++;
    });

}

function Mostrar(data) {

    console.log("Estrucuta snacks")
    maquina_snack = Object.values(data.maquinas_snacks);
    maquina_snack.forEach(element => {
        //imagenes de producto
        nombre_producto = Object.keys(element.productos)
        producto = element.productos.bebidas
        console.log(nombre_producto[0])
        link_img_producto = Object.values(producto)
        link_img_producto.forEach(element => {
            console.log(element)
        })
        console.log("-------------")


    })
    /*
    //Imagen de maquina
    maquina_snack.forEach(element => {
        console.log(Object.values(element.img))
    })
    maquina_snack.forEach(element => {
        console.log(element.dimension)
        console.log(element.marca)
        console.log(element.modelo)
        console.log(element.peso)
        categoria_producto = Object.keys(element.productos)
        categoria_producto.forEach(element => {
            console.log(element.toUpperCase())
        });
    })


    /*maquina_cafe = Object.values(data.maquinas_cafe);
    maquina_cafe.forEach(element => {
         imagen = Object.values(element.img)[0]
         console.log(imagen)
         
    })
 
    maquina_snack = Object.values(data.maquinas_snacks);
    maquina_snack.forEach(element => {
         console.log(element)
         imagen = Object.values(element.img)[0]
         console.log(imagen)
         
    })*/

}


function Estructura_Snack(data) {
    maquina_snack = Object.values(data.maquinas_snacks);

    maquina_snack.forEach(element => {
        imagen = Object.values(element.img)
        const contenedor = document.getElementById("cont_maquina_snack");

        contenedor.innerHTML +=
            `
    <div class="maquina_especificaciones_snack">
                <h2 class="nombre_maquina_snack">${element.modelo}</h2>
                <div class="cont_img_snack">
                    <img src=${imagen} alt="imagen">
                </div>
                <div class="especificaciones">
                    <p>Dimension: ${element.dimension}</p>
                    <p>Peso: ${element.peso}</p>
                    <p>Cantidad de selecciones: ${element.cantidad_selecciones}</p>
                </div>
            </div>
            <div class="selecciones_snack">
                    ${Generar_Snack(element)}
            </div>
    `

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    })
}
function Generar_Snack(dato) {
    //(console.log(dato.productos)
    let snacks = ""

    productos = dato.productos
    categoria_producto = Object.keys(productos)
    for (let i = 0; i < categoria_producto.length; i++) {
        let img = ""
        tipo_producto = Object.values(productos)[i]
        link_img_producto = Object.values(tipo_producto)
        link_img_producto.forEach(x => {

            img += `

                    <div class="swiper-slide"><img src="${x}" ></div>`
        })

        snacks +=
            `
                    <div class="cont_slider_seleccion">
                            <h3>${categoria_producto[i]}</h3>
                            <div class="swiper-container mySwiper">
                                    <div class="swiper-wrapper" id="swiper-wrapper">
                                        ${img}
                                    </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                    </div>
                `
    }

    return snacks

}
function Generar_Bebida(data) {
    let bebidas = ""
    cafe = Object.entries(data.bebida)
    cafe.forEach(element => {
        bebidas +=
            `
            <div class="cont_img_bebida id="cont_img_bebida">
                    <img src="${element[1]}">
                 <p class="nombre_cafe">${element[0]}</p>
         </div>
        `
    })
    return bebidas;
}

