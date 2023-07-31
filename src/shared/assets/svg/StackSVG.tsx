import { FC, memo } from 'react';
import { ISvgProps } from './types';

const Stack: FC<ISvgProps> = ({ width = '14', height = '14' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12.8168 9.29673C12.9036 9.44713 12.9272 9.6258 12.8826 9.7936C12.8379 9.9614 12.7285 10.1046 12.5784 10.192L7.32838 13.2545C7.22797 13.3131 7.11379 13.344 6.99753 13.344C6.88126 13.344 6.76708 13.3131 6.66667 13.2545L1.41667 10.192C1.26626 10.1043 1.15684 9.96045 1.11249 9.7921C1.06813 9.62375 1.09247 9.44467 1.18014 9.29427C1.26782 9.14386 1.41165 9.03444 1.58 8.99009C1.74835 8.94573 1.92743 8.97007 2.07784 9.05774L6.99971 11.9277L11.9221 9.05774C12.0726 8.97118 12.2511 8.94772 12.4188 8.99251C12.5865 9.0373 12.7296 9.14668 12.8168 9.29673ZM11.9221 6.43274L7.00026 9.30274L2.08112 6.43274C1.93114 6.35222 1.75573 6.33312 1.59194 6.37949C1.42814 6.42586 1.28878 6.53406 1.20326 6.68125C1.11774 6.82844 1.09276 7.0031 1.1336 7.16836C1.17444 7.33362 1.2779 7.47655 1.42213 7.56696L6.67213 10.6295C6.77254 10.6881 6.88673 10.719 7.00299 10.719C7.11926 10.719 7.23344 10.6881 7.33385 10.6295L12.5839 7.56696C12.7343 7.47921 12.8436 7.33531 12.888 7.16691C12.9323 6.9985 12.9079 6.8194 12.8201 6.66899C12.7324 6.51859 12.5885 6.4092 12.42 6.36489C12.2516 6.32059 12.0725 6.34499 11.9221 6.43274ZM1.09401 4.37485C1.09422 4.25986 1.12465 4.14695 1.18224 4.04742C1.23982 3.94789 1.32255 3.86524 1.42213 3.80774L6.67213 0.745243C6.77266 0.68695 6.88679 0.65625 7.00299 0.65625C7.11919 0.65625 7.23333 0.68695 7.33385 0.745243L12.5839 3.80774C12.683 3.8655 12.7654 3.94827 12.8226 4.04778C12.8798 4.14729 12.9099 4.26007 12.9099 4.37485C12.9099 4.48964 12.8798 4.60241 12.8226 4.70192C12.7654 4.80144 12.683 4.8842 12.5839 4.94196L7.33385 8.00446C7.23344 8.06308 7.11926 8.09397 7.00299 8.09397C6.88673 8.09397 6.77254 8.06308 6.67213 8.00446L1.42213 4.94196C1.32255 4.88447 1.23982 4.80182 1.18224 4.70229C1.12465 4.60276 1.09422 4.48984 1.09401 4.37485ZM3.05292 4.37485L7.00026 6.67774L10.9476 4.37485L7.00026 2.07196L3.05292 4.37485Z'
      fill='#DBDBDB'
    />
  </svg>
);
const StackSVG = memo(Stack);
export default StackSVG;