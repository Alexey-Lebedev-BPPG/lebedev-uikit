import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Plus: FC<ISvgProps> = ({ width = '24', height = '24' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${height} ${width}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.125 3.75C13.125 3.12868 12.6213 2.625 12 2.625C11.3787 2.625 10.875 3.12868 10.875 3.75V10.875H3.75C3.12868 10.875 2.625 11.3787 2.625 12C2.625 12.6213 3.12868 13.125 3.75 13.125H10.875V20.25C10.875 20.8713 11.3787 21.375 12 21.375C12.6213 21.375 13.125 20.8713 13.125 20.25V13.125H20.25C20.8713 13.125 21.375 12.6213 21.375 12C21.375 11.3787 20.8713 10.875 20.25 10.875H13.125V3.75Z'
      fill='#939393'
    />
  </svg>
);
const PlusSVG = memo(Plus);
export default PlusSVG;
