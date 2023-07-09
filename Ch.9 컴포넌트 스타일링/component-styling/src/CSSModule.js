import React from 'react';
import styles from './CSSModule.module.css';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const CSSModule = () => {
    return (
        // <div className={`${styles.wrapper} ${styles.inverted}`}>
        //     Hello I'm <span className='something'>CSS Module</span>
        // </div>
        <div className={cx('wrapper', 'inverted')}>
            Hello I'm <span className='something'>CSS Module</span>
        </div>
    );
};

export default CSSModule;