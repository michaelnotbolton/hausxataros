import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero";
import NavigationCards from "../components/sections/NavigationCards";
import AboutSection from "../components/sections/AboutSection";
import RecentPosts from "../components/sections/RecentPosts";
import Newsletter from "../components/ui/Newsletter";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <NavigationCards />
      <AboutSection />
      <RecentPosts />
      <Newsletter />
    </Layout>
  );
}
