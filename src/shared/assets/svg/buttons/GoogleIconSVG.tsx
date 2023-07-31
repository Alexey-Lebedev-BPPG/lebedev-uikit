import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const GoogleIconSVG: FC<ISvgProps> = memo(({ width = '25', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 25 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.354 10.1819V14.0546H17.6128C17.3819 15.3001 16.6889 16.3547 15.6496 17.0638L18.8209 19.582C20.6686 17.8366 21.7346 15.2729 21.7346 12.2275C21.7346 11.5184 21.6724 10.8365 21.5569 10.182L12.354 10.1819Z'
      fill='#4285F4'
    />
    <path
      d='M6.87784 13.9033L6.1626 14.4636L3.63086 16.4818C5.23871 19.7454 8.53412 22 12.3538 22C14.9921 22 17.204 21.1091 18.8207 19.5819L15.6495 17.0636C14.7789 17.6636 13.6685 18.0273 12.3538 18.0273C9.81327 18.0273 7.65473 16.2728 6.88184 13.9091L6.87784 13.9033Z'
      fill='#34A853'
    />
    <path
      d='M3.6309 7.51831C2.9647 8.86372 2.58276 10.3819 2.58276 12.0001C2.58276 13.6182 2.9647 15.1365 3.6309 16.4819C3.6309 16.4909 6.88219 13.9 6.88219 13.9C6.68676 13.3 6.57125 12.6637 6.57125 12C6.57125 11.3363 6.68676 10.6999 6.88219 10.0999L3.6309 7.51831Z'
      fill='#FBBC05'
    />
    <path
      d='M12.3541 5.98184C13.7931 5.98184 15.0723 6.49092 16.0939 7.47276L18.892 4.60914C17.1953 2.99098 14.9924 2 12.3541 2C8.53432 2 5.23871 4.24547 3.63086 7.51822L6.88205 10.1001C7.65484 7.73638 9.81348 5.98184 12.3541 5.98184Z'
      fill='#EA4335'
    />
  </svg>
));
export default GoogleIconSVG;
