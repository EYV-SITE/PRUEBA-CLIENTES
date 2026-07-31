// Configuración de Microsoft Graph API para OneDrive Familia
const CLIENT_ID = 'TU_CLIENT_ID_DE_AZURE'; // Lo obtendremos al registrar la app de prueba
const REDIRECT_URI = window.location.origin + window.location.pathname;
const SCOpes = 'Files.Read.All User.Read';

// Función para iniciar sesión con la cuenta de OneDrive Familia
function loginWithMicrosoft() {
    window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOpes)}`;
}

// Obtener el token de acceso desde la URL después del login
function getAccessTokenFromUrl() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');
}

// Función principal para listar la carpeta raíz de OneDrive
async function cargarEstructuraOneDrive() {
    const accessToken = getAccessTokenFromUrl();
    
    if (!accessToken) {
        console.log("No hay sesión activa en OneDrive. Se requiere inicio de sesión.");
        // Aquí mostraremos un botón para que inicies sesión la primera vez
        return;
    }

    try {
        // Consultar la raíz de OneDrive (o una carpeta específica)
        let response = await fetch('https://graph.microsoft.com/v1.0/me/drive/root/children', {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        
        let data = await response.json();
        console.log("Estructura de OneDrive obtenida:", data.value);
        
        // Aquí procesaremos los elementos para mostrarlos en pantalla
        renderizarElementos(data.value);

    } catch (error) {
        console.error("Error al conectar con OneDrive:", error);
    }
}
