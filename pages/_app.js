import { AnimatePresence } from "framer-motion"
import "src/public/styles/reset.css"
import styles from "src/public/styles/app.module.css"

export default function App({ Component, pageProps }) {

  return (
      <AnimatePresence>
        <div className={styles.main_container}>
          <div className={styles.content_container}>
            <Component {...pageProps} />
          </div>
        </div>
      </AnimatePresence>
    )
}
