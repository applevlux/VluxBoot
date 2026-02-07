document.addEventListener('DOMContentLoaded', function() {
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
});