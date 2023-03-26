import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import Dashboard from "./Page/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
