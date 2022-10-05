import Header from "../components/Header"
import ErrorBody from "../components/ErrorBody"
import '../styles/Error.css'

function Error (){
return (
    <div className="error-container">
    <Header />
    <ErrorBody />
    </div>
)
}

export default Error