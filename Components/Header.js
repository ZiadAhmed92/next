import Link from 'next/link'


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand mx-5" href="/">Movies</Link>
    
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item mx-5">
          <Link className="nav-link active" aria-current="page" href="/movie">Produce</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link active" aria-current="page" href="/newproduce">NewProduce</Link>
        </li>
       
        {/* https://api.themoviedb.org/3/trending/${movie}/week?api_key=f1aca93e54807386df3f6972a5c33b50 */}
       
        </ul>
       

  </div>
</nav>

  )
}

export default Header