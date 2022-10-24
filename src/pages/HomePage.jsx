
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import styled from 'styled-components'
const HomePage = () => {
  return (
    <HomePageContainer>
    
    <NavBar/>
    <Header/>

    </HomePageContainer>
  )
}

export default HomePage

const HomePageContainer = styled.main`
padding: 2rem;
`