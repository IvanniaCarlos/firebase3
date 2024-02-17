import { showMessage } from "./show_message.js";

const loggedOutlinks = document.querySelectorAll('.logged-out');
const loggedInlinks = document.querySelectorAll('.logged-in');
const mainTaskContainer = document.getElementById ("task-main-container");

export const loginCheck = user => {
    //si el usuario existe ocultamos las bonotes necesarios
   if (user){
    loggedInlinks.forEach(link => link.style.display = 'block');
    loggedOutlinks.forEach(link => link.style.display = 'none');
    mainTaskContainer.style.display = "flex";
    showMessage('logged in', 'orange');
   }
else {
    loggedInlinks.forEach(link => link.style.display = 'none');
    loggedOutlinks.forEach(link => link.style.display = 'block');
    mainTaskContainer.style.display = "none";
    showMessage('logged out', 'orange');
    }
}