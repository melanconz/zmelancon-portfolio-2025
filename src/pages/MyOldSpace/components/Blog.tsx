import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Blog = () => {
  const { theme } = useTheme();

  return (
    <div className={`blog-post ${theme}`}>
      <h2>📝 Blog Posts</h2>
      <ul>
        <li>
          <Link to="/blog/billgo-console">
            BillGO Console UI: Simplifying Client Troubleshooting
          </Link>
        </li>
        <li>
          <Link to="/blog/sailpoint-design">
            SailPoint Design System: Building for Scale
          </Link>
        </li>
        <li>
          <Link to="/blog/billgo-experience">
            BillGO Experience: Building a Unified Client Platform
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
