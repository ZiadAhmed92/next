import Link from 'next/link'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand mx-5" href="/">Produce</Link>
    
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item mx-5">
          <Link className="nav-link active" aria-current="page" href="/newproduce">NewProduce</Link>
        </li>
       
        </ul>
       

  </div>
</nav>

  )
}

export default Header