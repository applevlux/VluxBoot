document.addEventListener('DOMContentLoaded', function() {

const jsonDir = "/src/drink/maks.json"

  fetch(jsonDir)
      .then(response => response.json())
      .then(entry => {
        
        const tierdiv = "${tier}-tier"

       entry.forEach(id => {
          
        });




      });








/*
        <div class="justify-content-center d-md-flex flex-md-row mx-lg-auto mx-5 mb-3">
                <div class="text-center text-lg-start">
                   <div><h2>${name}</h2> <small class="text-secondary">${date}</small></div>
                <img src="/src/drink/src/${img}" class="rounded-1" style="max-width: 200px; max-height: 200px;">
                </div>
  <br>
            <div class="gap-0 px-3 pt-md-5 text-wrap funcrumple text-center">
                <p>${desc}</p>
                <a href="${link}" style="color:var(--accent);">${linkmsg}</a>
            </div>
      </div>
*/

// <small class="text-secondary">nothing here yet</small>

});