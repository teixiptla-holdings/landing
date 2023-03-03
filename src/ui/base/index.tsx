import { ReactNode } from 'react';

import { AppConfig } from '../../utils/app-config';
import { Meta } from './meta';

type IBaseProps = {
  children?: ReactNode;
};

const Base = (props: IBaseProps) => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    {props.children}
  </>
);

export { Base };
