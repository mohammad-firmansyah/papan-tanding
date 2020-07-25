import {loadPage} from './js/pages.js'

document.addEventListener("DOMContentLoaded", function() {

    let elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();
   
    function loadNav() {
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
          if (this.status != 200) return
   
          document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
            elm.innerHTML = xhr.responseText
          });

        
        document.querySelectorAll('.sidenav , .topnav').forEach(function(e){
            e.addEventListener('click',function(event){

                let sidenav = document.querySelector('.sidenav')
                M.Sidenav.getInstance(sidenav).close();

                    let page = event.target.getAttribute("href").substr(1);
                    loadPage(page);
            })
        })
        }
      };
      xhr.open("GET", "/src/nav.html", true);
      xhr.send();
    }
  });

// document.addEventListener("popstate", function() {

//     var elems = document.querySelectorAll(".sidenav");
//     M.Sidenav.init(elems);
//     loadNav();
   
//     function loadNav() {
//       var xhr = new XMLHttpRequest();
//       xhr.onreadystatechange = function() {
//         if (this.readyState === 4) {
//           if (this.status != 200) return
   
//           document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
//             elm.innerHTML = xhr.responseText
//           });

        
//         document.querySelectorAll('.sidenav , .topnav').forEach(function(e){
//             e.addEventListener('click',function(event){

//                 var sidenav = document.querySelector('.sidenav')
//                 M.Sidenav.getInstance(sidenav).close();

//                     page = event.target.getAttribute("href").substr(1);
//                     loadPage(page);
//             })
//         })
//         }
//       };
//       xhr.open("GET", "/src/nav.html", true);
//       xhr.send();
//     }
//   });