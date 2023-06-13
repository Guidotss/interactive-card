'use client'
import { CardProvider } from '@/context';
import { FC } from 'react';

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers:FC<ProvidersProps> = ({ children }) => {
  return (
    <CardProvider>
        { children }
    </CardProvider>
  )
}