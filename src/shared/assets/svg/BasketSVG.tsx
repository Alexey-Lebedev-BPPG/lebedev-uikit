import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Basket: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.3125 3.5625C9.79035 3.5625 9.2896 3.76992 8.92038 4.13913C8.55117 4.50835 8.34375 5.0091 8.34375 5.53125V6.375H6.9375H5.8125C5.34651 6.375 4.96875 6.75276 4.96875 7.21875C4.96875 7.68474 5.34651 8.0625 5.8125 8.0625H6.09375V17.625C6.09375 17.998 6.24191 18.3556 6.50563 18.6194C6.76936 18.8831 7.12704 19.0312 7.5 19.0312H16.5C16.873 19.0312 17.2306 18.8831 17.4944 18.6194C17.7581 18.3556 17.9062 17.998 17.9062 17.625V8.0625H18.1875C18.6535 8.0625 19.0312 7.68474 19.0312 7.21875C19.0312 6.75276 18.6535 6.375 18.1875 6.375H17.0625H15.6562V5.53125C15.6562 5.0091 15.4488 4.50835 15.0796 4.13913C14.7104 3.76992 14.2096 3.5625 13.6875 3.5625H10.3125ZM13.9688 6.375V5.53125C13.9688 5.45666 13.9391 5.38512 13.8864 5.33238C13.8336 5.27963 13.7621 5.25 13.6875 5.25H10.3125C10.2379 5.25 10.1664 5.27963 10.1136 5.33238C10.0609 5.38512 10.0312 5.45666 10.0312 5.53125V6.375H13.9688ZM9.1875 8.0625H7.78125V17.3438H16.2188V8.0625H14.8125H9.1875ZM10.3125 9.46875C10.7785 9.46875 11.1562 9.84651 11.1562 10.3125V14.8125C11.1562 15.2785 10.7785 15.6562 10.3125 15.6562C9.84651 15.6562 9.46875 15.2785 9.46875 14.8125V10.3125C9.46875 9.84651 9.84651 9.46875 10.3125 9.46875ZM14.5312 10.3125C14.5312 9.84651 14.1535 9.46875 13.6875 9.46875C13.2215 9.46875 12.8438 9.84651 12.8438 10.3125V14.8125C12.8438 15.2785 13.2215 15.6562 13.6875 15.6562C14.1535 15.6562 14.5312 15.2785 14.5312 14.8125V10.3125Z'
      fill='inherit'
    />
  </svg>
);
const BasketSVG = memo(Basket);
export default BasketSVG;
