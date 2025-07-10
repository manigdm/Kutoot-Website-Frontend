'use client';

// import { useEffect } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/authContext';
import Header from '@/components/header/Header';
import ScrollToTop from '@/components/scrollToTop/ScrollToTop';
import SignUp from '@/components/modal/SignUp';
import { AppProvider } from '@/context/context';
import Bootstrap from '@/components/common/Bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/public/css/line-awesome.min.css';
import '@/public/css/modal-video.scss';
import '@/styles/main.sass';

function LayoutInner({ children }) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const { isLoggedIn, authChecked } = useAuth();

  // const authPages = ['/login', '/verify-otp', '/update-profile'];

  // useEffect(() => {
  //   if (!authChecked) return;

  //   if (!isLoggedIn && !authPages.includes(pathname)) {
  //     router.push('/login');
  //   } else if (isLoggedIn && authPages.includes(pathname)) {
  //     router.push('/');
  //   }
  // }, [isLoggedIn, authChecked, pathname, router]);

  // if (!authChecked) return null;

  return (
    <>
      <SignUp />
      <Header />
      {children}
      {/* <Footer /> */}
      <ScrollToTop />
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