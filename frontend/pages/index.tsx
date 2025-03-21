import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../styles/RegisterForm.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      
      <div className={styles.formBox}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={styles.title}
      >
        {/* Glowing title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.title}
        >
          Enter the Shadows
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 mt-2 mb-6"
        >
          Choose your path, warrior...
        </motion.p>

        {/* Button container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className={styles.form}
        >
          <button
            onClick={() => router.push("/signup")}
            className={styles.button}
          >
            Sign Up
          </button>

          <button
            onClick={() => router.push("/signin")}
            className={styles.button}
          >
            Sign In
          </button>
        </motion.div>
      </motion.div>
      </div>
    </div>
  );
}
