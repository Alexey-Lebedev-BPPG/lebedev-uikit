import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import '@/app/styles/index.scss';

export interface IComponentRenderOptions {
  route?: string;
  theme?: Theme;
}

interface TestProviderProps {
  children: ReactNode;
  options?: IComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props;
  const { route = '/', theme = Theme.LIGHT } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>{children}</div>
      </ThemeProvider>
    </MemoryRouter>
  );
}

export const componentRender = (
  component: ReactNode,
  options: IComponentRenderOptions = {},
) => render(<TestProvider options={options}>{component}</TestProvider>);
