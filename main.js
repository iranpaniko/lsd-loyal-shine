document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("bookingForm");
  
  const nombre = document.getElementById("nombre");
  const vehiculo = document.getElementById("vehiculo");
  const servicio = document.getElementById("servicio");
  const fecha = document.getElementById("fecha");
  const hora = document.getElementById("hora");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar la página
    
    const mensaje = `
🔥 CITA LSD – Loyal Shine Detailing 🔥
Nombre: ${nombre.value}
Vehículo: ${vehiculo.value}
Servicio: ${servicio.value}
Fecha: ${fecha.value}
Hora: ${hora.value}
    `;
    
    const telefono = "529848066658";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, "_blank");
  });
  
});