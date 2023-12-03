import { Spinner } from '@chakra-ui/react';
import css from './loaderMain.module.css';

const LoaderMain = () => {
  return (
    <div className={css.loaderMain}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};

export default LoaderMain;
