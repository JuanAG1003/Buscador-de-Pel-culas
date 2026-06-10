# Buscador de Películas Web

Aplicación web interactiva para buscar películas en tiempo real mediante el consumo de una API externa, con un fuerte enfoque en la optimización de rendimiento.

## Características Principales

* Búsqueda en tiempo real altamente optimizada para no saturar el servidor.
* Interfaz 100% responsiva implementando CSS Grid.
* Feedback visual interactivo mediante loaders durante los estados de carga.

## Tecnologías Utilizadas

* **React** (v18+ / Vite)
* **JavaScript** (ES6+)
* **Manejo de Estilos:** CSS Modules
* **Librerías Adicionales:** `useDebounce`
* **Calidad de Código:** ESLint (Neostandard)

## 📦 Instalación y Configuración

1. Clona este repositorio:
```bash
git clone https://github.com/JuanAG1003/Buscador-de-Pel-culas
```
2. Navega a la carpeta del proyecto:
```bash
cd Buscador-de-Pel-culas
```
3. Instala las dependencias:
```bash
npm install
```
4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Aprendizajes Clave y Desafíos
* Conceptos Practicados: Fetching de datos asíncronos, renderizado dinámico de arreglos y destructuración de objetos.

* Desafío Técnico Resuelto: Prevenir llamadas excesivas a la API cada vez que el usuario tecleaba. Lo resolví implementando la librería useDebounce combinada con el hook useCallback para memorizar la función de búsqueda y mejorar radicalmente el rendimiento.