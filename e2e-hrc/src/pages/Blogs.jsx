import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import BlogBanner from '../components/blogs/BlogBanner';
import FeaturedArticle from '../components/blogs/FeaturedArticle';
import BlogPostsGrid from '../components/blogs/BlogPostsGrid';
import '../components/blogs/Blogs.css';

export default function Blogs() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar variant="blog" />
      <BlogBanner />
      <FeaturedArticle />
      <BlogPostsGrid />
      <Footer />
    </div>
  );
}
