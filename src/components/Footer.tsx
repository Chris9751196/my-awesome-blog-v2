import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { authorInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            {authorInfo.name}
          </h3>
          <p className="text-secondary mb-6">
            {authorInfo.bio}
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href={authorInfo.socialLinks.github}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-secondary hover:bg-cta hover:text-white hover:border-transparent transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={authorInfo.socialLinks.twitter}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-secondary hover:bg-cta hover:text-white hover:border-transparent transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={authorInfo.socialLinks.linkedin}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-secondary hover:bg-cta hover:text-white hover:border-transparent transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={authorInfo.socialLinks.email}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-secondary hover:bg-cta hover:text-white hover:border-transparent transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.</p>
            <p className="flex items-center mt-2 md:mt-0">
              Made with <Heart size={14} className="mx-1 text-red-400" /> by {authorInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;