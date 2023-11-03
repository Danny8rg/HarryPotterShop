import {useState, useEffect } from 'react';
import Header from "../Components/Header/Header"
import './BooksSample.css'

function BooksSample()  {

    let [BookOne, setBookOne] = useState(0);
    const [CantidadOne, setCantidadOne] = useState(18);
    const [PrizeOne ] = useState(25000);
    let [TotalOne, setTotalOne] = useState(0);

    function aumentarOne (){
        if (CantidadOne <= 0){
            setBookOne(BookOne + 0)
        }  else(
            setBookOne(BookOne + 1)
        )
    }
    function disminuirOne (){
        if (BookOne == 0){
            setBookOne(BookOne = 0)
        }else(
            setBookOne(BookOne - 1)
        )
    }

    function DisminuirCantidadOne (){
        if (CantidadOne <= 0){
            setCantidadOne(CantidadOne + 0)
        }else{
            setCantidadOne(CantidadOne - 1)
        }
    }

    function AumentarCantidadOne () {
        if(BookOne == 0){
            setCantidadOne(CantidadOne + 0)
        } else (
            setCantidadOne(CantidadOne + 1)
        )
    }
    
    function AumentarTotalOne(){
        if(CantidadOne <= 0){
            setTotalOne(TotalOne + 0)
        }else{
            setTotalOne(TotalOne + 25000)
        }
    }

    function DisminuirTotalOne(){
        if(BookOne == 0){
            setBookOne(BookOne = 0)
        }else (
            setTotalOne(TotalOne - 25000)
        )
    }


    let [BookTwo, setBookTwo] = useState(0);
    const [CantidadTwo, setCantidadTwo] = useState(18);
    const [PrizeTwo ] = useState(32000);
    let [TotalTwo, setTotalTwo] = useState(0);

    function aumentarTwo (){
        if (CantidadTwo <= 0){
            setBookTwo(BookTwo + 0)
        }  else(
            setBookTwo(BookTwo + 1)
        )
    }
    function disminuirTwo (){
        if (BookTwo == 0){
            setBookTwo(BookTwo = 0)
        }else(
            setBookTwo(BookTwo - 1)
        )
    }

    function DisminuirCantidadTwo (){
        if (CantidadTwo <= 0){
            setCantidadTwo(CantidadTwo + 0)
        }else{
            setCantidadTwo(CantidadTwo - 1)
        }
    }

    function AumentarCantidadTwo () {
        if(BookTwo == 0){
            setCantidadTwo(CantidadTwo + 0)
        } else (
            setCantidadTwo(CantidadTwo + 1)
        )
    }

    function AumentarTotalTwo(){
        if(CantidadTwo <= 0){
            setTotalTwo(TotalTwo + 0)
        }else{
            setTotalTwo(TotalTwo + 32000)
        }
    }

    function DisminuirTotalTwo(){
        if(BookTwo == 0){
            setBookTwo(BookTwo = 0)
        }else (
            setTotalTwo(TotalTwo - 32000)
        )
    }

    let [BookThree, setBookThree] = useState(0);
    const [CantidadThree, setCantidadThree] = useState(18);
    const [PrizeThree ] = useState(23000);
    let [TotalThree, setTotalThree] = useState(0);

    function aumentarThree (){
        if (CantidadThree <= 0){
            setBookThree(BookThree + 0)
        }  else(
            setBookThree(BookThree + 1)
        )
    }
    function disminuirThree (){
        if (BookThree == 0){
            setBookThree(BookThree = 0)
        }else(
            setBookThree(BookThree - 1)
        )
    }

    function DisminuirCantidadThree (){
        if (CantidadThree <= 0){
            setCantidadThree(CantidadThree + 0)
        }else{
            setCantidadThree(CantidadThree - 1)
        }
    }

    function AumentarCantidadThree () {
        if(BookThree == 0){
            setCantidadThree(CantidadThree + 0)
        } else (
            setCantidadThree(CantidadThree + 1)
        )
    }

    function AumentarTotalThree(){
        if(CantidadThree <= 0){
            setTotalThree(TotalThree + 0)
        }else{
            setTotalThree(TotalThree + 23000)
        }
    }

    function DisminuirTotalThree(){
        if(BookThree == 0){
            setBookThree(BookThree = 0)
        }else (
            setTotalThree(TotalThree - 23000)
        )
    }

    let [BookFour, setBookFour] = useState(0);
    const [CantidadFour, setCantidadFour] = useState(18);
    const [PrizeFour ] = useState(35000);
    let [TotalFour, setTotalFour] = useState(0);

    function aumentarFour (){
        if (CantidadFour <= 0){
            setBookFour(BookFour + 0)
        }  else(
            setBookFour(BookFour + 1)
        )
    }
    function disminuirFour (){
        if (BookFour == 0){
            setBookFour(BookFour = 0)
        }else(
            setBookFour(BookFour - 1)
        )
    }

    function DisminuirCantidadFour (){
        if (CantidadFour <= 0){
            setCantidadFour(CantidadFour + 0)
        }else{
            setCantidadFour(CantidadFour - 1)
        }
    }

    function AumentarCantidadFour () {
        if(BookFour == 0){
            setCantidadFour(CantidadFour + 0)
        } else (
            setCantidadFour(CantidadFour + 1)
        )
    }

    function AumentarTotalFour(){
        if(CantidadFour <= 0){
            setTotalFour(TotalFour + 0)
        }else{
            setTotalFour(TotalFour + 35000)
        }
    }

    function DisminuirTotalFour(){
        if(BookFour == 0){
            setBookFour(BookFour = 0)
        }else (
            setTotalFour(TotalFour - 35000)
        )
    }

    let [BookFive, setBookFive] = useState(0);
    const [CantidadFive, setCantidadFive] = useState(18);
    const [PrizeFive ] = useState(35000);
    let [TotalFive, setTotalFive] = useState(0);

    function aumentarFive (){
        if (CantidadFive <= 0){
            setBookFive(BookFive + 0)
        }  else(
            setBookFive(BookFive + 1)
        )
    }
    function disminuirFive (){
        if (BookFive == 0){
            setBookFive(BookFive = 0)
        }else(
            setBookFive(BookFive - 1)
        )
    }

    function DisminuirCantidadFive (){
        if (CantidadFive <= 0){
            setCantidadFive(CantidadFive + 0)
        }else{
            setCantidadFive(CantidadFive - 1)
        }
    }

    function AumentarCantidadFive () {
        if(BookFive == 0){
            setCantidadFive(CantidadFive + 0)
        } else (
            setCantidadFive(CantidadFive + 1)
        )
    }

    function AumentarTotalFive(){
        if(CantidadFive <= 0){
            setTotalFive(TotalFive + 0)
        }else{
            setTotalFive(TotalFive + 35000)
        }
    }

    function DisminuirTotalFive(){
        if(BookFive == 0){
            setBookFive(BookFive = 0)
        }else (
            setTotalFive(TotalFive - 35000)
        )
    }

    let [BookSix, setBookSix] = useState(0);
    const [CantidadSix, setCantidadSix] = useState(18);
    const [PrizeSix ] = useState(35000);
    let [TotalSix, setTotalSix] = useState(0);

    function aumentarSix (){
        if (CantidadSix <= 0){
            setBookSix(BookSix + 0)
        }  else(
            setBookSix(BookSix + 1)
        )
    }
    function disminuirSix (){
        if (BookSix == 0){
            setBookSix(BookSix = 0)
        }else(
            setBookSix(BookSix - 1)
        )
    }

    function DisminuirCantidadSix (){
        if (CantidadSix <= 0){
            setCantidadSix(CantidadSix + 0)
        }else{
            setCantidadSix(CantidadSix - 1)
        }
    }

    function AumentarCantidadSix () {
        if(BookSix == 0){
            setCantidadSix(CantidadSix + 0)
        } else (
            setCantidadSix(CantidadSix + 1)
        )
    }

    function AumentarTotalSix(){
        if(CantidadSix <= 0){
            setTotalSix(TotalSix + 0)
        }else{
            setTotalSix(TotalSix + 35000)
        }
    }

    function DisminuirTotalSix(){
        if(BookSix == 0){
            setBookSix(BookSix = 0)
        }else (
            setTotalSix(TotalSix - 35000)
        )
    }

    let [BookSeven, setBookSeven] = useState(0);
    const [CantidadSeven, setCantidadSeven] = useState(18);
    const [PrizeSeven ] = useState(25000);
    let [TotalSeven, setTotalSeven] = useState(0);

    function aumentarSeven (){
        if (CantidadSeven <= 0){
            setBookSeven(BookSeven + 0)
        }  else(
            setBookSeven(BookSeven + 1)
        )
    }
    function disminuirSeven (){
        if (BookSeven == 0){
            setBookSeven(BookSeven = 0)
        }else(
            setBookSeven(BookSeven - 1)
        )
    }

    function DisminuirCantidadSeven (){
        if (CantidadSeven <= 0){
            setCantidadSeven(CantidadSeven + 0)
        }else{
            setCantidadSeven(CantidadSeven - 1)
        }
    }

    function AumentarCantidadSeven () {
        if(BookSeven == 0){
            setCantidadSeven(CantidadSeven + 0)
        } else (
            setCantidadSeven(CantidadSeven + 1)
        )
    }
    
    function AumentarTotalSeven(){
        if(CantidadSeven <= 0){
            setTotalSeven(TotalSeven + 0)
        }else{
            setTotalSeven(TotalSeven + 25000)
        }
    }

    function DisminuirTotalSeven(){
        if(BookSeven == 0){
            setBookSeven(BookSeven = 0)
        }else (
            setTotalSeven(TotalSeven - 25000)
        )
    }

    let  [totalPrize, setTotalPrize] = useState(0)

    function precioTotal(){
        setTotalPrize(totalPrize = TotalOne + TotalTwo + TotalThree + TotalFour + TotalFive + TotalSix + TotalSeven)
    }

    const modal1 = 'modalWindow'
    const modal2 = 'modalShow'
    let controlador = 0

    function sumCount (){
        controlador = controlador + 1
    }

    function resCount() {
        controlador = controlador - 1;
        if (controlador < 0) {
            controlador = 0;
        }
    }

    const [styleColor, setStyteColor] = useState(modal1)

    useEffect(() => {
        if (controlador > 0) {
        setStyteColor(modal2);
        } else {
        setStyteColor(modal1);
        }
    }, [controlador]);

    return (
        <>
        <Header />
        <div className="" id='BigBox'> 
            <div className="target" id='Piedra Filosofal 1'>
                <img src="../public/LaPiedraFilosofal.jpg" alt="Portada Libro"  className='mages'/>
                <div className="leftbox">
                    <h1 className='title'> Harry Potter Y La Piedra Filosofal</h1>
                    <div className="CantidadBox">
                        <p>Cantidad Disponible</p>
                        <p>{CantidadOne}</p>
                    </div>
                    <div className='Prize'>
                        <p className=''>Precio</p>
                        <p>{PrizeOne}</p>
                    </div>
                    <div className="BottonsBox">
                        <p className='AgregarText'>Agregar Al Carrito</p>
                        <p className='NumBooks'>{BookOne}</p>
                        <button className='MasButton' onClick={ () => {
                            aumentarOne(),
                            DisminuirCantidadOne()
                            AumentarTotalOne()
                        }}> + </button>
                        <button className='MenosButton' onClick={ () => {
                            disminuirOne(),
                            AumentarCantidadOne()
                            DisminuirTotalOne()
                        }
                        }> - </button>
                        <div className='TotalBox'>
                            <p>total</p>
                            <p>{TotalOne}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="target" id='Piedra Filosofal 1'>
                <img src="../public/LaCamaraSecreta.jpg" alt="Portada Libro"  className='mages'/>
                <div className="leftbox">
                    <h1 className='title'> Harry Potter Y La Camara Secreta</h1>
                    <div className="CantidadBox">
                        <p>Cantidad Disponible</p>
                        <p>{CantidadTwo}</p>
                    </div>
                    <div className='Prize'>
                        <p className=''>Precio</p>
                        <p>{PrizeTwo}</p>
                    </div>
                    <div className="BottonsBox">
                        <p className='AgregarText'>Agregar Al Carrito</p>
                        <p className='NumBooks'>{BookTwo}</p>
                        <button className='MasButton' onClick={ () => {
                            aumentarTwo(),
                            DisminuirCantidadTwo()
                            AumentarTotalTwo()
                        }}> + </button>
                        <button className='MenosButton' onClick={ () => {
                            disminuirTwo(),
                            AumentarCantidadTwo()
                            DisminuirTotalTwo()
                        }
                        }> - </button>
                        <div className='TotalBox'>
                            <p>total</p>
                            <p>{TotalTwo}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="target" id='el caliz de fuego 3'>
                <img src="../public/Caliz De Fuego.jpg" alt="Portada Libro"  className='mages'/>
                <div className="leftbox">
                    <h1 className='title'> Harry Potter Y El Caliz De Fuego</h1>
                    <div className="CantidadBox">
                        <p>Cantidad Disponible</p>
                        <p>{CantidadThree}</p>
                    </div>
                    <div className='Prize'>
                        <p className=''>Precio</p>
                        <p>{PrizeThree}</p>
                    </div>
                    <div className="BottonsBox">
                        <p className='AgregarText'>Agregar Al Carrito</p>
                        <p className='NumBooks'>{BookThree}</p>
                        <button className='MasButton' onClick={ () => {
                            aumentarThree(),
                            DisminuirCantidadThree()
                            AumentarTotalThree()
                        }}> + </button>
                        <button className='MenosButton' onClick={ () => {
                            disminuirThree(),
                            AumentarCantidadThree()
                            DisminuirTotalThree()
                        }
                        }> - </button>
                        <div className='TotalBox'>
                            <p>total</p>
                            <p>{TotalThree}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="target" id='Prisionera Azkaban 4'>
                <img src="../public/el-prisionero-de-azkaban.jpg" alt="Portada Libro" className='mages' />
                <div className="leftbox">
                    <h1 className='title'> Harry Potter Y el prisionero de azkaban</h1>
                    <div className="CantidadBox">
                        <p>Cantidad Disponible</p>
                        <p>{CantidadFour}</p>
                    </div>
                    <div className='Prize'>
                        <p className=''>Precio</p>
                        <p>{PrizeFour}</p>
                    </div>
                    <div className="BottonsBox">
                        <p className='AgregarText'>Agregar Al Carrito</p>
                        <p className='NumBooks'>{BookFour}</p>
                        <button className='MasButton' onClick={ () => {
                            aumentarFour(),
                            DisminuirCantidadFour()
                            AumentarTotalFour()
                        }}> + </button>
                        <button className='MenosButton' onClick={ () => {
                            disminuirFour(),
                            AumentarCantidadFour()
                            DisminuirTotalFour()
                        }
                        }> - </button>
                        <div className='TotalBox'>
                            <p>total</p>
                            <p>{TotalFour}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="target" id='Orden del fenix 5'>
                <img src="../public/laordendelfenix.jpg" alt="Portada Libro"  className='mages'/>
                <div className="leftbox">
                    <h1 className='title'> Harry Potter La Orden Del Fenix</h1>
                    <div className="CantidadBox">
                        <p>Cantidad Disponible</p>
                        <p>{CantidadFive}</p>
                    </div>
                    <div className='Prize'>
                        <p className=''>Precio</p>
                        <p>{PrizeFive}</p>
                    </div>
                    <div className="BottonsBox">
                        <p className='AgregarText'>Agregar Al Carrito</p>
                        <p className='NumBooks'>{BookFive}</p>
                        <button  className='MasButton' onClick={ () => {
                            aumentarFive(),
                            DisminuirCantidadFive()
                            AumentarTotalFive()
                        }}> + </button>
                        <button className='MenosButton' onClick={ () => {
                            disminuirFive(),
                            AumentarCantidadFive()
                            DisminuirTotalFive()
                        }
                        }> - </button>
                        <div className='TotalBox'>
                            <p>total</p>
                            <p>{TotalFive}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="target" id='el misterio del principe 6'>
                <img src="../public/elMisterioDelPrincipe.jpg" alt="Portada Libro" className='mages' />
                <div className="leftbox">
                    <h1 className='title'> Harry Potter Y El Misterio Del Principe</h1>
                    <div className="CantidadBox">
                        <p>Cantidad Disponible</p>
                        <p>{CantidadSix}</p>
                    </div>
                    <div className='Prize'>
                        <p className=''>Precio</p>
                        <p>{PrizeSix}</p>
                    </div>
                    <div className="BottonsBox">
                        <p className='AgregarText'>Agregar Al Carrito</p>
                        <p className='NumBooks'>{BookSix}</p>
                        <button  className='MasButton' onClick={ () => {
                            aumentarSix(),
                            DisminuirCantidadSix()
                            AumentarTotalSix()
                        }}> + </button>
                        <button className='MenosButton' onClick={ () => {
                            disminuirSix(),
                            AumentarCantidadSix()
                            DisminuirTotalSix()
                        }
                        }> - </button>
                        <div className='TotalBox'>
                            <p>total</p>
                            <p>{TotalSix}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="target" id='reliquias de la muerte 7'>
                <img src="../public/lasReliquiasDeLaMuerte.jpg" alt="Portada Libro" className='mages' />
                <div className="leftbox">
                    <h1 className='title'> Harry Potter Y Las Reliquias De La Muerte</h1>
                    <div className="CantidadBox">
                        <p>Cantidad Disponible</p>
                        <p>{CantidadSeven}</p>
                    </div>
                    <div className='Prize'>
                        <p className=''>Precio</p>
                        <p>{PrizeSeven}</p>
                    </div>
                    <div className="BottonsBox">
                        <p className='AgregarText'>Agregar Al Carrito</p>
                        <p className='NumBooks'>{BookSeven}</p>
                        <button className='MasButton' onClick={ () => {
                            aumentarSeven(),
                            DisminuirCantidadSeven()
                            AumentarTotalSeven()
                        }}> + </button>
                        <button className='MenosButton' onClick={ () => {
                            disminuirSeven(),
                            AumentarCantidadSeven()
                            DisminuirTotalSeven()
                        }
                        }> - </button>
                        <div className='TotalBox'>
                            <p>total</p>
                            <p>{TotalSeven}</p>
                        </div>
                    </div>
                </div>
            </div>

            <button className='ComprarButton' id='ComprarButton' onClick={() =>{
                sumCount()
                console.log(controlador)
                precioTotal()
            }
            }>Comprar</button>
        </div>

        <div  className={styleColor}>
            <h1>ventana modal </h1>
            <button className='ComprarButton' onClick={() => resCount()}> Confirmar </button>
            <button className='CerrarModal' onClick={() => resCount()}>X</button>
            <p>Total a Pagar ${totalPrize}</p>
        </div>

        </>
    )
}

export default BooksSample