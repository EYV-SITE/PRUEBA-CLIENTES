const OED_SHARED_FOLDER_URL = 'https://1drv.ms/f/c/fa856147e6bb0cf7/IgBoZJAr-x06QJjQrVbUe45BAX6fVCB3zcBR-Hflhxk9pBY?e=ummgsA';

function cargarEstructuraOneDrive() {
    const contenedor = document.getElementById('visor-contenido');
    if (!contenedor) return;

    contenedor.innerHTML = `<p style="text-align: center; color: #666;">Cargando estructura de clientes...</p>`;

    setTimeout(() => {
        renderizarBotonesClientes(contenedor);
    }, 400);
}

function renderizarBotonesClientes(contenedor) {
    const clientes = [
        "AGROSUPER", "ANDINOS", "ARCOR", 
        "CARTOCOR", "FPC", "HAMBURGO", 
        "JBA", "KOANDINA", "LAF", 
        "MELT | PFS", "MINUTO VERDE", "NESTLE", 
        "SANDVIK", "SCALPI", "SUNSWEET", 
        "PULMAHUE", "TP to Go", "TPC CARNE", "WALMART | WAYS"
    ];

    let gridHTML = `
        <div style="margin-bottom: 20px; text-align: center;">
            <h3 style="color: #333; margin-bottom: 5px;">Seleccione un Cliente</h3>
            <p style="font-size: 13px; color: #666;">Haga clic en un cliente para consultar sus documentos asociados.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 10px; max-width: 950px; margin: 0 auto;">
    `;

    clientes.forEach(cliente => {
        gridHTML += `
            <button onclick="abrirCliente('${cliente}')" style="
                background-color: #0078d4; 
                color: white; 
                border: none; 
                padding: 12px 8px; 
                border-radius: 6px; 
                font-weight: bold; 
                font-size: 13px; 
                cursor: pointer; 
                text-align: center; 
                box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
                transition: background 0.2s;
            " onmouseover="this.style.background='#005a9e'" onmouseout="this.style.background='#0078d4'">
                ${cliente}
            </button>
        `;
    });

    gridHTML += `</div><div id="visor-documentos" style="margin-top: 25px;"></div>`;
    contenedor.innerHTML = gridHTML;
}

function abrirCliente(nombreCliente) {
    const visor = document.getElementById('visor-documentos');
    
    // Simulamos la obtención de archivos reales que luego mapearemos a tu OneDrive
    visor.innerHTML = `
        <div style="background: #ffffff; border: 1px solid #d0d7de; padding: 20px; border-radius: 8px; box-shadow: 0 3px 8px rgba(0,0,0,0.06);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px;">
                <h4 style="margin: 0; color: #005a9e; font-size: 16px;">📂 Carpeta: ${nombreCliente}</h4>
                <a href="${OED_SHARED_FOLDER_URL}" target="_blank" style="font-size: 12px; color: #0078d4; text-decoration: none;">Abrir carpeta en OneDrive ↗</a>
            </div>
            
            <p style="font-size: 13px; color: #666; margin-bottom: 12px;">Documentos disponibles en este directorio:</p>
            
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <div style="background: #f8f9fa; border: 1px solid #e1e4e8; padding: 10px 14px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 13px; font-weight: 500; color: #24292e;">📄 Especificaciones_Tecnicas_${nombreCliente.replace(/[^a-zA-Z0-9]/g, '_')}.pdf</span>
                    <a href="${OED_SHARED_FOLDER_URL}" target="_blank" style="background: #107c41; color: white; padding: 5px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: bold;">Ver / Descargar</a>
                </div>
                <div style="background: #f8f9fa; border: 1px solid #e1e4e8; padding: 10px 14px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 13px; font-weight: 500; color: #24292e;">📄 Registro_Instalacion_${nombreCliente.replace(/[^a-zA-Z0-9]/g, '_')}.pdf</span>
                    <a href="${OED_SHARED_FOLDER_URL}" target="_blank" style="background: #107c41; color: white; padding: 5px 12px; text-decoration: none; border-radius: 4px; font-size: 12px; font-weight: bold;">Ver / Descargar</a>
                </div>
            </div>
        </div>
    `;
}

window.onload = cargarEstructuraOneDrive;
