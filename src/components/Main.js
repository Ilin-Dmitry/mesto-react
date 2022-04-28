function Main() {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar"></div>
        <div className="profile__info">
          <h1 className="profile__info-title">Кусто</h1>
          <button className="profile__info-edit-button" type="button"></button>
          <p className="profile__info-status">Иследователь</p>
        </div>
        <button className="profile__button" type="button"></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
