export const qs=(s,p=document)=>p.querySelector(s);export const qsa=(s,p=document)=>[...p.querySelectorAll(s)];
export const nowISO=()=>new Date().toISOString();
export const toast=(m)=>alert(m);
export const cacheSet=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
export const cacheGet=(k,d)=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d));
