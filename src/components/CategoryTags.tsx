import { categories } from '../data/mockData';

interface CategoryTagsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryTags = ({ selectedCategory, onSelectCategory }: CategoryTagsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-cta text-white'
              : 'bg-gray-100 text-secondary hover:bg-gray-200'
          }`}
        >
          {category.name}
          <span className="ml-2 opacity-70">({category.count})</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryTags;