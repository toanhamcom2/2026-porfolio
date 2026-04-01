"use client";

import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './Navbar.module.css';

const IconSpace = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
);

const IconBlog = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
);

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /><path d="M2 12h20" /></svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'VN' | 'EN'>('VN');

  return (
    <>
      <nav className={styles.navbar}>
        {/* LOGO on the Left */}
        <a href="/" className={styles.logo}>
          MERO
        </a>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <NavigationMenu.Root className={styles.navRoot}>
          <NavigationMenu.List className={styles.navList}>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className={styles.navTrigger}>
                <span className={styles.itemIcon}><IconSpace /></span> Mero's space
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className={styles.navContent}>
                <ul className={styles.dropdownList}>
                  <li className={styles.dropdownItem}>
                    <a href="#about">About Mero</a>
                  </li>
                  <li className={styles.dropdownItem}>
                    <a href="#portfolio">Featured Works</a>
                  </li>
                  <li className={styles.dropdownItem}>
                    <a href="#services">Services</a>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link href="#blog" className={styles.navLink}>
                <span className={styles.itemIcon}><IconBlog /></span> Blog
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <div className={styles.ViewportPosition}>
            <NavigationMenu.Viewport className={styles.navViewport} />
          </div>
        </NavigationMenu.Root>

        {/* ACTIONS on the Right */}
        <div className={styles.rightActions}>
          <div
            className={styles.langSwitch}
            title="Đổi ngôn ngữ"
            onClick={() => setLanguage(language === 'VN' ? 'EN' : 'VN')}
          >
            <span className={styles.globeIcon}><IconGlobe /></span>
            <span className={styles.langText}>{language}</span>
          </div>

          <a href="#" className={styles.btnDownloadCV}>
            Tải CV
          </a>

          <div
            className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (Visible only when hamburger is clicked) */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileSection}>
          <div className={styles.mobileLabel}>
            <span className={styles.mobileLabelIcon}><IconSpace /></span>
            Mero's space
          </div>
          <a href="#about" className={styles.mobileItem} onClick={() => setIsMobileMenuOpen(false)}>
            About Mero
          </a>
          <a href="#portfolio" className={styles.mobileItem} onClick={() => setIsMobileMenuOpen(false)}>
            Featured Works
          </a>
          <a href="#services" className={styles.mobileItem} onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </a>
        </div>

        <div className={styles.mobileSection}>
          <div className={styles.mobileLabel}>
            <span className={styles.mobileLabelIcon}><IconBlog /></span>
            Blog
          </div>
          <a href="#blog" className={styles.mobileItem} onClick={() => setIsMobileMenuOpen(false)}>
            Latest Posts
          </a>
        </div>
      </div>
    </>
  );
}
