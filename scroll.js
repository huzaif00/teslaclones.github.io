document.lastScrollPosition=0;
document.lastCenterd=0;
document.onWayTo=null;

document.addEventListener('scroll', () =>{
    const direction=window.pageYOffset-document.lastScrollPosition > 0 ? 'down' : 'up';
    const section=[...document.querySelectorAll('section')];
    


    if(document.onWayTo==null){
    const destIndex = direction === 'up' ? document.lastCenterd - 1 : document.lastCenterd + 1
    if(destIndex>=0 && destIndex<section.length){
        document.onWayTo=destIndex
        window.scroll(0,section[destIndex].offsetTop)
    }}



    section.forEach((section,index)=>{
        if(window.pageYOffset === section.offsetTop){
            document.lastCenterd=index;
            section.className='active';
            if(document.onWayTo==index){
                document.onWayTo=null
            }
        }
        else{
            section.className=''
        }
    }
    )
    
    document.lastScrollPosition= window.pageYOffset

})