/**
 * function
 */
function entrainement(operation) {
  console.log(`Aujourd'hui j'ai fait ${operation}`);
}
entrainement("Une belle action");
entrainement("la vaiselle !!");
/***
 * event show image
 */
const btnEvent = document.querySelector(".btn_event");
const imgAuteur = document.querySelector("#imgAuteur");
const containerAProposDeMoi = document.querySelector(".aProposDemoi_p");
const btn_event_fermer = document.querySelector(".btn_event_fermer");

btnEvent.addEventListener("click", () => {
  containerAProposDeMoi.classList.add("showAProposDemoi_p");
  imgAuteur.classList.add("show_img");
  btnEvent.style.display = "none";
  btn_event_fermer.style.display = "block";
});
btn_event_fermer.addEventListener("click", () => {
  containerAProposDeMoi.classList.remove("showAProposDemoi_p");
  imgAuteur.classList.remove("show_img");
  btn_event_fermer.style.display = "none";
  btnEvent.style.display = "block";
});
/**
 * event horizontal vertical fromscratch video js 46mn environ
 */
/*

const containerMouseEvent = document.querySelector('.container_mouseEvent');
const span_horizontal = document.querySelector('.span_horizontal');
const span_vertical = document.querySelector('.span_vertical');

containerMouseEvent.addEventListener('mousemove', (e)=> {
    console.log(e);
    span_horizontal.innerHTML = e.x;
    span_vertical.innerHTML = e.y;
    containerMouseEvent.style.marginLeft = e.x / window.innerWidth * 100 + "%";
});
*/
