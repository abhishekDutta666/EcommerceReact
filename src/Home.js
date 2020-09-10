import React from 'react'
import './Home.css';
import banner from './bannerimage.jpg';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="bannerImage" src={banner} alt="Banner"/>
            <div className="home_row">
                <Product 
                    id="1" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    image= "https://assets.croma.com/medias/sys_master/images/images/ha2/h45/8811579244574/202964_pjpeg.jpg"
                />
                <Product 
                    id="2" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    image= "https://i.pcmag.com/imagery/reviews/03D8CjWFYDEJvmNxGlPsxdH-58..1583353995.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                    id="3" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    image= "https://cdn.dxomark.com/wp-content/uploads/medias/post-40157/Sony-RX100VII-300x225.jpg"
                />
                <Product 
                    id="4" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    image= "https://2.img-dpreview.com/files/p/E~TC4x3S590x0~articles/1548544834/body/Canon-EOS-R6-lead-01.jpeg"
                />
                <Product 
                    id="5" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    image= "https://www.ephotozine.com/articles/top-10-best-ultra-zoom-bridge-digital-cameras-2013-16928/images/1000-Panasonic-Lumix-FZ1000-13_1403005786.jpg"
                />
            </div>
            <div className="home_row">
                <Product 
                    id="6" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    //image="https://panasonic.thecamerastore.com/wp-content/uploads/sites/7/2020/09/Panasonic-S5-Pre-Order.jpg"
                    image= "https://s.yimg.com/uu/api/res/1.2/wu6w4_oN.0Efos8L_KFngw--~B/Zmk9ZmlsbDtoPTQ4MDtweW9mZj01MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-04/651e17c0-8a4c-11ea-bbfb-da0e593b4268.cf.jpg"
                />
                <Product 
                    id="4" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    image= "https://assets-aem.gopro.com/content/dam/gopro/camera-compare/h8b-1366-2X.png"
                />
                <Product 
                    id="5" 
                    title="camera large name here some eos or something" 
                    price={2.99} 
                    rating={5}
                    image= "https://cdn.hasselblad.com/hasselblad-com/aed70d92-ec74-4a47-9bf7-2c6c92ca0cee_27de13d59fa04a6eb2b51b24e1d44c031b70df86_1600f-straight-front_pink_no-border.jpg?auto=format&q=97&rect=0,0,1024,744&w=1024&h=744"
                />
                
            </div>
            
        </div>
    );
}

export default Home
