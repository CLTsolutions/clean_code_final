import Cats from './Cats'
import Dogs from './Dogs'
// LESSON: DELETE THIS CSS FILE - UNUSED
import '../styles/AnimalIndex.css'

const AnimalIndex = () => {
  return (
    <div>
      {/* DELETE THIS CLASS NAME - UNUSED */}
      <div className='animal-photos'>
        <Cats />
        <Dogs />
      </div>
    </div>
  )
}

export default AnimalIndex
