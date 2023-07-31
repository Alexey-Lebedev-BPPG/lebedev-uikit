import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Edit: FC<ISvgProps> = ({ width = '20', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 20'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.67528 3.00927C2.10766 2.57689 2.69408 2.33398 3.30556 2.33398H8.75C9.16421 2.33398 9.5 2.66977 9.5 3.08398C9.5 3.4982 9.16421 3.83398 8.75 3.83398H3.30556C3.09191 3.83398 2.88701 3.91886 2.73594 4.06993C2.58487 4.221 2.5 4.42589 2.5 4.63954V15.5284C2.5 15.7421 2.58487 15.947 2.73594 16.098C2.88701 16.2491 3.09191 16.334 3.30556 16.334H14.1944C14.4081 16.334 14.613 16.2491 14.7641 16.098C14.9151 15.947 15 15.7421 15 15.5284V10.084C15 9.66977 15.3358 9.33398 15.75 9.33398C16.1642 9.33398 16.5 9.66977 16.5 10.084V15.5284C16.5 16.1399 16.2571 16.7263 15.8247 17.1587C15.3923 17.5911 14.8059 17.834 14.1944 17.834H3.30556C2.69408 17.834 2.10766 17.5911 1.67528 17.1587C1.24291 16.7263 1 16.1399 1 15.5284V4.63954C1 4.02807 1.24291 3.44164 1.67528 3.00927Z'
      fill='#828585'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.7301 2.5C15.5704 2.5 15.4173 2.56342 15.3044 2.67632L9.3966 8.5841L9.11282 9.71922L10.2479 9.43544L16.1557 3.52766C16.2686 3.41477 16.332 3.26165 16.332 3.10199C16.332 2.94233 16.2686 2.78921 16.1557 2.67632C16.0428 2.56342 15.8897 2.5 15.7301 2.5ZM14.2437 1.61566C14.6379 1.22146 15.1726 1 15.7301 1C16.2875 1 16.8222 1.22146 17.2164 1.61566C17.6106 2.00986 17.832 2.54451 17.832 3.10199C17.832 3.65947 17.6106 4.19412 17.2164 4.58832L11.1617 10.643C11.0656 10.7391 10.9452 10.8073 10.8133 10.8403L8.26395 11.4776C8.00837 11.5415 7.738 11.4666 7.55172 11.2803C7.36543 11.094 7.29054 10.8237 7.35444 10.5681L7.99177 8.01876C8.02474 7.88689 8.09293 7.76645 8.18905 7.67033L14.2437 1.61566Z'
      fill='#828585'
    />
  </svg>
);

const EditSVG = memo(Edit);
export default EditSVG;