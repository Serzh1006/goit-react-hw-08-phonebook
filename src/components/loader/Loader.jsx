import { Spinner } from '@chakra-ui/react';
import css from './loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Spinner color="blue.500" />
    </div>
  );
};

export default Loader;
