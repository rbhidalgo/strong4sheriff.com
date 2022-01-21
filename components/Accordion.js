import { useState } from "react";
import styles from '../styles/Accordion.module.scss'


export default function Accordion(props) {
  const [toggleMe, setToggleMe] = useState(false);

function toggle() {
    setToggleMe(!toggleMe);
}

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "15px",
      }}
    >
      <p
        className={styles.readMore}
        onClick={toggle}
      >
        <p>Read More <span className={`${
                                    toggleMe ? styles.on + ' ' + styles.arrow
                                        : styles.off + ' ' + styles.arrow
                                }`}>&rsaquo;</span></p>
      </p>
      <div
        className={`${
          toggleMe ? styles.on + ' ' + styles.toggleMe
              : styles.off + ' ' + styles.toggleMe
      }`}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}
