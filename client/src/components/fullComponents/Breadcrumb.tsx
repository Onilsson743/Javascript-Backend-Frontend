import { NavLink } from "react-router-dom"

const Breadcrumb = () => {
    
    const lista = window.location.href.split("/")
    for (var i = 0; i < lista.length; i++) {
        lista[i] = lista[i].charAt(0).toUpperCase() + lista[i].slice(1)
    }
    lista.shift()
    lista.shift()
    lista.shift()
    const currentPage = lista[lista.length - 1]
    lista.pop()
    
  return (
    <div className="breadcrumbs _container">
        <i className="fa-solid fa-house"></i>
        <NavLink to="/" >Home</NavLink>
        {
            lista.map(lista => <><p className="seperator">/</p><NavLink to={lista}>{lista}</NavLink></>)
        }
        <p>/</p>
        <p className="active" >{currentPage}</p>
        
    </div>
  )
}

export default Breadcrumb