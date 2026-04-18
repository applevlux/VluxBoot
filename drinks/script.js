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
        output.innerHTML += '<div><button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-70,"><div style="position: relative; width: 100%; max-width: 14rem;"><img src="/src/icons/blank.webp" style="width: 100%; height: auto; filter: blur(0.2rem) brightness(80%);"><div class="position-absolute start-50 translate-middle" style="top: 50%;"><img src="/src/drink/src/' + item.img + '" style="max-width: 13rem;"></div></div></button><ul class="dropdown-menu px-3" style="max-width: 24rem;"><li><h4 class="dropdown-header">' + item.name + '</h4></li><p>' + item.desc + '</p></ul></div>';
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
<div>
<button class="" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-70,">
    <div style="position: relative; width: 100%; max-width: 14rem;">
        <img src="/src/icons/blank.webp" style="width: 100%; height: auto; filter: blur(0.2rem) brightness(80%);">
  <div class="position-absolute start-50 translate-middle" style="top: 50%;">
        <img src="/src/drink/src/MWhite.webp" style="max-width: 13rem;">
  </div>
    </div>
</button>
<ul class="dropdown-menu px-3" style="max-width: 24rem;">
    <li><h4 class="dropdown-header"></h4></li>
<p></p>
  </ul>
</div>

*/

// <small class="text-secondary">nothing here yet</small>

});