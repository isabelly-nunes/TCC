function mostraImagem(event){
    event.preventDefault();
    const image=document.querySelector('.img-osso');
    if(image.style.display==='none'){
        image.style.display='block';
    }else{
        image.style.display='none';
    }
    window.location.href=event.target.href;
}