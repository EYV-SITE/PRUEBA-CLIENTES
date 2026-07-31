const OED_SHARED_FOLDER_URL = 'https://1drv.ms/f/c/fa856147e6bb0cf7/IgBoZJAr-x06QJjQrVbUe45BAX6fVCB3zcBR-Hflhxk9pBY?e=ummgsA';

function cargarEstructuraOneDrive() {
    const contenedor = document.getElementById('visor-contenido');
    if (!contenedor) return;

    contenedor.innerHTML = `<p style="text-align: center; color: #666;">Cargando estructura de clientes...</p>`;

    setTimeout(() => {
        renderizarBotonesClientes(contenedor);
    }, 600);
}

function renderizarBotonesClientes(contenedor) {
    // Lista de clientes real basada en tus carpetas (Andinos, Arcor, ASA, Cartocor, etc.)
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
            <p style="font-size: 13px; color: #666;">Haga clic en un botón para acceder a los documentos de la carpeta correspondiente.</p>
        </div>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; max-width: 900px; margin: 0 auto;">
    `;

    clientes.forEach(cliente => {
        gridHTML += `
            <button onclick="abrirCliente('${cliente}')" style="
                background-color: #0078d4; 
                color: white; 
                border: none; 
                padding: 16px 10px; 
                border-radius: 6px; 
                font-weight: bold; 
                font-size: 14px; 
                cursor: pointer; 
                text-align: center; 
                box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
                transition: background 0.2s, transform 0.1s;
            " onmouseover="this.style.background='#005a9e'" onmouseout="this.style.background='#0078d4'">
                ${cliente}
            </button>
        `;
    });

    gridHTML += `</div><div id="visor-documentos" style="margin-top: 30px;"></div>`;
    contenedor.innerHTML = gridHTML;
}

function abrirCliente(nombreCliente) {
    const visor = document.getElementById('visor-documentos');
    visor.innerHTML = `
        <div style="background: #f8f9fa; border: 1px solid #ccd0d5; padding: 20px; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 10px 0; color: #005a9e; font-size: 18px;">📁 Documentos de: ${nombreCliente}</h4>
            <p style="font-size: 14px; color: #444; margin-bottom: 15px;">Aquí se muestran los archivos PDF e historiales vinculados a esta carpeta de OneDrive.</p>
            
            <div style="background: white; border: 1px solid #ddd; padding: 12px 15px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 14px; font-weight: 500; color: #333;">📄 Informe_Tecnico_${nombreCliente.replace(/[^a-zA-Z0-9]/g, '_')}.pdf</span>
                <a href="${OED_SHARED_FOLDER_URL}" target="_blank" style="background: #107c41; color: white; padding: 6px 14px; text-decoration: none; border-radius: 4px; font-size: 13px; font-weight: bold;">Ver / Descargar PDF</a>
            </div>
        </div>
    `;
}

window.onload = cargarEstructuraOneDrive;
