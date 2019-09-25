import React from 'react';
import img from '../LogoAutoriseretPartner1_srcset-large.png';
import img1 from '../Udklip.JPG'
const Outro = () =>{
  

return(
<div className="container" >
   <div>
   <img className="img-fluid" src={img} ></img></div>
                <div><a href="">Møllerup Gods er autoriseret partner hos Danske Konferencecentre</a></div>
                <div className="row">
                <iframe class="instagram-media instagram-media-rendered col-6" id="instagram-embed-0" src="https://www.instagram.com/p/BUZDt1Ilwc8/embed/captioned/?cr=1&amp;v=7&amp;wp=638&amp;rd=https%3A%2F%2Fwww.moellerupgods.dk&amp;rp=%2Fda#%7B%22ci%22%3A0%2C%22os%22%3A287.8199999995559%7D" 
                allowtransparency="true" allowfullscreen="true" frameborder="0" height="947" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" 
                ></iframe>
                    
                    <form className="form-group col-10 col-lg-3 bg-white m mae">
                        <h2>Tilmeld nyhedsbrev</h2>
                        <h6 className="text-left">skal udfyldes</h6>
                        <label for="exampleInputEmail1">Email address</label>
                        <input className="col-12 col-lg-12">
                        </input>

                        <label for="exampleInputEmail1">First Name</label>
                        <input className="col-12 col-lg-12">
                        </input>

                        <label for="exampleInputEmail1">Efternavn</label>
                        <input className="col-12 col-lg-12">
                        </input>
                        <h6>Vælg nyhedsbrev</h6>

                        <input type="checkbox"  ></input>
                        <label>Møllerup - alle</label>
                        <br/>
                        <input type="checkbox"  ></input>
                        <label>Verdensballetten</label>
                        <br/>
                        <input type="checkbox"  ></input>
                        <label>Møllerup Hamp</label>
                        <br/>
                        <button className="btn btn-dark">Tilmeld</button>
                    </form>
                </div>
                
</div>
);


}



export default Outro;