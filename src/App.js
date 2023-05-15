import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState("") ;
  const [linea2, setLinea2] = useState("") ;
  const [imagen, setImagen] = useState("") ;

  const onChangeLinea1 = function(evento){
 
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function(evento){
 
    setLinea2(evento.target.value)
  }

const onChangeImagen = function(evento){
  setImagen(evento.target.value)
}

const onClickExportar = function(evento){

  html2canvas(document.querySelector("#meme")).then(canvas => {
    let img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'meme.png' ;
    link.href = img ;
    link.click();
   
}); 
}

  return (
    <div className="App">
      
      <select onChange={onChangeImagen}>
        <option value="fire">      Casa en llamas  </option>
        <option value="chinardo">  Momo chinardos  </option>
        <option value="momo">      Momo Sorprendido  </option>
        <option value="ibai">      Ibai  </option>
      </select> <br/>

      <input onChange={onChangeLinea1} type="text" placeholder='Linea uno'></input> <br/>

      <input onChange={onChangeLinea2}type="text" placeholder='Linea dos'></input> <br/>

      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme"> 

        <span>{linea2}</span> <br/>

        <span>{linea1}</span> 

        

        <img src= {"/img/"+ imagen+ ".jpg"}/>

       

      </div>


    </div>
  );




}

export default App;
