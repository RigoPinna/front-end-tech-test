# BITACORA

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. [Adicional] Para ejecutar los testings navegar a la carpeta `front` y ejecutar el comando
    `npm run test`

## Dependencias utilizadas
- **react-router-dom**: Se utilizó esta dependencia para navegar entre páginas dentro de la aplicación.
- **redux**: Se utilizó redux para crear un estado global de la aplicación.
- **react-Redux**
- **redux-thunk**: Se utilizó redux-thunk para hacer "dispatch" de acciones asincronas.
#### Dependecias de desarrollo
- **enzyme**: Para realizar testing.
- **@wojtekmaj/enzyme-adapter-react-17**: Adaptador de pruebas especial para la versión reciente de React.
- **enzyme-to-json**: Para crear un shap shot de un componente en modo pruebas.
- **redux-mock-store**: Para crear un mock del store de redux y poder utilizarlo para hacer pruebas

## Store y types
 - **types/index.js**: Script que contiene un objeto para tipar el nombre de la aciones que se ejecutaran en los diversos reducers.
 - **store/store.js**: Script que crea el stor principal, en el se convinan los reducers personalizados y se agregan los middlewares adicionales.

## Reducers y acciones
Todos los reducer utilizados están guardados en el directorio **reducers** y las acciones que ejecutan cada uno de ellos
se encuentran el el directorio **actions**.

### [REDUCER] Products
- **reducers/products**: Guarda en el store los productos **ordenados** de manera **descendente** dependiendo de su **ranting**

### Acciones para el reducer products
Ejecuta la petición al servidor, se utiliza el `return` en la función porqué la petición es una acción asincona.
```
export const getProducts = () => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchNormal( '/products' )
            dispatch( setLoading( false ) )
            dispatch({
                type: types.addAllProducts,
                payload: [...resp],
            })
        } catch (error) {
            console.log(error)
        }
    }
}
```
### [REDUCER] Cart
- **reducers/cart**: Guarda y elimina un producto en el carrito de compras.

### Acciones para el reducer Cart
1. addSavedCart([cart] added saved cart): Extrae los productos guardados del carrito que se encuentran en el localStore, 
**si no hay productos guardados** el carrito se establece como vacío.
2. addProduct([cart] added product to cart): Guarda el producto en el carrito cuando se da clic en el botón **Add to Item Cart**.
3. deleteProduct([cart] deleted product to cart): Si la cantidad de ese productos llega a 0, elimina el producto del carrito.
3. resetCart([cart] reset product to cart): Elimina todos los productos del carrito.

### [REDUCER] Ui 
- **reducers/ui**: Ejecuta acciones relacionadas a la interfaz de usuario.

## Acciones para el reducer Ui
1. loadingPage([ui] loading page): Muestra o esconde un elemento de **Cargando...**
2. simpleAlert([ui] simple alert): Muestra y esconde una alerta simple cuando se ha agregado un producto al carrito.

