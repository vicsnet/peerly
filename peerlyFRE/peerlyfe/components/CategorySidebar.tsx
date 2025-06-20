import { Card, CardContent } from "./ui/card";

interface CategorySidebarProps {
  categories: string[];
  selectedCategory?: string | null;
  onCategorySelect?: (category: string | null) => void;
}

export function CategorySidebar({ 
  categories, 
  selectedCategory, 
  onCategorySelect 
}: CategorySidebarProps) {
  return (
    <Card className="bg-white h-full rounded-xl border-slate-50 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] w-full max-w-[322px]">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          {/* All Categories option */}
          <button
            key="all"
            onClick={() => onCategorySelect && onCategorySelect(null)}
            className={`text-left text-[20px] leading-[28px] ${
              selectedCategory === null ? 'font-semibold' : 'font-normal'
            }`}
          >
            All Categories
          </button>
          
          {/* Individual categories */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect && onCategorySelect(category)}
              className={`text-left text-[20px] leading-[28px] ${
                selectedCategory === category ? 'font-semibold' : 'font-normal'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}