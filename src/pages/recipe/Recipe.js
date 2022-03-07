import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import { projectFirestore } from '../../firebase/config'

// styles
import './Recipe.css'


export default function Recipe() {

    const { id } = useParams()
    const { mode } = useTheme()

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if (doc.exists) {
                setIsPending(false);
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('Could not find that recipe')
            }
        })
        return () => unsub()
    }, [id])

    const handleClick = (e) => {
        e.preventDefault()
        projectFirestore.collection('recipes').doc(id).update({
            title: 'new title'
        })
    }

    return (
        <div className={`recipe ${mode}`}>
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
                    <button onClick={handleClick}>Update</button>
                    <label htmlFor="title-update">Update the title: </label>
                    <input type="text" placeholder='update title' id='title-update' onSubmit={(e) => handleClick()} />

                </>
            )}
        </div>
    )
}
