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

function App() {

  return (
    <>
      <Header2></Header2>
      <Hero></Hero>
      <Client></Client>
      <Community></Community>
      <Unlock></Unlock>
      <Achievement></Achievement>
      <Calender></Calender>
      <Customer></Customer>
      <Update></Update>
      <Footer></Footer>
    </>
  )
}

export default App
