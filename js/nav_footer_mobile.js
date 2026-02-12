const menuHambur = document.getElementById('menu_hambur');
const nav = document.getElementById('cont_links_nav');

const contacto = document.getElementById('id_contacto');
const img_slider_inicio = document.getElementById('cont_img_slider_inicio');


function consulta_ventana(){
    let estado = false
    let estado_mobile = window.matchMedia("(max-width:768px)");
    if(estado_mobile.matches){
        estado = true
    }
    return estado
}

menuHambur.addEventListener("click", () => {
    nav.classList.toggle("active");
});
if (consulta_ventana()) {
    contacto.innerHTML =
        `
            <div class="f_nav_1">
                <div class="cont_derechos">
                <div class="cont_logo_derechos">
                    <img src="../img/logo.png">
                </div>
                <p>&copy;Todos los derechos reservados por CLOFEA SRL</p>
                </div>
                <div class="cont_datos_contacto">
                    <div>
                    <p>Horario de Atencion: Lunes a Viernes 09hs-17hs</p>
                    <p>Ubicacion: Dr. Eduardo Jenner 1805 <a href="https://maps.app.goo.gl/tnHmzsNdJD6RUVGc8"><i
                                class="fa-solid fa-location-dot"></i></a></p>
                    </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.240712067003!2d-58.3942540235096!3d-34.62335685853701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2107cb64df%3A0xb612906c608e5b3b!2sCaf%C3%A9%20Bantu%20Oficinas%20Comerciales!5e0!3m2!1ses!2sar!4v1755493132581!5m2!1ses!2sar"
                    width="450" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="f_nav_2">
               <div class="cont_redes">
                <div class="cont_red">
                    
                        <a href="https://www.instagram.com/cafebantu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/cafebantu/?locale=es_LA" target="_blank">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                    
                   
                        <a href="https://wa.me/+5491158962830" target="_blank">
                            <i class="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="https://www.tiktok.com/@cafebantu?_r=1&_t=ZM-931UM0OtB2S" target="_blank">
                            <i class="fa-brands fa-tiktok"></i>
                        </a>
                    
                </div>
            </div>
            </div>
            
            `

    img_slider_inicio.innerHTML = 
        `
        <div class="swiper-wrapper">
                <diV class="swiper-slide">
                    <div>
                        <a class=link_slider_maquina_cafe1 href="./html/maquinas_cafe.html"></a>
                        <img src="./img/slider_mobile/sl1A_mobile.png" alt="banner 1">
                    </div>
                </div>
                <diV class="swiper-slide">
                    <div>
                    <a class=link_slider_maquina_cafe1 href="./html/maquinas_cafe.html"></a>
                        <img src="./img/slider_mobile/sl1B_mobile.png" alt="banner 1">
                    </div>
                </div>
                <diV class="swiper-slide">
                    <div>
                    <a class=link_slider_maquina_cafe1 href="./html/maquinas_snack.html"></a>
                        <img src="./img/slider_mobile/sl2A_hd.png" alt="banner 2">
                    </div>
                </div>
                <diV class="swiper-slide">
                    <div>
                    <a class=link_slider_maquina_cafe1 href="./html/maquinas_snack.html"></a>
                        <img src="./img/slider_mobile/sl2B_hd.png" alt="banner 2">
                    </div>
                </div>
                <diV class="swiper-slide">
                    <div>
                    <a class=link_slider_maquina_cafe1 href="./html/mini_vending.html"></a>
                        <img src="./img/slider_mobile/sl3A_mobile.png" alt="banner 3">
                    </div>
                </div>
                <diV class="swiper-slide">
                    <div>
                    <a class=link_slider_maquina_cafe1 href="./html/mini_vending.html"></a>
                        <img src="./img/slider_mobile/sl3B_mobile.png" alt="banner 3">
                    </div>
                </div>
            </div>
        `
    
}