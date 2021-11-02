import styles from "./MemeCanvas.module.css";
import Popup from "reactjs-popup";

export const dataTestId = "meme-canvas-toolbar";

export default function MemeCanvasToolbar() {
  return (
    <div className={styles.canvasToolbar} data-testid={dataTestId}>
      <h1 className={styles.canvasToolbarTitle}>Meme Generator</h1>
      <ul className={styles.canvasToolbarButtons}>
        <li
          className={styles.liWhatIsThis}
          title="About"
          suppressHydrationWarning={true}
        >
          {process.browser && (
            <Popup trigger={<i>?</i>} modal>
              {(close) => (
                <div className={styles.aboutModal}>
                  <div className={styles.aboutModalToolbar}>
                    <button className={styles.aboutModalClose} onClick={close}>
                      &times;
                    </button>
                  </div>
                  <div className={styles.aboutModalContent}>
                    <h2>About</h2>
                    <p>
                      This is React app based on imgflip API (
                      <a href="https://imgflip.com/api">
                        https://imgflip.com/api
                      </a>
                      ).
                    </p>
                    <p>
                      👨‍💻 by{" "}
                      <a href="https://pawelpiotrowski.dev">Pawel Piotrowski</a>
                    </p>
                  </div>
                </div>
              )}
            </Popup>
          )}
        </li>
      </ul>
    </div>
  );
}
