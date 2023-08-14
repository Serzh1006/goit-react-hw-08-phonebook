import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from 'components/appbar/AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
