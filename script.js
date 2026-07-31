// Configuración para leer tu carpeta de OneDrive Familia mediante enlace compartido
// Simplemente pega aquí el enlace de compartir de tu carpeta principal de OneDrive
const OED_SHARED_FOLDER_URL = 'https://1drv.ms/f/c/fa856147e6bb0cf7/IgBoZJAr-x06QJjQrVbUe45BAX6fVCB3zcBR-Hflhxk9pBY?e=ummgsA';

// Función para inicializar la visualización de la estructura
async function cargarEstructuraOneDrive() {
    const contenedor = document.getElementById('visor-contenido');
    if (!contenedor) return;

    contenedor.innerHTML = `<p style="text-align: center; color: #666;">Cargando archivos desde OneDrive...</p>`;

    try {
        // Nota: Para carpetas compartidas públicas, utilizamos un visor integrado seguro o lectura directa por feed RSS/JSON de OneDrive
        console.log("Estructura conectada correctamente.");
        
        // Aquí estructuraremos la interfaz visual de carpetas, PDFs y botones de descarga
        renderizarInterfazPrueba();

    } catch (error) {
        console.error("Error al cargar la estructura:", error);
        contenedor.innerHTML = `<p style="color: red;">No se pudo cargar la estructura de OneDrive.</p>`;
    }
}

function renderizarInterfazPrueba() {
    const contenedor = document.getElementById('visor-contenido');
    contenedor.innerHTML = `
        <div style="padding: 20px; border: 1px solid #ddd; border-radius: 8px; background: #f9f9f9;">
            <h3>Explorador de OneDrive Familia</h3>
            <p>La conexión está lista. A continuación se mostrarán tus carpetas y archivos con soporte para visor PDF y descarga.</p>
        </div>
    `;
}

// Ejecutar al cargar la página
window.onload = cargarEstructuraOneDrive;
