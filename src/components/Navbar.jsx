import logo from '../images/logo.png'
function Navbar(){
    return(
        <>
        
       <nav class="navbar navbar-inverse nav"> {/* nav start */}
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href={logo}><img src={logo} width="40" height="30" alt=''/></a>
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a href="index.html">home</a></li>
                <li><a href="about.html">about</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle active" data-toggle="dropdown" href="products.html">products
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li class="active"><a href="dailyuseitems.html">daily use items</a></li>
                    </ul>
                </li>
                <li class="active"><a href="pricing.html">pricing</a></li>
                <li class="active"><a href="contanct.html">contanct us</a></li>
            </ul>
        </div>
    </nav> {/* nav end */}

        </>
    )
}
export default Navbar;