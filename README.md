# Tarea 05 Seminario: Graficos y API Consultas - RENIEC y SUNAT

## Contenido de la Tarea

### 1. Gráficos Estadísticos (Chart.js)
- `grafico1.html` - Gráfico de lenguajes de programación
- `grafico2.html` - Gráfico semanales desde JSON

### 2. Consultas API
- `busqueda-dni.html` - Búsqueda de personas por DNI
- `busqueda-ruc.html` - Búsqueda de empresas por RUC
- `server.js` - Servidor backend (evitar problemas de CORS)

## Requisitos Previos

- **Node.js** instalado (versión 14 o superior)
- **npm** (viene incluido con Node.js)
- Token de API de DeColecta ([Obtener aquí](https://decolecta.com/))

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/sandro060606/Tarea05_Seminario.git
cd Tarea05_Seminario
```

### 2. Instalar dependencias para el servidor
```bash
npm install
```
Esto instalará:
- `express` - Framework para el servidor
- `cors` - Manejo de CORS
- `node-fetch@2` - Para hacer peticiones HTTP

### 3. Configurar el Token

Abre el archivo `server.js` y reemplaza el token en la línea 8:

```javascript
const TOKEN = "TU_TOKEN_AQUI";
```

**IMPORTANTE**: No compartas tu token. El archivo `.gitignore` está configurado para proteger tus credenciales.

## Ejecución del Proyecto

### Gráficos Estadísticos (sin backend)

1. Abre los archivos HTML directamente en el navegador:
   - `grafico1.html`
   - `grafico2.html`

O usa Live Server en VS Code:
```bash
# Click derecho en el archivo → "Open with Live Server"
```

### Consultas API (requiere backend)

1. **Iniciar el servidor backend:**
```bash
node server.js
```

Deberías ver:
```
Servidor en http://localhost:3000
```

2. **Abrir los archivos HTML:**
   - `busqueda-dni.html`
   - `busqueda-ruc.html`

Puedes abrirlos directamente o usar Live Server.

3. **Probar las APIs directamente:**
   - DNI: `http://localhost:3000/api/dni/60745420`
   - RUC: `http://localhost:3000/api/ruc/20601030013`

## Uso de la Aplicación

### Búsqueda por DNI
1. Ingresa un DNI de 8 dígitos
2. Click en "Buscar Info del API"
3. Los resultados se mostrarán en formato JSON

### Búsqueda por RUC
1. Ingresa un RUC de 11 dígitos
2. Click en "Buscar Info del API"
3. Los resultados mostrarán información de la empresa

### Gráficos
**Gráfico 1:**
1. Ingresa valores en las 5 cajas de texto (lenguajes de programación)
2. Click en "Actualizar Gráfico"

**Gráfico 2:**
1. Click en "Cargar Datos desde JSON"
2. El gráfico se actualizará con datos de ventas semanales