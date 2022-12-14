import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');
    const handleOnError = () => {
        setFallback(images.noImage);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            ref={ref}
            {...props}
            alt={alt}
            onError={handleOnError}
        />
    );
});

export default Image;
