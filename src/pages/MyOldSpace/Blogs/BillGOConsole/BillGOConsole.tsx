import { useTheme } from '../../context/ThemeContext';

const BillGOConsole = () => {
  const { theme } = useTheme();

  return (
    <div className={`blog-post ${theme}`}>
      <h2>BillGO Console</h2>
      <p>
        The <strong>BillGO Console</strong> was born out of a company-wide shift
        in priorities that significantly downsized our team. To reduce the need
        for manual employee interaction with clients, I partnered with a
        teammate to design and build a powerful self-service console.
      </p>
      <p>
        The console enables clients to search payment data, explore and test our
        API, manage user roles and permissions, and create or update support
        tickets—all in one place.
      </p>
      <p>
        We built the app using <strong>React</strong>,{' '}
        <strong>Material UI</strong>, and <strong>Java</strong>, with full test
        coverage via <strong>Jest</strong>. The final product has{' '}
        <strong>zero dependency vulnerabilities</strong> and has become a
        critical touchpoint for client support and troubleshooting.
      </p>
    </div>
  );
};

export default BillGOConsole;
