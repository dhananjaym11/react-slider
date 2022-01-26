import './App.css';
import ImageSlider from './component/ImageSlider';
import one from './images/1.jpg';
import two from './images/2.jpg';
import three from './images/3.jpg';
import four from './images/4.jpg';

function App() {
  const images = [
    { image: one, text: 'Banner One' },
    { image: two, text: 'Banner Two' },
    { image: three, text: 'Banner Three' },
    { image: four, text: 'Banner Four' },
  ];
  return (
    <div className="page">
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
