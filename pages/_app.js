import Layout from '../layout/Layout'
import '../styles/globals.css'
import '../styles/Transition.css'
import Transition from '../components/Transition2'
import { motion, useScroll, useSpring } from 'framer-motion'

function MyApp({ Component, pageProps }) {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Transition>
    <Layout>
    <motion.div className="progress-bar" style={{ scaleX }} />
      <Component {...pageProps} />
    </Layout>
    </Transition>
  )
}

export default MyApp