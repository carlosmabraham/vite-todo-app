

/**
 * 
 * @param {String} elementId pasamos el div donde queremos que se renderise nuestra aplicacion
 */
export const App = ( elementId ) => {
    (() => {
        const app = document.createElement('div');
        app.innerHTML = '<h1>Hola Mundo</h1>';
        document.querySelector( elementId ).append( app );
    })();
}