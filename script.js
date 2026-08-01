// Estructura multinivel real: carpetas, subcarpetas y archivos finales
const estructuraDatos = {
    "Andinos": {
        tipo: "carpeta",
        contenido: {
            "Ingeniería y Proyectos": {
                tipo: "carpeta",
                contenido: {
                    "Planos": {
                        tipo: "carpeta",
                        contenido: {
                            "Plano_Instalacion_Andinos.dwg": { tipo: "dwg", url: "#" }
                        }
                    },
                    "Especificaciones_Andinos.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_Andinos.xls": { tipo: "xls", url: "#" }
                }
            }
        }
    },
    "Arcor": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_Arcor.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_Arcor.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_Arcor.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "ASA": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_ASA.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_ASA.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_ASA.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "Cartocor": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_Cartocor.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_Cartocor.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_Cartocor.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "Electrolux": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_Electrolux.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_Electrolux.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_Electrolux.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "FPC": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_FPC.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_FPC.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_FPC.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "Hamburgo": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_Hamburgo.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_Hamburgo.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_Hamburgo.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "LAF": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_LAF.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_LAF.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_LAF.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "Manuales Fanuc": {
        tipo: "carpeta",
        contenido: {
            "Manual_Operacion_Fanuc.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
            "Parametros_Fanuc.xls": { tipo: "xls", url: "#" }
        }
    },
    "Minuto Verde": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_MinutoVerde.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_MinutoVerde.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_MinutoVerde.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "TPC": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_TPC.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_TPC.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_TPC.dwg": { tipo: "dwg", url: "#" }
                }
            }
        }
    },
    "Walmart": {
        tipo: "carpeta",
        contenido: {
            "Documentacion General": {
                tipo: "carpeta",
                contenido: {
                    "Especificaciones_Walmart.pdf": { tipo: "pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
                    "Planilla_Control_Walmart.xls": { tipo: "xls", url: "#" },
                    "Plano_Instalacion_Walmart.dwg": { tipo: "dwg", url: "#" }
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
    datosActuales = estructuraDatos;
    tituloActual = "Seleccione un Cliente";
    renderizarVista();
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
                <button onclick="volverAtras()" style="background: #6c757d; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 12px;">
                    ← Volver atrás
                </button>
            </div>
        `;
    }

    html += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; max-width: 950px; margin: 0 auto;">`;

    for (let nombre in datosActuales) {
        let elemento = datosActuales[nombre];
        if (elemento.tipo === "carpeta") {
            html += `
                <button onclick="ingresarCarpeta('${nombre}')" style="
                    background-color: #0078d4; color: white; border: none; padding: 12px 10px; border-radius: 6px; 
                    font-weight: bold; font-size: 13px; cursor: pointer; text-align: center; 
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: background 0.2s;
                " onmouseover="this.style.background='#005a9e'" onmouseout="this.style.background='#0078d4'">
                    📁 ${nombre}
                </button>
            `;
        } else {
            let icono = obtenerIconoArchivo(elemento.tipo);
            html += `
                <div onclick="manejarArchivo('${nombre}', '${elemento.tipo}', '${elemento.url}')" style="
                    background: white; border: 1px solid #d0d7de; padding: 10px 12px; border-radius: 6px; cursor: pointer;
                    display: flex; align-items: center; gap: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                    transition: transform 0.1s, box-shadow 0.1s;
                " onmouseover="this.style.boxShadow='0 3px 6px rgba(0,0,0,0.1)'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,0.05)'">
                    <span style="font-size: 20px;">${icono}</span>
                    <span style="font-size: 12px; font-weight: 500; color: #24292e; word-break: break-word;">${nombre}</span>
                </div>
            `;
        }
    }

    html += `</div><div id="modal-visor" style="margin-top: 20px; max-width: 950px; margin-left: auto; margin-right: auto;"></div>`;
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
    if (tipo === 'pdf' && url !== '#') {
        modal.innerHTML = `
            <div style="background: white; border: 1px solid #ccc; padding: 15px; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <h4 style="margin: 0; color: #d83b01; font-size: 14px;">Previsualización: ${nombre}</h4>
                    <button onclick="document.getElementById('modal-visor').innerHTML=''" style="background: #ccc; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 12px;">Cerrar ✕</button>
                </div>
                <embed src="${url}" type="application/pdf" width="100%" height="500px" style="border: 1px solid #ddd; border-radius: 4px;" />
            </div>
        `;
    } else {
        let confirmar = confirm(`¿Desea descargar el archivo "${nombre}"?`);
        if (confirmar) {
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
