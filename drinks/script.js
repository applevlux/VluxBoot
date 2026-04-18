async function loadJSON(a) {
  try {
    // a is the location of the json file
      const listicle = await fetch(a);
      if(!listicle.ok) throw new Error('Json Not Found: ${listicle.status}');
      const cleanList = await listicle.json();    

      cleanList.forEach(item => {

        const tierdiv = item.tier + "-tier";
        const tinytext = document.getElementById('small-'+ tierdiv);
        const output = document.getElementById(tierdiv);

       if(tinytext != null){tinytext.remove();}
        output.innerHTML += '<div class="justify-content-center d-md-flex flex-md-row mx-lg-auto mx-1 mb-3"><div class="text-center text-lg-start"><div><h2>' + item.name + '</h2> </div><img src="/src/drink/src/' + item.img + '" class="rounded-1" style="max-width: 150px; max-height: 150px;"></div><br><div class="gap-0 px-3 pt-md-5 text-wrap funcrumple text-center"><p>'+ item.desc +'</p><a href="'+ item.link +'" style="color:var(--accent);">'+ item.linkmsg +'</a></div></div>';
      });
  }
catch (err) {
    console.error(err);
            }
}

function getPath() {
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/') + 1);
  filename = filename.replace(".html", "");
  return filename;
}

document.addEventListener('DOMContentLoaded', function() {

    const maks = "../src/drink/maks.json"
    const taffy = "../src/drink/taffy.json"

switch (getPath())  {
    case "cowtaffy":
      loadJSON(taffy);
      break;
    default:
      loadJSON(maks)
}




      



/*
        <div class="justify-content-center d-md-flex flex-md-row mx-lg-auto mx-5 mb-3">
                <div class="text-center text-lg-start">
                   <div><h2>${name}</h2> <small class="text-secondary">${date}</small></div>
                <img src="/src/drink/src/${img}" class="rounded-1" style="max-width: 150px; max-height: 150px;">
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