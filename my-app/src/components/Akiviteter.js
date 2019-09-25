import React, {useState} from 'react';

const Akiviteter = () =>{
    const [sko, setSko] = useState([
        { skofoto: "1.jpg", skotekst: "Møllerup Hamp", test: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.  ", text2: "Køb online her",  id: 1 },
        { skofoto: "2.jpg", skotekst: "Møder & events", test: "Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.", text2: "Se mere her", id: 2 },
        { skofoto: "3.jpg", skotekst: "Fest på kroen", test:"Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer. " , text2: "Læs historien her", id: 3 },
        { skofoto: "4.jpg", skotekst: "Rundvisninger", test: "Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup.", text2: "Køb online her",  id: 4 },
        { skofoto: "5.jpg", skotekst: "Hamp hudpleje", test: "Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.", text2: "Se mere her", id: 5 },
        { skofoto: "6.jpg", skotekst: "Hamp fødevarer", test:"Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup.  " , text2: "Læs historien her", id: 6 },
        { skofoto: "7.jpg", skotekst: "Møllerup bogen", test: "Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup. ", text2: "Køb online her",  id: 7 },
        { skofoto: "8.jpg", skotekst: "Møllerup jagt", test: "Professionel jagt i kuperet og varieret landskab med mange fasaner og råvildt.", text2: "Se mere her", id: 8 },
        { skofoto: "9.jpg", skotekst: "Ferie for 40", test:"Nyd en ferie eller weekend på Hubertus Kroen. Op til 40 personer inkl pool " , text2: "Læs historien her", id: 9 },
        { skofoto: "10.jpg", skotekst: "Bolig på landet", test: "Mærk roen og nyd det smukke landskab i et omsorgsfuldt lokalsamfund.", text2: "Køb online her",  id: 10 },
        { skofoto: "11.jpg", skotekst: "Hestepension", test: "Giv din hest et sundt ophold, god plads ude og inde i den gamle herskabsstald.", text2: "Se mere her", id: 11 },
        { skofoto: "12.jpg", skotekst: "Verdensballetten", test:"Verdensballet - charmerende udendørsforestilling, 13. juli 2018 på Møllerup. " , text2: "Læs historien her", id: 12 },
 
      ])
    
      const img = sko.map(c =>{
          return(
              <div key={c.id} className="col-12 col-lg-4">
              <img src={'/Akiviteter/' + c.skofoto} className="img-fluid col-12 col-lg-10" /><h5 className="col-12 mae">{c.skotekst}</h5>
       <div className="col-12">
       <p>{c.test}</p>
       <a href="#/"> {c.text2}</a></div>
     </div>
   

          
          )
      })



return(
<div className="container ">
    <h5>Møllerup Gods tilbyder en perlerække af muligheder</h5>
    <p>Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
<div className="d-flex justify-content-center flex-wrap">
{img}
</div>

</div>
);


}




export default Akiviteter;