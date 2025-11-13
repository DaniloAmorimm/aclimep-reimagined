import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/data/newsData";

const NewsArticle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const article = newsItems.find(item => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-16 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
            <Button onClick={() => navigate("/noticias")}>Voltar para Notícias</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 flex-grow">
        <article className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button
              variant="ghost"
              className="mb-6"
              onClick={() => navigate("/noticias")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Notícias
            </Button>

            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              {article.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6 font-medium">
                {article.excerpt}
              </p>
              <div className="text-foreground whitespace-pre-line leading-relaxed">
                {article.content}
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default NewsArticle;
