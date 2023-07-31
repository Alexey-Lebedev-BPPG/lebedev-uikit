import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const FrozenFace: FC<ISvgProps> = ({ width = '40', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20 0.5C16.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4901 14.8313 37.4325 9.87718 33.7776 6.22237C30.1228 2.56755 25.1687 0.509911 20 0.5ZM26.75 14C27.195 14 27.63 14.132 28 14.3792C28.3701 14.6264 28.6584 14.9778 28.8287 15.389C28.999 15.8001 29.0436 16.2525 28.9568 16.689C28.87 17.1254 28.6557 17.5263 28.341 17.841C28.0263 18.1557 27.6254 18.37 27.189 18.4568C26.7525 18.5436 26.3001 18.499 25.889 18.3287C25.4778 18.1584 25.1264 17.87 24.8792 17.5C24.632 17.13 24.5 16.695 24.5 16.25C24.5 15.6533 24.7371 15.081 25.159 14.659C25.581 14.2371 26.1533 14 26.75 14ZM13.25 14C13.695 14 14.13 14.132 14.5 14.3792C14.8701 14.6264 15.1584 14.9778 15.3287 15.389C15.499 15.8001 15.5436 16.2525 15.4568 16.689C15.37 17.1254 15.1557 17.5263 14.841 17.841C14.5263 18.1557 14.1254 18.37 13.689 18.4568C13.2525 18.5436 12.8001 18.499 12.389 18.3287C11.9778 18.1584 11.6264 17.87 11.3792 17.5C11.132 17.13 11 16.695 11 16.25C11 15.6533 11.2371 15.081 11.659 14.659C12.081 14.2371 12.6533 14 13.25 14ZM29.9375 29.4125C29.6734 29.6299 29.3421 29.7491 29 29.75C28.7761 29.7515 28.5549 29.7015 28.3533 29.604C28.1518 29.5065 27.9753 29.364 27.8375 29.1875L26 26.9L24.1625 29.1875C24.0239 29.3631 23.8472 29.505 23.6459 29.6025C23.4446 29.7001 23.2237 29.7508 23 29.7508C22.7763 29.7508 22.5555 29.7001 22.3541 29.6025C22.1528 29.505 21.9762 29.3631 21.8375 29.1875L20 26.9L18.1625 29.1875C18.0239 29.3631 17.8472 29.505 17.6459 29.6025C17.4446 29.7001 17.2237 29.7508 17 29.7508C16.7763 29.7508 16.5555 29.7001 16.3541 29.6025C16.1528 29.505 15.9762 29.3631 15.8375 29.1875L14 26.9L12.1625 29.1875C11.9019 29.4551 11.5507 29.6157 11.1779 29.6381C10.805 29.6604 10.4372 29.5429 10.1465 29.3084C9.8557 29.0739 9.66288 28.7394 9.60574 28.3702C9.5486 28.0011 9.63125 27.6239 9.83751 27.3125L12.8375 23.5625C12.9762 23.3869 13.1528 23.245 13.3541 23.1475C13.5555 23.0499 13.7763 22.9992 14 22.9992C14.2237 22.9992 14.4446 23.0499 14.6459 23.1475C14.8472 23.245 15.0239 23.3869 15.1625 23.5625L17 25.85L18.8375 23.5625C18.9762 23.3869 19.1528 23.245 19.3541 23.1475C19.5555 23.0499 19.7763 22.9992 20 22.9992C20.2237 22.9992 20.4446 23.0499 20.6459 23.1475C20.8472 23.245 21.0239 23.3869 21.1625 23.5625L23 25.85L24.8375 23.5625C24.9762 23.3869 25.1528 23.245 25.3541 23.1475C25.5555 23.0499 25.7763 22.9992 26 22.9992C26.2237 22.9992 26.4446 23.0499 26.6459 23.1475C26.8472 23.245 27.0239 23.3869 27.1625 23.5625L30.1625 27.3125C30.2872 27.4645 30.3803 27.6398 30.4366 27.8281C30.4928 28.0165 30.511 28.2142 30.49 28.4096C30.4691 28.6051 30.4094 28.7944 30.3146 28.9666C30.2197 29.1388 30.0915 29.2904 29.9375 29.4125Z'
      fill='#98CBFA'
    />
  </svg>
);
const FrozenFaceSVG = memo(FrozenFace);
export default FrozenFaceSVG;
