import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/appbar/AppBar';
import LoaderMain from '../loaderMain/LoaderMain';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense
          fallback={
            <div className={css.refreshLoader}>
              <LoaderMain />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
