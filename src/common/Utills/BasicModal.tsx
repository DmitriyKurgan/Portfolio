import React from 'react';
import styles from './Modal.module.css';

export const BasicModal = () => {
    return (
        <div id="openModal" className={styles.modal}>
            <div className={styles.modalDialog}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h3 className={styles.modalTitle}>Sending a message to the mail</h3>
                        <a href="#close" title="Close" className={styles.close}>×</a>
                    </div>
                    <div className={styles.modalBody}>
                        <p>Your message was sent...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
