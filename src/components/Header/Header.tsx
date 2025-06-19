"use client";

import { getCurrentAge } from "@/common/utils/getCurrentAge";
import styles from "./Header.module.css";
import clsx from "clsx";
import { useEffect, useRef } from "react";

export const Header = () => {
    const { age, hoursLeft } = getCurrentAge();
    const progressBarRef = useRef<HTMLDivElement>(null);
    const heartRef = useRef<HTMLDivElement>(null);

    const updateHPProgressbar = () => {
        const bar = progressBarRef.current;
        const heart = heartRef.current;
        if (!bar || !heart) return;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

        bar.style.width = `${percent * 100}%`;

        if (percent >= 1) {
            heart.classList.add("active");
        } else {
            heart.classList.remove("active");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", updateHPProgressbar);
        updateHPProgressbar();

        return () => {
            window.removeEventListener("scroll", updateHPProgressbar);
        };
    }, []);

    return (
        <nav className={styles.navWrapper}>
            <div className={clsx("container", styles.navContainer)}>
                <div className={styles.navbar}>
                    <div className={styles.navbarProfile}>
                        <div className={styles.navbarAvatar} />
                        <div className={styles.navbarProfileInfo}>
                            <div className={styles.navbarProfileName}>Lee Djen Sep</div>
                            <div className={styles.navbarProfileLevel}>{age} lvl</div>
                            <div className={styles.navbarProfileExp}>{hoursLeft} lvl</div>
                        </div>
                    </div>
                    <div className={styles.navbarProgressbarArea}>
                        <div className={styles.hpProgressbarWrap}>
                            <div className={styles.hpProgressbar}>
                                <div className={styles.hpProgressbarFill} ref={progressBarRef} />
                            </div>
                            <div className={styles.hpHeart} title="Full HP" ref={heartRef}>
                                <svg viewBox="0 0 16 16" width="32" height="32">
                                    <rect x="2" y="6" width="2" height="2" fill="#ff3860" />
                                    <rect x="4" y="4" width="2" height="2" fill="#ff3860" />
                                    <rect x="6" y="2" width="2" height="2" fill="#ff3860" />
                                    <rect x="8" y="2" width="2" height="2" fill="#ff3860" />
                                    <rect x="10" y="4" width="2" height="2" fill="#ff3860" />
                                    <rect x="12" y="6" width="2" height="2" fill="#ff3860" />
                                    <rect x="2" y="8" width="12" height="2" fill="#ff3860" />
                                    <rect x="4" y="10" width="8" height="2" fill="#ff3860" />
                                    <rect x="6" y="12" width="4" height="2" fill="#ff3860" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
