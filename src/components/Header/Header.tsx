import Image from "next/image";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <nav className={styles.nav}>
                    <div className={styles.logoBlock}>
                        <div>
                            <Image src="/logo.jpg" width={40} height={40} alt={""} />
                        </div>
                        <div className={styles.logoInfo}>
                            <h3>Lee Djen Sep</h3>
                            <span>23 lvl</span>
                        </div>
                    </div>
                    <div></div>
                </nav>
            </div>
        </header>
    );
};
