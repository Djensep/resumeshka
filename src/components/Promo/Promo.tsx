import DecryptedText from "@/ui/DecryptedText/DecryptedText";
import styles from "./Promo.module.css";

export const Promo = () => {
    return (
        <div className="container">
            <section className={styles.promoSection}>
                <div className={styles.gif}>
                    <img src={"/gifs/star.gif"} />
                </div>
                <div className={styles.promoText}>
                    <h1>
                        <DecryptedText
                            text="Hi i`m Djen Sep, a Full-stack Developer"
                            animateOn="view"
                            revealDirection="start"
                            maxIterations={10}
                            useOriginalCharsOnly={true}
                            speed={60}
                        />
                    </h1>
                    <h2>
                        <DecryptedText
                            text="I specialize in building web application using modern technologies"
                            animateOn="view"
                            revealDirection="start"
                            maxIterations={10}
                            useOriginalCharsOnly={true}
                            speed={60}
                        />
                    </h2>
                </div>
                <div className={styles.gif}>
                    <img src={"/gifs/star.gif"} />
                </div>
            </section>
        </div>
    );
};
