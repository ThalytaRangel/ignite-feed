import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Thalyta Rangel"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perspiciatis magnam necessitatibus expedita facere maxime dolor nulla harum eum corrupti dolorem rem saepe laudantium molestiae sequi, ullam, amet a praesentium!"
          />
          <Post
            author="Jhonny Rangel"
            content="Vou passar e ser classificado na prova da prefeitura de Maricá"
          />
        </main>
      </div>
    </div>
  );
}
