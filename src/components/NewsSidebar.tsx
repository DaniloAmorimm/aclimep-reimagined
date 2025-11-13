import { Card } from "@/components/ui/card";

interface NewsSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  newsCount: { [key: string]: number };
}

export const NewsSidebar = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  newsCount 
}: NewsSidebarProps) => {
  return (
    <aside className="w-full lg:w-64 space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4 text-foreground">Categorias</h3>
        <nav className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{category}</span>
                <span className="text-xs">
                  ({newsCount[category] || 0})
                </span>
              </div>
            </button>
          ))}
        </nav>
      </Card>
    </aside>
  );
};
