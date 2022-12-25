import React, { FC } from 'react';
import styles from "./Subscription.module.scss"

const Subscription: FC = () => {
    return (
        <form className={styles.subscriptionConteiner}>
            <h2>
                Subscribe to Newsletter
            </h2>
            <p>
                Be the first to know about new IT books, upcoming releases, exclusive offers and more.
            </p>
            <div className={styles.subscriptionConteinerForm}>
                <input 
                    type="text" 
                    placeholder='Your email'
                />
                <button>
                    Subscribe
                </button>
            </div>
        </form>
    );
};

export default Subscription;