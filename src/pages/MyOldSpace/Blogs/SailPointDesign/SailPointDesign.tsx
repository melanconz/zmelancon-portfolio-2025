import { useTheme } from '../../context/ThemeContext';

const SailPointDesign = () => {
  const { theme } = useTheme();

  return (
    <div className={`blog-post ${theme}`}>
      <h2>SailPoint Design System</h2>
      <p>
        At <strong>SailPoint</strong>, I worked alongside engineers and
        designers to create a centralized design system used across multiple
        internal applications. Our goal was to deliver consistency in user
        experience and visual language.
      </p>
      <p>
        We standardized key UI elements like buttons, inputs, modals, grids, and
        alerts, ensuring that all apps reflected the same aesthetic and
        interaction patterns. This dramatically improved our development
        velocity and reduced rework.
      </p>
      <p>
        By adopting shared design tokens, accessibility best practices, and
        thorough documentation, the design system empowered teams across the
        company to ship features faster while maintaining a cohesive product
        experience.
      </p>
    </div>
  );
};

export default SailPointDesign;
