const openmenu=() => {
    document.querySelector('.backdrop').className='backdrop active';
    document.querySelector('aside').className='active';
    
}
const closemenu=() => {
    document.querySelector('.backdrop').className='backdrop';
    document.querySelector('aside').className='';
    
}

document.getElementById('menubtn').onclick = e => {
    e.preventDefault();
    openmenu();
}
document.querySelector('aside button.close').onclick= e => {
    closemenu()
}
document.querySelector('backdrop').onclick= e => {
    closemenu()
}
