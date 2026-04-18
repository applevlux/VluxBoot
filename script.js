async function loadComponent(id, file) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  }

async function copy88x31() {
  const btn = document.getElementById('btn');
  
  if (btn) {
    btn.addEventListener('click', async function(e) {
      e.preventDefault();
      
      const htmlString = '<a href="https://applevlux.com"><img src="https://applevlux.com/src/88x31/applevlux.gif" height="31"></a>';
      
      try {
        await navigator.clipboard.writeText(htmlString);
        alert('HTML copied to Clipboard');
      } catch (err) {
        console.error("failed to copy", err)
      }
    });
  }

}




document.addEventListener('DOMContentLoaded', function() {
  
  loadComponent('navbar', '/src/components/navbar.html');
  loadComponent('footer', '/src/components/footer.html');
  
  copy88x31();
});