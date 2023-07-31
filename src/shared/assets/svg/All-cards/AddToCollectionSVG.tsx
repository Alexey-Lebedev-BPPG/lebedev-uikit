import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const AddToCollection: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 6H12L10.59 4.59C10.21 4.21 9.7 4 9.17 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM18 14H16V16C16 16.55 15.55 17 15 17C14.45 17 14 16.55 14 16V14H12C11.45 14 11 13.55 11 13C11 12.45 11.45 12 12 12H14V10C14 9.45 14.45 9 15 9C15.55 9 16 9.45 16 10V12H18C18.55 12 19 12.45 19 13C19 13.55 18.55 14 18 14Z'
      fill='#121212'
    />
  </svg>
);
const AddToCollectionSVG = memo(AddToCollection);
export default AddToCollectionSVG;
