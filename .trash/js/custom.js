$(function(){
  // code syntax highlight
  hljs.configure({ tabReplace: "  " });
  hljs.initHighlightingOnLoad();
  // target _blank for out link
  console.log($(document.links).length);
  $(document.links).filter(function() {
      return this.hostname != window.location.hostname;
  }).attr('target', '_blank');
  // navbar activate
  $("div.blog-masthead nav a").each(function(){
    var nowpathname = "/"+$(this).text().toLowerCase()+"/";
    if (location.pathname === nowpathname) {
      $(this).addClass("active");
    }
  });
});

