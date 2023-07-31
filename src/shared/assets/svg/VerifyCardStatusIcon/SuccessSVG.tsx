import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Success: FC<ISvgProps> = ({ width = '17', height = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 17 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.25 8C3.25 5.10051 5.60051 2.75 8.5 2.75C11.3995 2.75 13.75 5.10051 13.75 8C13.75 10.8995 11.3995 13.25 8.5 13.25C5.60051 13.25 3.25 10.8995 3.25 8ZM8.5 1.25C4.77208 1.25 1.75 4.27208 1.75 8C1.75 11.7279 4.77208 14.75 8.5 14.75C12.2279 14.75 15.25 11.7279 15.25 8C15.25 4.27208 12.2279 1.25 8.5 1.25ZM11.7677 7.04266C12.0674 6.75675 12.0786 6.282 11.7927 5.9823C11.5067 5.68259 11.032 5.67142 10.7323 5.95734L7.58169 8.96303L6.26817 7.70778C5.9687 7.4216 5.49395 7.43238 5.20778 7.73184C4.9216 8.0313 4.93238 8.50605 5.23184 8.79222L7.06309 10.5422C7.35281 10.8191 7.809 10.8193 8.09895 10.5427L11.7677 7.04266Z'
      fill='#20E39D'
    />
  </svg>
);
const SuccessSVG = memo(Success);
export default SuccessSVG;