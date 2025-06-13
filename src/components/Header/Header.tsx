import Image from "next/image";
import styles from "./Header.module.css";

const navLinks = [
    { href: "/", text: "About me" },
    { href: "/", text: "My projects" },
    { href: "/", text: "Technologies" },
    { href: "/", text: "Contacts" },
];

export const Header = () => {
    return (
        <header className="container">
            <nav className={styles.nav}>
                <div>
                    <Image src="/logo.jpg" width={40} height={40} alt={""} />
                </div>
                <ul className={styles.navList}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
