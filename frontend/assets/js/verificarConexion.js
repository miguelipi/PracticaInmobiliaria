document.addEventListener("DOMContentLoaded", async () => {
    const conexionStatusDiv = document.getElementById('conexionStatus');
    
    try {
      const response = await fetch('/config/testConnection');
      const data = await response.json();
  
      if (data.success) {
        conexionStatusDiv.innerHTML = `<p style="color: green;">${data.message}</p>`;
      } else {
        conexionStatusDiv.innerHTML = `<p style="color: red;">${data.message}</p>`;
      }
    } catch (error) {
      console.error('Error al conectar al servidor:', error);
      conexionStatusDiv.innerHTML = `<p style="color: red;">Hubo un error al verificar la conexión.</p>`;
    }
  });
  