
import React, { useState } from 'react';
import img__1 from "../img/IMG000200_srcset-large.jpg";



const Nyheder = (props) => {


  const [sko, setSko] = useState([
    { skofoto: "350x35000_srcset-large.png", skotekst: "Køb vores hampeprodukter", test: "På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..", text2: "Køb online her",  id: 1 },
    { skofoto: "verdensballet0_srcset-large.png", skotekst: "Verdensballetten 2019", test: "Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods", text2: "Se mere her", id: 2 },
    { skofoto: "1.png", skotekst: "Historien om Møllerup Gods", test:"Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven." , text2: "Læs historien her", id: 3 },
  ])


  const allimg = sko.map(c => {
    return (
      <div key={c.id} className="col-12 col-lg-3" >

        <img src={'/Nyheder/' + c.skofoto} className="img-fluid img-_1" /><h5 className="img-_1">{c.skotekst}</h5>
       
        <p>{c.test}</p>
        <a href="#/"> {c.text2}</a>
      </div>
    )
  })

  return (



    <div className="container">
      <img className="img-fluid w-100 flex-wrap" src={img__1}></img>
      <h4 className="font-size">Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h4>
      <br />
      <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
      <a className="black" href="#/">Læs mere her</a>

    
        <div className="d-flex justify-content-center flex-wrap">
        {allimg}
        
        </div>
        <hr className="border-black"/>
      </div>

   
  );
}



export default Nyheder;