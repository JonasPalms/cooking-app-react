import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'


export default function Recipe() {

    const { id } = useParams()

    const url = 'http://localhost:3000/recipes/' + id

    const { data: recipe, isPending, error } = useFetch(url)



    return (
        <div className='recipe'>
            {error && <div className='error'>{error}</div>}


            {isPending && <div className="loading">Loading recipe...</div>}

            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>takes {recipe.cookingTime} to make</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className='method'>{recipe.method}</p>

                </>
            )}
        </div>
    )
}