import './BuyCar.css'
import datosJSON from '../../Views/BooksSample.jsx'
function BuyCar (){
    const datos = JSON.parse(datosJSON);
    console.log(datos[2])
    return(
        <>
        <div className='BuyCarBox'>
        </div>

        </>
    )
}

export default BuyCar