/*
const tazas = document.querySelectorAll('.fa-mug-hot');
const textos = document.querySelectorAll('.nombre_cafe');

textos.forEach((texto, index) => {
  texto.addEventListener("mouseenter", () => {
    tazas[index].style.color = "gold";
  });

  texto.addEventListener("mouseleave", () => {
    tazas[index].style.color = "";
  });
});
''' */

const tazas = document.querySelectorAll('.fa-mug-hot');
const contenedor = document.querySelectorAll('.cont_bebida');

contenedor.forEach((contenedor,index) => {
    contenedor.addEventListener("mouseenter",() =>{
         tazas[index].style.color = "gold";
    });
});

contenedor.forEach((contenedor,index) => {
    contenedor.addEventListener("mouseleave",() =>{
        tazas[index].style.color = "";
    })
});

