import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { newsItems, categories } from "@/data/newsData";
import { NewsSidebar } from "./NewsSidebar";
import { NewsPagination } from "./NewsPagination";

const ITEMS_PER_PAGE = 6;

export const News = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter news by category
  const filteredNews = useMemo(() => {
    if (selectedCategory === "Todas") {
      return newsItems;
    }
    return newsItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Count news per category
  const newsCount = useMemo(() => {
    const counts: { [key: string]: number } = { "Todas": newsItems.length };
    newsItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleNewsClick = (slug: string) => {
    navigate(`/noticias/${slug}`);
  };

  return (
    <section id="noticias" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Notícias e Artigos</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fique por dentro das novidades em medicina aeronáutica e perícias
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* News Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {paginatedNews.map((item) => (
                <div 
                  key={item.slug}
                  className="cursor-pointer group"
                  onClick={() => handleNewsClick(item.slug)}
                >
                  <div className="bg-card rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <NewsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Sidebar */}
          <NewsSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            newsCount={newsCount}
          />
        </div>
      </div>
    </section>
  );
};
