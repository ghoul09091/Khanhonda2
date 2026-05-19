import { qs } from './utils.js';
const services=[['Engine & Tune-up','Periodic tuning'],['Oil & Brake Service','Oil change + brake checks'],['General Inspection','Complete multi-point check'],['Battery Replacement','Battery and charging checks']];
const mount=qs('#featuredServices')||qs('#servicesGrid');
if(mount) mount.innerHTML=services.map(s=>`<article class='card'><h3>${s[0]}</h3><p>${s[1]}</p></article>`).join('');
