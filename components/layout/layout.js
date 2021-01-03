// import { motion } from 'framer-motion';
import Sticky from 'react-stickynode';
import { ParallaxProvider } from 'react-scroll-parallax';
import Meta from '../meta';
import Header from './header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      {/* End of default SEO */}
      <ParallaxProvider>
        <div
          // initial="exit"
          // animate="enter"
          // exit="exit"
          className="flex flex-col min-h-screen"
        >
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav">
            <Header />
          </Sticky>
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </ParallaxProvider>
    </>
  );
}
