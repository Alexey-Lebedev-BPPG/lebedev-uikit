import { FC, memo } from 'react';
import { ISvgProps } from './types';

const BurnActivity: FC<ISvgProps> = ({ width = 28, height = 28 }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M16.6739 1.44762C16.4728 1.24715 16.1868 1.15678 15.907 1.20522C15.6272 1.25365 15.3883 1.43488 15.2662 1.69129L11.8939 8.77508L8.35952 6.42473C8.16618 6.29615 7.92966 6.2497 7.70205 6.2956C7.47444 6.34149 7.2744 6.47597 7.14599 6.66942C5.43474 9.24741 3.9375 12.3361 3.9375 15.3127C3.9375 17.9814 4.99765 20.5409 6.88474 22.428C8.77182 24.3151 11.3313 25.3752 14 25.3752C16.6687 25.3752 19.2282 24.3151 21.1153 22.428C23.0023 20.5409 24.0625 17.9814 24.0625 15.3127C24.0625 9.22472 19.8533 4.6161 16.6739 1.44762ZM13.04 10.4388L16.3099 3.57034C19.2748 6.63639 22.3125 10.4999 22.3125 15.3127C22.3125 17.5173 21.4367 19.6316 19.8778 21.1905C18.3189 22.7494 16.2046 23.6252 14 23.6252C11.7954 23.6252 9.68107 22.7494 8.12217 21.1905C6.56328 19.6316 5.6875 17.5173 5.6875 15.3127C5.6875 13.1032 6.7128 10.6643 8.13099 8.37438L11.7655 10.7913C11.9768 10.9318 12.2387 10.9737 12.4832 10.906C12.7278 10.8384 12.931 10.6679 13.04 10.4388ZM20.4861 16.3243C20.5617 15.847 20.236 15.3988 19.7587 15.3233C19.2813 15.2478 18.8332 15.5735 18.7576 16.0508C18.598 17.0594 18.1232 17.9916 17.4011 18.7136C16.679 19.4357 15.7469 19.9106 14.7383 20.0702C14.261 20.1457 13.9352 20.5939 14.0108 21.0712C14.0863 21.5485 14.5345 21.8742 15.0118 21.7987C16.3855 21.5813 17.6551 20.9345 18.6385 19.9511C19.622 18.9676 20.2688 17.698 20.4861 16.3243Z'
      fill='#FF7C01'
    />
  </svg>
);
const BurnActivitySVG = memo(BurnActivity);
export default BurnActivitySVG;
