import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Transfer: FC<ISvgProps> = ({ width = '14', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.306261 3.57619C0.251055 3.51544 0.206663 3.44568 0.175011 3.36994C0.1125 3.21778 0.1125 3.0471 0.175011 2.89494C0.206663 2.8192 0.251055 2.74944 0.306261 2.68869L2.80626 0.18869C2.86454 0.130416 2.93372 0.0841905 3.00986 0.0526528C3.08599 0.0211151 3.1676 0.00488281 3.25001 0.00488281C3.33242 0.00488281 3.41403 0.0211151 3.49017 0.0526528C3.56631 0.0841905 3.63549 0.130416 3.69376 0.18869C3.75204 0.246964 3.79826 0.316146 3.8298 0.392284C3.86134 0.468423 3.87757 0.550028 3.87757 0.63244C3.87757 0.714852 3.86134 0.796457 3.8298 0.872596C3.79826 0.948735 3.75204 1.01792 3.69376 1.07619L2.25626 2.50744H13.25C13.4158 2.50744 13.5747 2.57329 13.692 2.6905C13.8092 2.80771 13.875 2.96668 13.875 3.13244C13.875 3.2982 13.8092 3.45717 13.692 3.57438C13.5747 3.69159 13.4158 3.75744 13.25 3.75744H2.25626L3.69376 5.18869C3.75204 5.24696 3.79826 5.31614 3.8298 5.39228C3.86134 5.46842 3.87757 5.55003 3.87757 5.63244C3.87757 5.71485 3.86134 5.79646 3.8298 5.8726C3.79826 5.94873 3.75204 6.01792 3.69376 6.07619C3.63549 6.13446 3.56631 6.18069 3.49017 6.21223C3.41403 6.24376 3.33242 6.26 3.25001 6.26C3.1676 6.26 3.08599 6.24376 3.00986 6.21223C2.93372 6.18069 2.86454 6.13446 2.80626 6.07619L0.306261 3.57619ZM13.6937 10.1887C13.749 10.2494 13.7933 10.3192 13.825 10.3949C13.8875 10.5471 13.8875 10.7178 13.825 10.8699C13.7933 10.9457 13.749 11.0154 13.6937 11.0762L11.1937 13.5762C11.0761 13.6939 10.9164 13.76 10.75 13.76C10.5836 13.76 10.4239 13.6939 10.3063 13.5762C10.1886 13.4585 10.1224 13.2989 10.1224 13.1324C10.1224 12.966 10.1886 12.8064 10.3063 12.6887L11.7437 11.2574H0.75C0.58424 11.2574 0.425269 11.1916 0.308058 11.0744C0.190848 10.9572 0.125 10.7982 0.125 10.6324C0.125 10.4667 0.190848 10.3077 0.308058 10.1905C0.425269 10.0733 0.58424 10.0074 0.75 10.0074H11.7437L10.3063 8.57619C10.1886 8.4585 10.1224 8.29888 10.1224 8.13244C10.1224 7.966 10.1886 7.80638 10.3063 7.68869C10.4239 7.571 10.5836 7.50488 10.75 7.50488C10.9164 7.50488 11.0761 7.571 11.1937 7.68869L13.6937 10.1887Z'
      fill='inherit'
    />
  </svg>
);

const TransferSVG = memo(Transfer);
export default TransferSVG;
