import { Link } from 'react-router-dom'

function ErrorBody (){
    return (
        <div className="error-body">
            <h1 className="error-logo">404</h1>
            <h3 className="error-message">Oups! La Page que vous demandez n'existe pas</h3>
            <Link className="error-acceuil" to="/">
          Retourner sur la Page d'accueil
        </Link>
        </div>
    
    )
}

export default ErrorBody