"use client";

import styles from '../app/styles/Header.module.scss';
import Logo from './Logo';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo/>
            <h1>Bem-vindo de volta, Marcus</h1>
            <p>Segunda, 01 de dezembro de 2025</p>
        </header>
    );
}
