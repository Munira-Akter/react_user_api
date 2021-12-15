import React, { Fragment } from 'react';
import './Header.css';

const Header = () => {
    let menus = ['About','Shop','Blog','Contact']
    return (
        <Fragment>
            <section className="header">
                <div className="container-fluid px-0">
                   <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                       <a class="navbar-brand" href="">Navbar</a>
                       <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                           aria-expanded="false" aria-label="Toggle navigation"></button>
                       <div class="collapse navbar-collapse" id="collapsibleNavId">
                           <ul class="navbar-nav m-auto mt-2 mt-lg-0">
                               <li class="nav-item active">
                                   <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                               </li>
                               {
                                   menus.map((data) => 
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">{data}</a>
                                    </li>
                                      
                                   )
                               }
                             
                             
                           </ul>
                           <form class="form-inline my-2 my-lg-0">
                               <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                               <button class="btn btn-light text-dark my-2 my-sm-0" type="submit">Search</button>
                           </form>
                       </div>
                   </nav>
                </div>
            </section>
        </Fragment>
    )
}

export default Header
