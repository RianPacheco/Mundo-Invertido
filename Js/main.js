import { subscriptionHellfireClub } from './firebase/hellfire-clube.js';

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

const btnSubscripe = document.getElementById('btnSubscripe');

btnSubscripe.addEventListener('click', () => {
    const subscription ={
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value 
    }
    subscriptionHellfireClub(subscription)
})