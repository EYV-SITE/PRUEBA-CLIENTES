const OED_SHARED_FOLDER_URL = 'https://1drv.ms/f/c/fa856147e6bb0cf7/IgBoZJAr-x06QJjQrVbUe45BAX6fVCB3zcBR-Hflhxk9pBY?e=ummgsA';

// Función para inicializar la visualización de la estructura y simular la carga interactiva
async function cargarEstructuraOneDrive() {
    const contenedor = document.getElementById('visor-contenido');
    if (!contenedor) return;

    contenedor.innerHTML = `<p style="text-align: center; color: #666;">Conectando con la estructura de carpetas...</p>`;

    try {
        // Simulamos la respuesta de lectura de directorios para la interfaz de prueba
        setTimeout(() => {
            renderizarExploradorFuncional(contenedor);
        }, 800);

    } catch (error) {
        console.error("Error al cargar la estructura:", error);
        contenedor.innerHTML = `<p style="color: red; text-align: center;">No se pudo cargar la estructura de OneDrive.</p>`;
    }
}

function renderizarExploradorFuncional(contenedor) {
    contenedor.innerHTML = `
        <div style="background: white; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); overflow: hidden;">
            <div style="background: #f1f1f1; padding: 12px 20px; font-weight: bold; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between; align-items: center;">
                <span>📂 Carpeta Raíz / Clientes</span>
                <span style="font-size: 12px; color: #666; font-weight: normal;">OneDrive Familia</span>
            </div>
            <div style="padding: 10px 0;">
                <div class="item-fila" onclick="abrirCarpeta('Carpeta Clientes A-M')" style="padding: 12px 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; cursor: pointer; transition: background 0.2s;">
                    <span style="font-size: 20px; margin-right: 15px;">📁</span>
                    <span style="flex-grow: 1; font-weight: 500; color: #0078d4;">Carpeta Clientes A-M</span>
                    <span style="font-size: 12px; color: #888;">Carpeta</span>
                </div>
                <div class="item-fila" onclick="abrirCarpeta('Carpeta Clientes N-Z')" style="padding: 12px 20px; border-bottom: 1px solid #eee; display: flex; align-items: center; cursor: pointer; transition: background 0.2s;">
                    <span style="font-size: 20px; margin-right: 15px;">📁</span>
                    <span style="flex-grow: 1; font-weight: 500; color: #0078d4;">Carpeta Clientes N-Z</span>
                    <span style="font-size: 12px; color: #888;">Carpeta</span>
                </div>
                <div class="item-fila" onclick="verPDF('Informe_Tecnico_Ejemplo.pdf')" style="padding: 12px 20px; display: flex; align-items: center; cursor: pointer; transition: background 0.2s;">
                    <span style="font-size: 20px; margin-right: 15px;">📄</span>
                    <span style="flex-grow: 1; font-weight: 500; color: #d83b01;">Informe_Tecnico_Ejemplo.pdf</span>
                    <span style="background: #0078d4; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">Ver / Descargar PDF</span>
                </div>
            </div>
        </div>
        <div id="vista-previa" style="margin-top: 20px;"></div>
    `;
}

function abrirCarpeta(nombreCarpeta) {
    const visor = document.getElementById('vista-previa');
    visor.innerHTML = `
        <div style="background: #eef6ff; border: 1px solid #b3d7ff; padding: 15px; border-radius: 6px;">
            <h4 style="margin: 0 0 8px 0; color: #004578;">Contenido de: ${nombreCarpeta}</h4>
            <p style="margin: 0; font-size: 14px; color: #333;">Aquí se desplegarán las subcarpetas y archivos específicos vinculados a este directorio de tu OneDrive.</p>
        </div>
    `;
}

function verPDF(nombreArchivo) {
    const visor = document.getElementById('vista-previa');
    visor.innerHTML = `
        <div style="background: #fff; border: 1px solid #ccc; padding: 15px; border-radius: 6px; text-align: center;">
            <h4 style="margin: 0 0 10px 0; color: #d83b01;">Visualizando: ${nombreArchivo}</h4>
            <p style="font-size: 13px; color: #666; margin-bottom: 10px;">El archivo PDF está listo para abrirse en el visor integrado o descargarse directamente.</p>
            <a href="${OED_SHARED_FOLDER_URL}" target="_blank" style="background: #107c41; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; font-size: 14px; display: inline-block;">Abrir en OneDrive / Descargar</a>
        </div>
    `;
}

window.onload = cargarEstructuraOneDrive;
