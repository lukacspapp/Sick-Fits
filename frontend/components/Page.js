import Proptypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: Proptypes.string,
  children: Proptypes.any,
};
