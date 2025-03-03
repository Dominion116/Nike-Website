import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="sm:pl-16 pl-8 sm:pr-16 pr-8 sm:pb-24 pb-12">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProducts />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality />
      </section>
      <section className="sm:px-16 px-8 py-10">
        <Services />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SpecialOffer />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-blue-50">
        <CustomerReviews />
      </section>
      <section className="sm:px-16 px-8 sm:py-32 py-16">
        <Subscribe />
      </section>
      <section className="bg-black sm:p-16 p-8 sm:pt-24 pt-12 pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
