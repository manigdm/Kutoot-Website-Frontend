// app/layout.js or app/layout.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/authContext';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import ScrollToTop from '@/components/scrollToTop/ScrollToTop';
import Login from '@/components/modal/Login';
import SignUp from '@/components/modal/SignUp';
import { AppProvider } from '@/context/context';
import Bootstrap from '@/components/common/Bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/public/css/line-awesome.min.css';
import '@/public/css/modal-video.scss';
import '@/styles/main.sass';

function LayoutInner({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, authChecked } = useAuth();

  useEffect(() => {
    if (!authChecked) return; // wait until auth check completes

    if (!isLoggedIn && pathname !== '/login') {
      router.push('/login');
    } else if (isLoggedIn && pathname === '/login') {
      router.push('/');
    }
  }, [isLoggedIn, authChecked, pathname]);

  if (!authChecked) return null; // or a loader

  return (
    <>
      <SignUp />
      {!isLoggedIn && pathname === '/login' ? (
        <Login />
      ) : (
        <>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Bootstrap>
          <AppProvider>
            <AuthProvider>
              <LayoutInner>{children}</LayoutInner>
            </AuthProvider>
          </AppProvider>
        </Bootstrap>
      </body>
    </html>
  );
}