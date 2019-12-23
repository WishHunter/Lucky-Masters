!(function() {
   document.querySelectorAll('.js-scrollTo').forEach( elem => {
       elem.addEventListener('click', (evt) => {
           evt.preventDefault();
           scrollTo(elem);
       })
   });
   
   function scrollTo(elem) {
    let block;
    document.querySelectorAll(elem.dataset.scroll).forEach(el => {
        block = el;
    });  
    block.scrollIntoView({behavior: "smooth", block: "start"});
   }
})()