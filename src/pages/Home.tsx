import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ArticleList from '@/components/ArticleList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ArticleList />
      </main>
      <Footer />
    </div>
  );
}