!(function() {
   document.querySelectorAll('.js-scrollTo').forEach( elem => {
       elem.addEventListener('click', (evt) => {
           evt.preventDefault();
           scrollTo(elem);
       })
   });
   
   function scrollTo(elem) {
    let block = document.querySelector(elem.dataset.scroll);
    console.log(block);
    block.scrollIntoView({behavior: "smooth", block: "start"});
   }
})()