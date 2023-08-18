import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/appbar/AppBar';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <div className={css.container}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
