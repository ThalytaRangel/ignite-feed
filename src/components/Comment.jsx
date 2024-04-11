import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="11 de abril às 12:46h"
                dateTime="2024-04-11 12:46:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>25</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
