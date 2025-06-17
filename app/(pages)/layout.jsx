'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/context/authContext';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/scrollToTop/ScrollToTop';

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoggedIn, authChecked } = useAuth();

  useEffect(() => {
    if (!authChecked) return;
    if (!isLoggedIn && pathname !== '/login' && pathname !== '/verify-otp') {
      router.push('/login');
    } else if (
      isLoggedIn &&
      (pathname === '/login' || pathname === '/verify-otp')
    ) {
      router.push('/');
    }
  }, [isLoggedIn, authChecked, pathname, router]);

  if (!authChecked) return null;

  return (
    <>
      <Header />
      {children}
      <ScrollToTop />
      {/* <Footer /> */}
    </>
  );
}