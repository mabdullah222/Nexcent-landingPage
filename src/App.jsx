import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Client from './components/Clients/clients';
import Community from './components/Community/community';
import Header2 from './components/Header/Header2';
import Unlock from './components/Unlock/unlock';
import Achievement from './components/Achievement/achievement';
import Calender from './components/Calender/calender';
import Customer from './components/Customer/customer';
import Update from './components/Updates/update';
import Footer from './components/Footer/footer';
import About from './pages/About';
import Services from './pages/Service';
import ContactUs from './pages/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <Header2></Header2>
      <Routes>
        <Route path='/' element={<>
      <Hero></Hero>
      <Client></Client>
      <Community></Community>
      <Unlock></Unlock>
      <Achievement></Achievement>
      <Calender></Calender>
      <Customer></Customer>
      <Update></Update>
      <Footer></Footer></>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contactus' element={<ContactUs></ContactUs>}></Route>
      <Route path='services' element={<Services></Services>}></Route>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
