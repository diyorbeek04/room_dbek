import './App.css';
import BarndsChooseRoomComponent from './components/brandsChooseRoom';
import CoruselTopComponent from './components/coruselTop';
import DesignTextComponent from './components/designText';
import ExploreComponent from './components/explore';
import FooterComponent from './components/footer';
import HeaderComponent from './components/header';
import HeroComponent from './components/hero';
import ProductComponent from './components/product';
import ReviewsComponent from './components/reviews';
import ShopComponent from './components/shop';
import TrialComponent from './components/trial';

function App() {
  return (
    <>
      <HeaderComponent />
      <HeroComponent />
      <DesignTextComponent />
      <ProductComponent />
      <BarndsChooseRoomComponent />
      <CoruselTopComponent />
      <ExploreComponent />
      <ReviewsComponent />
      <ShopComponent />
      <TrialComponent />
      <FooterComponent />
    </>
  );
}

export default App;
