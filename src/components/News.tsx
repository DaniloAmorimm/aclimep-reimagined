import newsItems from "@/data/news.json";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


export const News = () => {
  const [selectedNews, setSelectedNews] = useState<typeof newsItems[0] | null>(null);

  return (
    <>
      <section id="noticias" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Notícias e Artigos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fique por dentro das novidades em medicina aeronáutica e perícias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedNews(item)}
              >
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <Badge className="w-fit mb-2 bg-primary/10 text-primary hover:bg-primary/20">
              {selectedNews?.category}
            </Badge>
            <DialogTitle className="text-2xl">{selectedNews?.title}</DialogTitle>
            <DialogDescription className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{selectedNews?.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{selectedNews?.readTime}</span>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 text-foreground whitespace-pre-line">
            {selectedNews?.content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
