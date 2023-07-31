import { FC, memo } from 'react';
import { ISvgProps } from './types';

const List: FC<ISvgProps> = ({ width = '32', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.1344 15.3696L16.6226 26.8606C16.875 27.1131 17.2911 27.1131 17.5435 26.8606L26.8645 17.5373C27.1109 17.2909 27.1236 16.8869 26.8515 16.6147L15.3725 5.13287C15.2619 5.02218 15.0969 4.95 14.9186 4.95H5.59756C5.24497 4.95 4.94756 5.24679 4.94756 5.60065V14.924C4.94756 15.1001 5.01723 15.2554 5.12509 15.3605L5.1344 15.3696ZM16.7516 3.75419L28.2306 15.2361C29.2576 16.2633 29.2576 17.9017 28.2436 18.916L18.9226 28.2393C17.9086 29.2536 16.2576 29.2536 15.2436 28.2393L3.76456 16.7574C3.27056 16.2763 2.99756 15.6132 2.99756 14.924V5.60065C2.99756 4.17029 4.16756 3 5.59756 3H14.9186C15.6076 3 16.2706 3.27307 16.7516 3.75419Z'
      fill='#FF7C01'
    />
    <path
      d='M10.7092 12.5781C10.3137 12.5781 9.92699 12.4608 9.59809 12.2411C9.26919 12.0213 9.01285 11.7089 8.86147 11.3435C8.7101 10.978 8.67049 10.5759 8.74766 10.1879C8.82483 9.79998 9.01531 9.44362 9.29502 9.16391C9.57472 8.88421 9.93109 8.69373 10.319 8.61656C10.707 8.53938 11.1091 8.57899 11.4746 8.73037C11.84 8.88174 12.1524 9.13809 12.3722 9.46699C12.5919 9.79588 12.7092 10.1826 12.7092 10.5781C12.7092 11.1086 12.4985 11.6173 12.1234 11.9923C11.7484 12.3674 11.2397 12.5781 10.7092 12.5781Z'
      fill='#FF7C01'
    />
  </svg>
);
const ListSVG = memo(List);
export default ListSVG;