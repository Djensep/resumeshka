import DecryptedText from "@/ui/DecryptedText/DecryptedText";
import styles from "./Promo.module.css";
export const Promo = () => {
    return (
        <div className="container">
            <div className={styles.promo}>
                <DecryptedText
                    text="Hi i`m Djen Sep, a Full-stack Developer"
                    animateOn="view"
                    revealDirection="start"
                    maxIterations={20}
                    useOriginalCharsOnly={true}
                    speed={120}
                />
                <DecryptedText
                    text="i specialize in building web application using modern technologies"
                    animateOn="view"
                    revealDirection="start"
                    maxIterations={20}
                    useOriginalCharsOnly={true}
                    speed={120}
                />
            </div>
        </div>
    );
};
