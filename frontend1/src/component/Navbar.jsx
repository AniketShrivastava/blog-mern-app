import React from 'react'

export const Navbar = () => {
  return (

   
  
  <div className="wrapper row2">
    <nav id="mainav" className="hoc clear"> 
      
      <ul className="clear">
        <li className="active"><a href="/">Home</a></li>
        <li><a className="drop" href="#">Category</a>
          <ul>
            <li><a href="pages/gallery.html">Gallery</a></li>
            <li><a href="pages/full-width.html">Full Width</a></li>
            <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
            <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
            <li><a href="pages/basic-grid.html">Basic Grid</a></li>
          </ul>
        </li>
        
      </ul>
      
    </nav>
  </div>
  )
}
