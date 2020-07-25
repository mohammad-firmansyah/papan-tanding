import {getStandings,getSavedTeams} from './api.js';

let page = window.location.hash.substr(1)
if(page === "") page = "home";
loadPage(page)


function loadPage(page){
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            let content = document.querySelector('#main')
            
            if(this.status === 200) {
                

                if (page === 'klassmen') {
                    getStandings()
                } 

                else if(page === 'saved') {
                    getSavedTeams();

                }

                else if(page === 'home') {

                    content.innerHTML = this.responseText
                }
                

            }
        } else{ 
            document.querySelector('#main').innerHTML = `
            <div class="container">
            <div class="row">
                <div class="col s5 m5"></div>
                <div class="col s2 m2">
                   <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                      <div class="circle-clipper left">
                        <div class="circle"></div>
                      </div><div class="gap-patch">
                        <div class="circle"></div>
                      </div><div class="circle-clipper right">
                        <div class="circle"></div>
                      </div>
                    </div>
                  </div> 
                </div>
                <div class="col s5 m5"></div>
            </div>
            </div>
        `
        }
    }

    xhr.open('GET','/src/pages/' + page + ".html",true)
    xhr.send()
}

export {loadPage}