import type { Metadata } from 'next';
import Home from '@/content/home';
import pageData from '@/lib/page-data.json';

export const metadata: Metadata = { title: pageData.home.title, description: pageData.home.description, alternates: { canonical: '/' }, openGraph: { title: pageData.home.title, description: pageData.home.description, url: '/' }, twitter: { card: 'summary', title: pageData.home.title, description: pageData.home.description } };
export default Home;
