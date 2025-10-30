// Minimal site JS for nav toggle and scroll-to-top
(function(){
  var toggle=document.getElementById('navToggle');
  var links=document.getElementById('navLinks');
  if(toggle && links){
    toggle.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    document.addEventListener('click',function(e){
      if(!links.contains(e.target) && e.target!==toggle && links.classList.contains('open')){
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape' && links.classList.contains('open')){
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.focus();
      }
    });
  }
  var toTop=document.getElementById('toTop');
  if(toTop){
    toTop.addEventListener('click',function(){
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }
})();

