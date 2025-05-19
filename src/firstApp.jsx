//Página de exemplo para o app hello word donde hemos realizado un primer ejercicio de mostrar un mensaje en la página de inicio y luego lo hemos cambiado por un mensaje de bienvenida.

//-----------------


//const newMessage = 'Javi Lazaro' // Este componente no será re-renderizado de nuevo 
//const newMessage = true;


// export const FirstApp = () => {
    
//     function newMessage() {
//       return 'Javi Lazaro'
//     }
//    // const newMessage = 'Javi Lazaro'

//   return (  
//     <>
//         <h1>{ newMessage() }</h1>
//         <p>Soy un párrafo</p>
//     </>
//   )
// };


//--------------------------------

import PropTypes from 'prop-types';


export const FirstApp = ({ title, subTitle}) => {

    return (
        <>
        <h1>{ title }</h1>
        <h2>{ subTitle }</h2>
        <p>Soy un párrafo</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo'
}
