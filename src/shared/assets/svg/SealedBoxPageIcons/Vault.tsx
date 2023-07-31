import { FC, memo } from 'react';
import { ISvgProps } from '../types';

export const VaultSVG: FC<ISvgProps> = memo(
  ({ width = '20', height = '20' }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14.2188 7.60417H13.5156V6.23512C13.5156 4.34583 11.9406 2.8125 10 2.8125C8.05938 2.8125 6.48438 4.34583 6.48438 6.23512V7.60417H5.78125C5.00781 7.60417 4.375 8.22024 4.375 8.97321V15.8185C4.375 16.5714 5.00781 17.1875 5.78125 17.1875H14.2188C14.9922 17.1875 15.625 16.5714 15.625 15.8185V8.97321C15.625 8.22024 14.9922 7.60417 14.2188 7.60417ZM7.89062 6.23512C7.89062 5.09881 8.83281 4.18155 10 4.18155C11.1672 4.18155 12.1094 5.09881 12.1094 6.23512V7.60417H7.89062V6.23512ZM14.2188 15.8185H5.78125V8.97321H14.2188V15.8185ZM10 13.7649C10.7734 13.7649 11.4062 13.1488 11.4062 12.3958C11.4062 11.6429 10.7734 11.0268 10 11.0268C9.22656 11.0268 8.59375 11.6429 8.59375 12.3958C8.59375 13.1488 9.22656 13.7649 10 13.7649Z'
        fill='#DFE0E1'
      />
    </svg>
  ),
);
