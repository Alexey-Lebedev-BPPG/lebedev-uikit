import { FC, memo } from 'react';
import { ISvgProps } from '../../types';

const LinkedInSVG: FC<ISvgProps> = ({ width = '28', height = '28' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M2.625 14C2.625 7.71776 7.71776 2.625 14 2.625C20.2822 2.625 25.375 7.71776 25.375 14C25.375 20.2822 20.2822 25.375 14 25.375C7.71776 25.375 2.625 20.2822 2.625 14ZM8.45469 12.0805V19.6875H10.8719V12.0805H8.45469ZM8.3125 9.66328C8.3125 10.4453 8.88125 11.0141 9.66328 11.0141C10.4453 11.0141 11.0141 10.4453 11.0141 9.66328C11.0141 8.88125 10.4453 8.3125 9.66328 8.3125C8.95234 8.3125 8.3125 8.88125 8.3125 9.66328ZM17.2703 19.6875H19.5453V14.9953C19.5453 12.6492 18.1234 11.8672 16.7727 11.8672C15.5641 11.8672 14.7109 12.6492 14.4977 13.1469V12.0805H12.2227V19.6875H14.6398V15.6352C14.6398 14.5688 15.3508 14 16.0617 14C16.7727 14 17.2703 14.3555 17.2703 15.5641V19.6875Z'
      fill='#939393'
    />
  </svg>
);
const LinkedIn = memo(LinkedInSVG);
export default LinkedIn;