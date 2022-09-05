import style from './notFound.module.css';

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <h2>404</h2>
      <p>Page is not found</p>
    </div>
  );
};

export default NotFound;
