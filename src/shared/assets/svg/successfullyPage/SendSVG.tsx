import { FC, memo } from 'react';
import { ISvgProps } from '../types';

const Send: FC<ISvgProps> = ({ width = '68', height = '68' }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 68 68'
    fill='transparent'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.998 2.99609C9.8302 2.99609 4.00004 8.8282 4 15.996C3.99996 20.9404 7.14969 26.0352 10.207 29.9843C13.2644 33.9334 16.3261 36.7401 16.3261 36.7401C16.5106 36.9091 16.7517 37.0029 17.0019 37.0029C17.2521 37.0029 17.4932 36.9091 17.6777 36.7401C17.6777 36.7401 20.7317 33.9334 23.789 29.9843C26.8464 26.0352 29.9979 20.9404 29.9979 15.996C29.998 8.8282 24.1658 2.99609 16.998 2.99609ZM16.998 8.998C20.8521 8.998 23.996 12.1419 23.996 15.996C23.996 19.8502 20.8521 23.0018 16.998 23.0018C13.1439 23.0018 9.99997 19.8502 9.99997 15.996C9.99997 12.1419 13.1439 8.998 16.998 8.998ZM31.6913 19.998C30.7834 24.6234 27.9745 28.8454 25.3691 32.2108C22.1976 36.3073 19.0292 39.2167 19.0292 39.2167C17.8957 40.2548 16.1101 40.2548 14.9765 39.2167C14.9765 39.2167 11.7994 36.3085 8.62692 32.2108C8.4198 31.9432 8.2106 31.6568 8.00194 31.3789V49.9979H15.373C16.9184 48.7501 18.8772 47.9959 21.0019 47.9959C23.1266 47.9959 25.0834 48.7501 26.6288 49.9979H43.0037V23.0018C43.0037 21.3571 41.6426 19.998 39.9979 19.998H31.6913ZM46.9998 27.998C46.4502 28 46.0056 28.4465 46.0037 28.996V49.9979H47.3729C48.9183 48.7501 50.877 47.9959 53.0017 47.9959C55.1264 47.9959 57.0832 48.7501 58.6287 49.9979H63.9997V40.9979C63.9991 40.9004 63.9846 40.804 63.9567 40.7107L60.9801 30.7888C60.8354 30.1138 60.5553 29.4502 60.0661 28.9138C59.5769 28.3774 58.8275 27.9979 57.9977 27.9979L46.9998 27.998ZM21.0019 50.9979C17.1477 50.9979 14.0039 54.1398 14.0039 57.9939C14.0039 61.848 17.1477 64.9997 21.0019 64.9997C24.856 64.9997 27.9979 61.848 27.9979 57.9939C27.9979 54.1398 24.856 50.9979 21.0019 50.9979ZM53.0017 50.9979C49.1476 50.9979 46.0037 54.1398 46.0037 57.9939C46.0037 61.848 49.1476 64.9997 53.0017 64.9997C56.8559 64.9997 59.9998 61.848 59.9998 57.9939C59.9998 54.1398 56.8559 50.9979 53.0017 50.9979ZM8.00194 52.9979V57.9939C7.99994 58.5464 8.44557 58.9959 8.99803 58.9978H11.0644C11.0266 58.6679 11.0058 58.3335 11.0058 57.9939C11.0058 56.1476 11.5666 54.4287 12.5273 52.9979H8.00194ZM29.4745 52.9979C30.4351 54.4287 30.996 56.1476 30.996 57.9939C30.996 58.3333 30.9733 58.6678 30.9374 58.9978H43.0662C43.0284 58.6679 43.0058 58.3335 43.0058 57.9939C43.0058 56.1476 43.5666 54.4287 44.5272 52.9979H29.4745ZM61.4744 52.9979C62.435 54.4287 62.9978 56.1476 62.9978 57.9939C62.9978 58.3333 62.9751 58.6678 62.9373 58.9978H62.9959C63.5513 58.9998 64.002 58.5492 63.9999 57.9939V52.9979H61.4744Z'
      fill='#3D3D3D'
    />
  </svg>
);
const SendSVG = memo(Send);
export default SendSVG;
