//Procurar o botão
const addNewHour = document.querySelector("#add-time")
//Quando clicar no botão
addNewHour.addEventListener("click", cloneField)

// contador de fields e limite de fields adicionados

let i = 1;
let limitFields = 4;

// // Executar uma ação
// function cloneField() {
// //Duplicar os campos. Que campos?
//     const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
// //Pegar os campos. Que campos?
//     const fields = newFieldContainer.querySelectorAll('input')
// //Para cada campo, limpar
//     fields.forEach(function(field) {
// //Pega o field do momento e limpa ele
//        field.value = ""
//     })
// //Colocar na página. Onde?
//     document.querySelector("#schedule-items").appendChild(newFieldContainer)
// }

// Executar uma ação
function cloneField() {

    validateFields();

    function validateFields() {
        if(i <= limitFields) {

            // Duplicar os campos
            const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);
            
            // Colocar na página
            const schedule = document.querySelector("#schedule-items");
            schedule.appendChild(newFieldContainer);
            i++;
            // Limpar os campos
            const fields = newFieldContainer.querySelectorAll('input');
            fields.forEach(field => field.value ="");
            
        }  else {

            let warning = document.querySelector("#schedule-items #warning");

            warning.style.display = 'block';
            warning.style.transform = 'scale(1)';
        }
    }
    
}