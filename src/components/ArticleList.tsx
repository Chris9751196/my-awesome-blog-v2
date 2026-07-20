import { useState } from 'react';
import { articles, categories } from '../data/mockData';
import CategoryTags from './CategoryTags';
import ArticleCard from './ArticleCard';

const ArticleList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredArticles = articles.filter((article) => {
    if (selectedCategory === 'all') return true;
    const category = categories.find(c => c.id === selectedCategory);
    return category?.name === article.category;
  });

  return (
    <section id="articles" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            最新文章
          </h2>
          <p className="text-secondary max-w-lg mx-auto">
            在这里，我分享我的学习心得、生活感悟和旅行故事。希望能给你带来一些启发。
          </p>
        </div>

        <CategoryTags
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">暂无相关文章</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticleList;