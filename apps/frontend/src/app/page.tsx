"use client"
import { useAppSelector } from '@/lib/hooks'
import DashboardPage from './Components/Dashboard';

export default function Home() {
  const theme = useAppSelector((state: { theme: { themeState: any; }; }) => state.theme.themeState);
  console.log(!theme)
  return (
    <div
      className={`${
        !theme ? 'bg-white' : 'bg-gray-100'
      } text-center md:text-2xl mb-8 text-lg`}
    >
      <DashboardPage />
    </div>
  );
}
