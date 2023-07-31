import { FC, memo } from 'react';
import { ISvgProps } from '../../types';

const YouTube: FC<ISvgProps> = ({ width = '28', height = '28' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 28 28'
    fill='inherit'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M15.8484 14L12.8625 12.2938V15.7063L15.8484 14Z' fill='#939393' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.625 14C2.625 7.71776 7.71776 2.625 14 2.625C20.2822 2.625 25.375 7.71776 25.375 14C25.375 20.2822 20.2822 25.375 14 25.375C7.71776 25.375 2.625 20.2822 2.625 14ZM18.4078 10.232C18.9055 10.3742 19.2609 10.7297 19.4031 11.2273C19.6875 12.1516 19.6875 14 19.6875 14C19.6875 14 19.6875 15.8484 19.4742 16.7727C19.332 17.2703 18.9766 17.6258 18.4789 17.768C17.5547 17.9812 14 17.9813 14 17.9813C14 17.9813 10.3742 17.9812 9.52109 17.768C9.02344 17.6258 8.66797 17.2703 8.52578 16.7727C8.3125 15.8484 8.3125 14 8.3125 14C8.3125 14 8.3125 12.1516 8.45469 11.2273C8.59687 10.7297 8.95235 10.3742 9.45 10.232C10.3742 10.0188 13.9289 10.0188 13.9289 10.0188C13.9289 10.0188 17.5547 10.0188 18.4078 10.232Z'
      fill='#939393'
    />
  </svg>
);
const YouTubeSVG = memo(YouTube);
export default YouTubeSVG;
