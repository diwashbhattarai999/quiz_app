import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='quiz--container center'>
      <h1 className="quiz--title">Quiz-App</h1>
      <p className="quiz--subtitle">Welcome to the Quiz App</p>
      <Link className='quiz--btn center' to="Setting">Start quiz</Link>
    </div>
    
  )
}

export default Home