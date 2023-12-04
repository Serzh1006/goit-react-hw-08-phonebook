import css from './titleHome.module.css';

const HomePage = () => {
  return (
    <section className={css.titleSection}>
      <div className={css.titleContainer}>
        <h1 className={css.title}>PhoneBook</h1>
      </div>
    </section>
  );
};

export default HomePage;
