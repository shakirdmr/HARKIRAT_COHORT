import { useEffect, useState } from 'react'

function JokeCard({ id, setup, punchline }) {
  return (
    <div key={id} style={{ marginBottom: '8px' }}>
      <strong>{setup}</strong> — {punchline}
    </div>
  )
}

const useEffectImproved = () => {
  const [jokes, setJokes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const getData = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_ten')
        const data = await response.json()
        setJokes(data)
        setError(null)
        
      } catch (err) {
        setError('Failed to fetch jokes. Retrying...')
      } finally {
        setLoading(false)
      }
    }

    getData()
    const id = setInterval(getData, 5000)
    return () => clearInterval(id)
  }, [])

  if (loading) return <div>Loading jokes...</div>
  if (error) return <div>{error}</div>
  if (jokes.length === 0) return <div>No jokes loaded yet.</div>

  return (
    <div>
      <h2>Our Jokes</h2>
      {jokes.map((joke) => (
        <JokeCard key={joke.id} {...joke} />
      ))}
    </div>
  )
}

export default useEffectImproved
