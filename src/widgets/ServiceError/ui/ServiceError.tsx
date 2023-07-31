import { memo, useCallback } from 'react';
import cls from './ServiceError.module.scss';
import ReloadIcon from '@/shared/assets/svg/ErrorsIcons/Bold.svg';
import ErrorIcon from '@/shared/assets/svg/ErrorsIcons/error405.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Buttons';
import { VStack } from '@/shared/ui/Stack';

export interface ServiceErrorProps {
  className?: string;
  type?: 'sealedBox';
}
export const ServiceError = memo((props: ServiceErrorProps) => {
  const { className, type } = props;

  const reloading = useCallback(() => {
    if (!type && type !== 'sealedBox') {
      localStorage.clear();
      sessionStorage.removeItem('persist:root');
      localStorage.removeItem('persist:root');
    }

    window.location.reload();
  }, [type]);

  return (
    <VStack
      max
      justify='center'
      align='center'
      gap={2.5}
      className={classNames(cls.ServiceError, {}, [className])}
    >
      <VStack gap={2} justify='center' align='center'>
        <ErrorIcon />
        <VStack gap={0.5} justify='center' align='center'>
          <div className={cls.title}>Something went wrong </div>
          <div className={cls.subTitle}>
            There was a problem processing the request
          </div>
        </VStack>
      </VStack>
      <div>
        <Button typeButton='secondary' text='reload page' onClick={reloading}>
          <ReloadIcon />
        </Button>
      </div>
    </VStack>
  );
});
