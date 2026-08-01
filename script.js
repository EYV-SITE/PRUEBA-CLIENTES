const OED_SHARED_FOLDER_URL = 'https://1drv.ms/f/c/fa856147e6bb0cf7/IgBoZJAr-x06QJjQrVbUe45BAX6fVCB3zcBR-Hflhxk9pBY?e=ummgsA';

// Estructura simulada de carpetas y archivos por cliente (puedes adaptarla o conectarla con tu OneDrive)
const estructuraDatos = {
    "AGROSUPER": {
        tipo: "carpeta",
        contenido: {
            "Planos y Diseños": {
                tipo: "carpeta",
                contenido: {
                    "Plano_Estructural_Agrosuper.dwg": { tipo: "dwg", url: OED_SHARED_FOLDER_URL },
                    "Memoria_Calculo.pdf": { tipo: "pdf", url: OED_SHARED_FOLDER_URL }
                }
            },
            "Informes Técnicos": {
                tipo: "carpeta",
                contenido: {
                    "Informe_Inspeccion_2026.pdf": { tipo: "pdf", url: OED_SHARED_FOLDER_URL },
                    "Registro_Metricas.xls": { tipo: "xls", url: OED_SHARED_FOLDER_URL }
                }
            }
        }
    },
    "WALMART | WAYS": {
        tipo: "carpeta",
        contenido: {
            "Contratos y Acuerdos": {
                tipo: "carpeta",
                contenido: {
                    "Contrato_Servicios_Walmart.doc": { tipo: "doc", url: OED_SHARED_FOLDER_URL },
                    "Anexo_Firmado.pdf": { tipo: "pdf", url: OED_SHARED_FOLDER_URL }
                }
            }
        }
    }
};

// Historial de navegación para el botón "Volver atrás"
let historialNavegacion = [];
let datosActuales = null;
let tituloActual = "Seleccione un Cliente";

function cargarEstructuraOneDrive() {
    historialNavegacion = [];
    datosActuales = obtenerListaClientesBase();
    tituloActual = "Seleccione un Cliente";
    renderizarVista();
}

function obtenerListaClientesBase() {
    const clientesNombres = [
        "AGROSUPER", "ANDINOS", "ARCOR", 
        "CARTOCOR", "FPC", "HAMBURGO", 
        "JBA", "KOANDINA", "LAF", 
        "MELT | PFS", "MINUTO VERDE", "NESTLE", 
        "SANDVIK", "SCALPI", "SUNSWEET", 
        "PULMAHUE", "TP to Go", "TPC CARNE", "WALMART | WAYS"
    ];
    let obj = {};
    clientesNombres.forEach(c => {
        // Si ya existe en estructuraDatos usamos esa, sino creamos una por defecto para la demo
        obj[c] = estructuraDatos[c] || {
            tipo: "carpeta",
            contenido: {
                "Documentacion General": {
                    tipo: "carpeta",
                    contenido: {
                        [`Especificaciones_${c.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`]: { tipo: "pdf", url: OED_SHARED_FOLDER_URL },
                        [`Planilla_Control_${c.replace(/[^a-zA-Z0-9]/g, '_')}.xls`]: { tipo: "xls", url: OED_SHARED_FOLDER_URL },
                        [`Plano_Instalacion_${c.replace(/[^a-zA-Z0-9]/g, '_')}.dwg`]: { tipo: "dwg", url: OED_SHARED_FOLDER_URL }
                    }
                }
            }
        };
    });
    return obj;
}

function renderizarVista() {
    const contenedor = document.getElementById('visor-contenido');
    if (!contenedor) return;

    let html = `
        <div style="margin-bottom: 20px; text-align: center;">
            <h3 style="color: #333; margin-bottom: 5px;">${tituloActual}</h3>
            <p style="font-size: 13px; color: #666;">Navegue a través de las carpetas para acceder a los archivos.</p>
        </div>
    `;

    // Botón Volver Atrás si estamos dentro de una carpeta
    if (historialNavegacion.length > 0) {
        html += `
            <button onclick="volverAtras()" style="background: #6c757d; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; font-weight: bold; margin-bottom: 15px; font-size: 13px;">
                ← Volver atrás
            </button>
        `;
    }

    html += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; max-width: 950px; margin: 0 auto;">`;

    for (let nombre in datosActuales) {
        let elemento = datosActuales[nombre];
        if (elemento.tipo === "carpeta") {
            html += `
                <button onclick="ingresarCarpeta('${nombre}')" style="
                    background-color: #0078d4; color: white; border: none; padding: 16px 12px; border-radius: 6px; 
                    font-weight: bold; font-size: 13px; cursor: pointer; text-align: left; display: flex; align-items: center; gap: 10px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: background 0.2s;
                " onmouseover="this.style.background='#005a9e'" onmouseout="this.style.background='#0078d4'">
                    <span style="font-size: 18px;">📁</span>
                    <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${nombre}</span>
                </button>
            `;
        } else {
            // Es un archivo (pdf, doc, xls, dwg)
            let icono = obtenerIconoArchivo(elemento.tipo);
            let colorFondo = elemento.tipo === 'pdf' ? '#d83b01' : '#107c41';
            html += `
                <div onclick="manejarArchivo('${nombre}', '${elemento.tipo}', '${elemento.url}')" style="
                    background: white; border: 1px solid #d0d7de; padding: 14px; border-radius: 6px; cursor: pointer;
                    display: flex; flex-direction: column; justify-content: space-between; gap: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                    transition: transform 0.1s, box-shadow 0.1s;
                " onmouseover="this.style.boxShadow='0 3px 6px rgba(0,0,0,0.1)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)'">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 22px;">${icono}</span>
                        <span style="font-size: 13px; font-weight: 500; color: #24292e; word-break: break-word;">${nombre}</span>
                    </div>
                    <span style="background: ${colorFondo}; color: white; text-align: center; padding: 5px; border-radius: 4px; font-size: 11px; font-weight: bold;">
                        ${elemento.tipo === 'pdf' ? 'Previsualizar PDF' : 'Descargar Archivo'}
                    </span>
                </div>
            `;
        }
    }

    html += `</div>`;
    contenedor.innerHTML = html;
}

function ingresarCarpeta(nombreCarpeta) {
    historialNavegacion.push({ datos: datosActuales, titulo: tituloActual });
    datosActuales = datosActuales[nombreCarpeta].contenido;
    tituloActual = nombreCarpeta;
    renderizarVista();
}

function volverAtras() {
    if (historialNavegacion.length > 0) {
        let anterior = historialNavegacion.pop();
        datosActuales = anterior.datos;
        tituloActual = anterior.titulo;
        renderizarVista();
    }
}

function obtenerIconoArchivo(tipo) {
    switch(tipo) {
        case 'pdf': return '📄';
        case 'doc': return '📝';
        case 'xls': return '📊';
        case 'dwg': return '📐';
        default: return '📎';
    }
}

function manejarArchivo(nombre, tipo, url) {
    if (tipo === 'pdf') {
        // Previsualización web directa sin preguntar
        window.open(url, '_blank');
    } else {
        // Preguntar si desea descargar para DOC, XLS, DWG
        let confirmar = confirm(`¿Deseas descargar el archivo "${nombre}"?`);
        if (confirmar) {
            window.open(url, '_blank');
        }
    }
}

window.onload = cargarEstructuraOneDrive;
