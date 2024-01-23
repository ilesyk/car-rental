import { Link } from "react-router-dom";
import { HeadWrap, HomePageHead, HomePageTags, HomePageText, HomePageWrap, GoToCatalogButton } from "../components/HomePage/HomePage.styled";

const Home = () => {
    return (
      <HomePageWrap>
        <HeadWrap>
          <HomePageHead>Car Rental</HomePageHead>
          <h2>Convenience, Comfort, Safety</h2>
        </HeadWrap>
        <HomePageText>
          Looking for a reliable and comfortable car for your trip? Our website
          will help you find the perfect option. We offer a wide selection of
          cars for any taste and budget. Our cars are always in good condition
          and undergo regular maintenance.
        </HomePageText>
        <HomePageTags>Book your car now and enjoy your trip!</HomePageTags>
        <Link to="catalog">
          <GoToCatalogButton>
            Go to catalog
          </GoToCatalogButton>
        </Link>
      </HomePageWrap>
    );
}

export default Home;