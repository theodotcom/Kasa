// dropdown description & Equipements + Tags + Rates
//

import { useParams } from 'react-router-dom'
import data from '../datas/listings.json'

function Content (){
    const {id} = useParams()
    const [listing, setListing] = useState(null);
}