//internal content
import contentimg1 from '../images/gadgets.jpg';
import contentimg2 from '../images/discount.jpeg';
import contentimg3 from '../images/clothes1.jpg';
import contentimg4 from '../images/clothdiscount.jpeg';

function Content(){
    return(
        <>
        <h2 className="intro text text-center">Certain things you should go through</h2>
    <div className="container pehla">  {/* pehla container start */}
        <div className="row pehl"> {/* PEHLA row start */}
            <div className="col-md-9">
                <img className="image-responsive" src={contentimg1} width="850" height="650" alt='..'/>
                <div>
                    <h3 className="text-center">Enjoy</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, consequatur
                        magnam aspernatur esse, ullam, ratione debitis quaerat sequi totam amet facilis id. Minima,
                        voluptatum animi repellendus nobis deleniti magni voluptatibus.

                    </p>
                </div>
            </div>
            <div className="col-md-3">
                <img className="img-responsive" src={contentimg2} width="500" height="400" alt=""/>
                <h3 className="center">Discount</h3>
                <p className="center">asfd whejdq wedfwe we ewdfuy34 dryjhewr yerf yher erwyh erfg egf ege </p>
            </div>
        </div> {/* PEHLA row END */}
        <div className="row dusra"> {/* dusra row start */}
            <div className="col-md-9">
                <img className="image-responsive" src={contentimg3} width="850" height="600" alt='..'/>
                <h3 className="text-center"> lorem df</h3>
                <p className="text-center">Elevate your style with our exclusive collection of branded clothes, combining
                    fashion, comfort, and
                    quality. Crafted from the finest materials, each piece offers timeless style and lasting durability.
                    Shop now and upgrade your wardrobe today!</p>
            </div>
            
            <div className="col-md-3">
                <img className="image-responsive" src={contentimg4} width="500" height="400" alt=".."/>
                <h3 className="center">Discount</h3>
                <p className="center">asfd whejdq wedfwe we ewdfuy34 dryjhewr yerf yher erwyh erfg egf ege </p>
            </div>
        </div>{/* dusra row END */}
    </div>  {/* pehla container END */}
        </>
    )
}
export default Content;