import './App.css'
import { LandingPage } from './components/LandingPage'
import MaxWidthWrapper from './components/MaxWidthWrapper'

function App() {

  return (
    <MaxWidthWrapper className='flex'>
      <LandingPage/>
    </MaxWidthWrapper>
  )
}

export default App
