import './css/responsive.css'
import './css/style.css'

function App() {
  return (
    <div>
      <header className="section">
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div className="menu-area">
                        <div className="limit-box">
                           <nav className="main-menu">
                              <ul className="menu-area-main">
                                 <li> <a href="index.html">Home</a> </li>
                                 <li> <a href="about.html">About</a> </li>
                                 <li><a href="testmonial.html">Testmonial</a></li>
                                 <li><a href="clients.html">Shop</a></li>
                                 <li><a href="contact.html">Contact Us</a></li>
                                 <li className="last"><a href="#"><img src="images/search_icon.png" alt="icon"/></a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>

      <section >
         <div id="main_slider" className="section carousel slide banner-main" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#main_slider" data-slide-to="0" className="active"></li>
               <li data-target="#main_slider" data-slide-to="1"></li>
               <li data-target="#main_slider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-caption ">
                              <h1>Welcome to <strong className="color">Our Shop</strong></h1>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                              <a className="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                              <a className="btn btn-lg btn-primary" href="about.html" role="button">About </a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box">
                              <figure><img src="images/boksing-gloves.png" alt="img"/></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-caption ">
                              <h1>Welcome to <strong className="color">Our Shop</strong></h1>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                              <a className="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                              <a className="btn btn-lg btn-primary" href="about.html" role="button">About</a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box ">
                              <figure><img src="images/boksing-gloves.png" alt="img"/></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-caption ">
                              <h1>Welcome to <strong className="color">Our Shop</strong></h1>
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                              <a className="btn btn-lg btn-primary" href="#" role="button">Buy Now</a>
                              <a className="btn btn-lg btn-primary" href="about.html" role="button">About</a>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box">
                              <figure><img src="images/boksing-gloves.png" alt="img"/></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
            <i className='fa fa-angle-left'></i></a>
            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
            <i className='fa fa-angle-right'></i>
            </a>
         </div>
      </section>
    
      <div id="plant" className="section  product">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="titlepage">
                     <h2><strong className="black"> Our</strong>  Products</h2>
                     <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                  </div>
               </div>
            </div>
         </div>     
      </div>
      
      <div className="clothes_main section ">
          <div className="container">
            <div className="row">
               <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="sport_product">
                     <figure><img src="images/basketball.png" alt="img"/></figure>
                    <h3> $<strong className="price_text">50</strong></h3>
                     <h4>basket ball</h4>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                  <div className="sport_product">
                     <figure><img src="images/t-shirt.png" alt="img"/></figure>
                    <h3> $<strong className="price_text">50</strong></h3>
                     <h4> T-Shirt</h4>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                  <div className="sport_product">
                     <figure><img src="images/game.png" alt="img"/></figure>
                     <h3> $<strong className="price_text">50</strong></h3>
                     <h4>Game</h4>
                  </div>
               </div>
    
        
       
         
               <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="sport_product">
                     <figure><img src="images/basketball.png" alt="img"/></figure>
                   <h3> $<strong className="price_text">50</strong></h3>
                     <h4>basket ball</h4>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                  <div className="sport_product">
                     <figure><img src="images/t-shirt.png" alt="img"/></figure>
                    <h3> $<strong className="price_text">50</strong></h3>
                     <h4>T-Shirt</h4>
                  </div>
               </div>
               <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                  <div className="sport_product">
                     <figure><img src="images/game.png" alt="img"/></figure>
                     <h3>$<strong className="price_text">50</strong></h3>
                     <h4>Game</h4>
                  </div>
               </div>
             </div>
            </div>
           </div>
   
      <div className="section about ">
         <div className="container">
             <div className="row">
                <div className="col-12">
                    <div className="titlepage">
                     <h2><strong className="black"> About</strong>  Us</h2>
                     <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                  </div>
                </div>
             </div>
         </div>
      </div>
   
      <section >
         <div id="main_slider" className="section carousel slide banner-main" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#main_slider" data-slide-to="0" className="active"></li>
               <li data-target="#main_slider" data-slide-to="1"></li>
               <li data-target="#main_slider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-sporrt_text ">
                              <h1 className="sporrt_text">Best sports item shop our</h1>
                              <p  className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</p>
                              <div className="btn_main">
                                 <a className="btn btn-lg btn-primary" href="#" role="button">Read More</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box">
                              <figure><img src="images/child-image.png" /*style="max-width: 100%; border: 15px solid #fff;"*//></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-sporrt_text ">
                              <h1 className="sporrt_text">Best sports item shop our</h1>
                              <p  className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</p>
                              <div className="btn_main">
                                 <a className="btn btn-lg btn-primary" href="#" role="button">Read More</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box ">
                              <figure><img src="images/child-image.png" /*style="max-width: 100%; border: 15px solid #fff;"*/ /></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="row marginii">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="carousel-sporrt_text ">
                              <h1 className="sporrt_text">Best sports item shop our</h1>
                              <p  className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</p>
                              <div className="btn_main">
                                 <a className="btn btn-lg btn-primary" href="#" role="button">Read More</a>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                           <div className="img-box">
                              <figure><img src="images/child-image.png" /*style="max-width: 100%; border: 15px solid #fff;"*/ /></figure>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
      <div id="plant" className="section_Clients layout_padding padding_bottom_0">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="titlepage">
                     <h2> Testmonial</h2>
                     <span /*style="text-align: center;"*/>available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   
      <div className="section Clients_2 layout_padding padding-top_0">
         <div className="container">
            <div className="row">
               <div className="col-sm-12"><div id="testimonial" className="carousel slide" data-ride="carousel">
                  <ul className="carousel-indicators">
                     <li data-target="#testimonial" data-slide-to="0" className="active"></li>
                     <li data-target="#testimonial" data-slide-to="1"></li>
                     <li data-target="#testimonial" data-slide-to="2"></li>
                  </ul>            
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="titlepage">
                           <div className="john">
                              <div className="john_image"><img src="images/john-image.png" /*style="max-width: 100%;"*/ /></div>
                              <div className="john_text">JOHN DUE<span /*style="color: #fffcf4;"*/ >(ceo)</span></div>
                              <p className="lorem_ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                              <div className="icon_image"><img src="images/icon-1.png" /></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="titlepage">
                           <div className="john">
                              <div className="john_image"><img src="images/john-image.png" /*style="max-width: 100%;"*/ /></div>
                              <div className="john_text">JOHN DUE<span /*style="color: #fffcf4;"*/>(ceo)</span></div>
                              <p className="lorem_ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                              <div className="icon_image"><img src="images/icon-1.png" /></div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="titlepage">
                           <div className="john">
                              <div className="john_image"><img src="images/john-image.png" /*style="max-width: 100%;"*/ /></div>
                              <div className="john_text">JOHN DUE<span /*style="color: #fffcf4;"*/>(ceo)</span></div>
                              <p className="lorem_ipsum_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, asIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as </p>
                              <div className="icon_image"><img src="images/icon-1.png" /></div>
                           </div>
                        </div>
                     </div>
                  </div>    

                  <a className="carousel-control-prev" href="#testimonial" data-slide="prev">
                     <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#testimonial" data-slide="next">
                     <span className="carousel-control-next-icon"></span>
                  </a>

               </div>                     
               </div>
            </div>
         </div>
      </div>
   
      <div id="plant" className="contact_us layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="titlepage">
                    <h2><strong className="black"> Contact</strong>  Us</h2>
                     <span /*style="text-align: center;"*/ >available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   
      <div className="contact_us_2 layout_padding paddind_bottom_0">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="soc_text">soC</div>
               </div>
               <div className="col-md-6">
                  <div className="email_btn">
                     <form action="/action_page.php">
                        <div className="form-group">
                           <input type="text" className="form-control form-control-sm" placeholder="Name" name="Name" />
                        </div>
                        <div className="form-group">
                           <input  type="text" className="form-control form-control-sm" placeholder="Email" name="Email" />
                        </div>
                        <div className="form-group">
                           <input  type="text" className="form-control form-control-sm" placeholder="Phone" name="Phone" />
                        </div>
                        <div className="form-group">
                           <input  type="text" className="form-control form-control-sm" placeholder="Massage" name="text3" />
                        </div>
                         <div className="submit_btn">
                            <button type="submit" className="btn btn-primary" /*style="background: #081b30; color: #fff; padding: 11px;"*/>Send</button>
                         </div>
                      </form>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="contact_us_3 layout_padding">
            <div className="row">
               <div className="col-md-4">
                  <h1 /*style="color: #ffffff; "*/>Newsletter</h1>
                  <p className="long_text">It is a long established fact that a reader will be distracted  a</p>
               </div>
               <div className="col-md-8">
                  <div className="email_text">
                     <div className="input-group mb-3">
                        <input /*style="border-bottom-left-radius: 20px !important; border-top-left-radius: 20px !important;"*/ type="text" className="form-control" placeholder="Enter your email" />
                     <div className="input-group-append">
                        <button /*style="border-top-right-radius: 20px !important; border-bottom-right-radius: 20px !important; color: #fff; padding-bottom: 10px; padding-top: 10px;"*/ className="btn btn-primary" type="Subscribe">Subscribe</button>  
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            </div>
         </div>
      </div>
   
      <div id="footer" className="Address layout_padding">
         <div className="container">
          <div className="row">
             <div className="col-sm-12">
               <div className="titlepage">
                  <div className="main">
                     <h1 className="address_text">Address</h1>
                  </div>
               </div>
             </div>
          </div>
               <div className="address_2">
                  <div className="row">
                     <div className="col-sm-12 col-md-12 col-lg-4">
                       <div className="site_info">
                          <span className="info_icon"><img src="images/map-icon.png" /></span>
                          <span /*style="margin-top: 10px;"*/ >No.123 Chalingt Gates, Supper market New York</span></div>
                     </div>
                     <div className="col-sm-12 col-md-12 col-lg-4">
                       <div className="site_info">
                          <span className="info_icon"><img src="images/phone-icon.png" /></span>
                          <span /*style="margin-top: 21px;"*/>( +71 7986543234 )</span></div>
                     </div>
                     <div className="col-sm-12 col-md-12 col-lg-4">
                       <div className="site_info">
                          <span className="info_icon"><img src="images/email-icon.png" /></span>
                          <span /*style="margin-top: 21px;"*/ >demo@gmail.com</span></div>
                     </div>
                     </div> 
                  </div>
         </div>
         <div className="menu_main">
            <div className="menu_text">
               <ul>
                  <li className="active"><a href="#">Home</a></li>                         
                  <li><a href="about.html">About</a></li>
                  <li><a href="testmonial.html">Testmonial</a></li>
                  <li><a href="clients.html">Shop</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
               </ul>
            </div>
         </div>
      </div>

      <div id="plant" className="footer layout_padding">
         <div className="container">
            <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
         </div>
      </div>

   </div>   
  );
}

export default App;
