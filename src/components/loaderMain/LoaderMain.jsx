import { Vortex } from 'react-loader-spinner';
import css from './loaderMain.module.css';

const LoaderMain = () => {
  return (
    <div className={css.loaderMain}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </div>
  );
};

export default LoaderMain;
