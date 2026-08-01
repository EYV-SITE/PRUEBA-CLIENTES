const OED_SHARED_FOLDER_URL = 'https://1drv.ms/f/c/fa856147e6bb0cf7/IgBoZJAr-x06QJjQrVbUe45BAX6fVCB3zcBR-Hflhxk9pBY?e=ummgsA';

// Estructura de prueba con carpetas y archivos definidos
const estructuraDatos = {
    "AGROSUPER": {
        tipo: "carpeta",
        contenido: {
            "Planos y Diseños": {
                tipo: "carpeta",
                contenido: {
                    "Plano_Estructural_Agrosuper.dwg": { tipo: "dwg", url: "#" },
                    "Memoria_Calculo.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
                }
            },
            "Informes Técnicos": {
                tipo: "carpeta",
                contenido: {
                    "Informe_Inspeccion_2026.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Registro_Metricas.xls": { tipo: "xls", url: "#" }
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
                    "Contrato_Servicios_Walmart.doc": { tipo: "doc", url: "#" },
                    "Anexo_Firmado.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }
                }
            }
        }
    }
};

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
        obj[c] = estructuraDatos[c] || {
            tipo: "carpeta",
            contenido: {
                "Documentacion General": {
                    tipo: "carpeta",
                    contenido: {
                        [`Especificaciones_${c.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`]: { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                        [`Planilla_Control_${c.replace(/[^a-zA-Z0-9]/g, '_')}.xls`]: { tipo: "xls", url: "#" },
                        [`Plano_Instalacion_${c.replace(/[^a-zA-Z0-9]/g, '_')}.dwg`]: { tipo: "dwg", url: "#" }
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

    if (historialNavegacion.length > 0) {
        html += `
            <div style="max-width: 950px; margin: 0 auto 15px auto; text-align: left;">
                <button onclick="volverAtras()" style="background: #6c757d; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 13px;">
                    ← Volver atrás
                </button>
            </div>
        `;
    }

    html += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; max-width: 950px; margin: 0 auto;">`;

    for (let nombre in datosActuales) {
        let elemento = datosActuales[nombre];
        if (elemento.tipo === "carpeta") {
            // Botón limpio sin icono de carpeta amarilla
            html += `
                <button onclick="ingresarCarpeta('${nombre}')" style="
                    background-color: #0078d4; color: white; border: none; padding: 16px 12px; border-radius: 6px; 
                    font-weight: bold; font-size: 13px; cursor: pointer; text-align: center; 
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: background 0.2s;
                " onmouseover="this.style.background='#005a9e'" onmouseout="this.style.background='#0078d4'">
                    ${nombre}
                </button>
            `;
        } else {
            // Archivo limpio con solo su icono y nombre
            let icono = obtenerIconoArchivo(elemento.tipo);
            html += `
                <div onclick="manejarArchivo('${nombre}', '${elemento.tipo}', '${elemento.url}')" style="
                    background: white; border: 1px solid #d0d7de; padding: 14px; border-radius: 6px; cursor: pointer;
                    display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                    transition: transform 0.1s, box-shadow 0.1s;
                " onmouseover="this.style.boxShadow='0 3px 6px rgba(0,0,0,0.1)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)'">
                    <span style="font-size: 24px;">${icono}</span>
                    <span style="font-size: 13px; font-weight: 500; color: #24292e; word-break: break-word;">${nombre}</span>
                </div>
            `;
        }
    }

    html += `</div><div id="modal-visor" style="margin-top: 25px; max-width: 950px; margin-left: auto; margin-right: auto;"></div>`;
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
    const modal = document.getElementById('modal-visor');
    if (tipo === 'pdf') {
        // Previsualización web directa limpia integrada en la página sin mostrar OneDrive
        modal.innerHTML = `
            <div style="background: white; border: 1px solid #ccc; padding: 15px; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h4 style="margin: 0; color: #d83b01;">Previsualización: ${nombre}</h4>
                    <button onclick="document.getElementById('modal-visor').innerHTML=''" style="background: #ccc; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-weight: bold;">Cerrar ✕</button>
                </div>
                <iframe src="${url}" style="width: 100%; height: 500px; border: 1px solid #ddd; border-radius: 4px;"></iframe>
            </div>
        `;
    } else {
        // Ventana emergente indicando iniciar descarga para DOC, XLS, DWG
        let confirmar = confirm(`Iniciar Descarga:\n¿Desea descargar el archivo "${nombre}"?`);
        if (confirmar) {
            // Simulación de descarga directa limpia
            let a = document.createElement('a');
            a.href = url;
            a.download = nombre;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
}

window.onload = cargarEstructuraOneDrive;
