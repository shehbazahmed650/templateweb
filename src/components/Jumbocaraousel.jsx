//jumbotron and caraousel
import carazimg1 from '../images/electronics1.jpeg';
import caraz2 from '../images/cosmo1.jpeg';
import caraz3 from '../images/slidercloth.jpeg';

function Jumbocaraousel(){
    return(
    <>
    <div className="jumbotron text-center">  {/* start */}
        <h1> Welcome to Smartstrunk</h1>
        <p>The world of online shopping, where endless options are just a click away. Say goodbye to long
            lines and crowded stores, and experience the convenience of browsing and purchasing from the comfort of your
            own home. Enjoy a seamless shopping experience that brings the world of
            products directly to your fingertips!
        </p>
    </div>  {/* jumbo end */}
    <div className="container carousel class"> {/* caraousel start */}
        <h2 class="text-center extrah2"> Here We Go!</h2>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            
            <div className="carousel-inner">
                <div className="item active">
                    <img className='img' src={carazimg1} alt="Tech"/>
                </div>

                <div className="item">
                    <img  className=' img' src={caraz2} alt="Beauty"/>
                </div>

                <div className="item">
                    <img  className=' img' src={caraz3} alt="Clothes"/>
                </div>
            </div>

            {/* Left and right controls  */}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div> {/* caraousel end */}
    
    </>
    )
}
export default Jumbocaraousel;