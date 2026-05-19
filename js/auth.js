import { auth } from './firebase-config.js';import { signInWithEmailAndPassword,onAuthStateChanged,signOut } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';import { qs, toast } from './utils.js';
if(qs('#loginForm'))qs('#loginForm').addEventListener('submit',async(e)=>{e.preventDefault();try{await signInWithEmailAndPassword(auth,qs('#email').value,qs('#password').value);location.href='admin.html';}catch(err){toast(err.message);}});
export const guardAdmin=()=>onAuthStateChanged(auth,u=>{if(!u)location.href='login.html';});
export const doLogout=()=>signOut(auth).then(()=>location.href='login.html');
