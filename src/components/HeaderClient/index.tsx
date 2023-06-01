import React from 'react';
import './styles.css';


//Para organizar melhor, criar a funcao, exatamente com o mesmo nome da subpasta criada. No caso, "HeaderClient".
export default function HeaderClient() {

     return ( 
       <header className="dsc-header-client">
         <nav className="dsc-container">
           <h1>DSCommerce</h1>
           <div className="dsc-navbar-right">
             <div className="dsc-menu-items-container">
               
             </div>
             <a href="#">Entrar</a>
           </div>
         </nav>
       </header>
     );
}

//<div className="dsc-menu-item">
  //               <img src={cartIcon}alt="Carrinho de compras" />
    //           </div>