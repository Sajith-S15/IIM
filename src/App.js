import './App.css';
import NavigationBar from './NavigationBar';
import Header from './Header';
import VideoSection from './VideoSection';
import ProgrammesSection from './ProgrammeSection';
import EventsSection from './EventSection';
import RecruitersSection from './RecruiterSection';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <VideoSection />
      <ProgrammesSection />
      <EventsSection />
      <RecruitersSection />
      <Footer />
      
    </div>
  );
}

export default App;
