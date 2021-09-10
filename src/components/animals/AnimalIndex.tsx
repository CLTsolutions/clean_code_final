import Cats from './Cats'
import Dogs from './Dogs'
import '../styles/AnimalIndex.css'

const AnimalIndex = () => {
  return (
    <div>
      <div className='animal-photos'>
        <Cats />
        <Dogs />
      </div>
    </div>
  )
}

export default AnimalIndex
