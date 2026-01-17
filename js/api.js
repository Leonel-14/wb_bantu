const api_url = "https://leonel-14.github.io/API_PRUEBA/Api.json";
//const cargador = `<div id="cargador" class="loader"></div>`
const div_bebida = document.getElementById('cont_img_bebida');
const estado_mobile = window.matchMedia("(max-width:768px)");
fetch(api_url)
    .then(response => {
        // Convierte la respuesta a formato JSON
        return response.json();
    })
    .then(data => {
        // Llama a una función para mostrar los datos
        Mostrar("hola\n", data);

        if (document.getElementById("cont_maquina_cafe")) {
            Estructura_Slider(data);

        }
        if (document.getElementById("cont_maquina_snacks")) {
            Estructura_Snacks(data);
        }
    })
    .catch(error => {
        console.error('Fijate Hubo un error al obtener los datos:', error);
    });



function Estructura_Slider(data) {
    let i = 0;
    maquina_cafe = Object.values(data.maquinas_cafe);
    maquina_cafe.forEach(element => {

        Mostrar_Bebida(element)
        imagen1 = Object.values(element.img)[0]
        imagen2 = Object.values(element.img)[1]
        imagen3 = Object.values(element.img)[2]


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
                        <div class="swiper-slide">
                            <img src=${imagen1}>
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
                <div class="swiper-slide">
                <img src=${imagen1}>
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
                        <div class="swiper-slide">
                            <img src=${imagen1}>
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
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });


        i++;
    });

}

function Mostrar(data) {

    console.log("hola")
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
function Estructura_Snacks(data) {
    let i = 0;
    maquina_snack = Object.values(data.maquinas_snacks);
    maquina_snack.forEach(element => {
        imagen1 = Object.values(element.img)[0]
        imagen2 = Object.values(element.img)[1]
        imagen3 = Object.values(element.img)[2]

        if (i % 2 == 0) {

            document.getElementById("cont_maquina_snacks").innerHTML +=
                `
        <div class="cont_slider_especificaciones">
            <div class="slider" id="slider"> 
                <h2 class="nombre_maquina">${element.modelo}</h2>
            <div class="swiper-container mySwiper" id="mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src=${imagen1}>
                    </div>
                    <div class="swiper-slide">
                        <img src=${imagen2}>
                    </div>
                    <div class="swiper-slide">
                        <img src=${imagen1}>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
            <div class="cont_snacks_especificaciones">
                <div class="cont_snacks">
                        <div class="cont_snack" id="cont_snack">
                            <div class="snack_bebida cont_img_snack">
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/snacks/bebidas/sprite.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/snacks/bebidas/fant.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                            </div>
                            <div class="snack_saludable cont_img_snack"> 
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                            </div>
                            <div class="snack_salado cont_img_snack"> 
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                            </div>
                            <div class="snack_alf cont_img_snack">
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                            </div>
                            <div class="snack_galletas cont_img_snack"> 
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                            </div>
                            <div class="snack_chocolate cont_img_snack"> 
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                            </div>
                            <div class="snack_varios cont_img_snack"> 
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                                <div class="contenedor_img_snack"> 
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                                </div>
                            </div>
                                
                        </div>
                </div>
                <div class="cont_especificaciones">
                    <p>Peso: 125kg</p>
                    <p>Dimensiones: 67 x 58 x 183 cm</p>
                    <p>Marca: Saeco</p>
                    <p>Tension: 230V</p>
                    <p>Potencia Maxima: 1450W</p>
                    <p>Cantidad de bebidas: 16</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
            </div>
        </div>
        `
        }
        else {
            document.getElementById("cont_maquina_snacks").innerHTML +=
                `
            <div class="cont_slider_especificaciones">
                <div class="cont_snacks_especificaciones">
                <div class="cont_snacks">
                        <div class="cont_snack" id="cont_snack">
                                <img src=../img/maq_snacks/img_producto/coca.png alt="img1">
                        </div>
                    
                </div>
                <div class="cont_especificaciones">
                    <p>Peso: 125kg</p>
                    <p>Dimensiones: 67 x 58 x 183 cm</p>
                    <p>Marca: Saeco</p>
                    <p>Tension: 230V</p>
                    <p>Potencia Maxima: 1450W</p>
                    <p>Cantidad de bebidas: 16</p>
                    <p><i class="fa-solid fa-dolly" style="color:white"></i> Resposicion de Maquina</p>
                    <p><i class="fa-solid fa-gears" style="color:white"></i> Servicio Tecnico</p>

                </div>
            </div>

            <div class="slider" id="slider"> 
                <h2 class="nombre_maquina">${element.modelo}</h2>
            <div class="swiper-container mySwiper" id="mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src=${imagen1} alt="img1">
                    </div>
                    <div class="swiper-slide">
                        <img src=${imagen2}>
                    </div>
                    <div class="swiper-slide">
                        <img src=${imagen1}>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        </div>
            `
        }
        i++;

        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });

    });

}


function Mostrar_Bebida(dato) {

    let algo = Object.entries(dato.bebida)
    let algo2 = Object.keys(dato.bebida)
    algo.forEach(element => {
        // console.log("Nombre -->", element[0])
    }
    );
}
function Generar_Bebida(dato) {
    let bebidas = ""
    cafe = Object.entries(dato.bebida)

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
function Estructura_Slider_Cafe_Mobile(dato) {

}
/*
var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

*/