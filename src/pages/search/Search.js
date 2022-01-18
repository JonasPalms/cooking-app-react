
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

//components
import RecipeList from '../../components/RecipeList'

//styles
import './Search.css'

export default function Search() {

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    // q?[querystring]
    const query = queryParams.get('q')
    // json-server searches through the url 
    const url = 'http://localhost:3000/recipes?q=' + query

    const { error, data, isPending } = useFetch(url)

    return (
        <div>
            <h2 className='page-title'>Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
