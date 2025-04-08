import { useTheme } from '../../context/ThemeContext';

const BillGOExperience = () => {
  const { theme } = useTheme();

  return (
    <div className={`blog-post ${theme}`}>
      <h2>BillGO Experience</h2>
      <p>
        With the <strong>BillGO Experience</strong> project, our team focused on
        drastically reducing implementation friction for our billpay tools. We
        created a suite of drop-in widgets that required minimal configuration
        to get started.
      </p>
      <p>
        We achieved this by building a JavaScript SDK layer that relied on
        viewModel objects to eliminate front-end logic. This allowed all data
        and manipulation to happen in the middle layer, abstracting away the
        complexity of our API.
      </p>
      <p>
        As a result, clients could either use our widgets out of the box or
        build their own custom experiences without having to interact directly
        with our intricate API. This significantly shortened implementation time
        and empowered partners to move faster.
      </p>
    </div>
  );
};

export default BillGOExperience;
