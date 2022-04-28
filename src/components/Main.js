function Main() {
  function handleEditAvatarClick () {
    const popupChangeAvatar = document.querySelector('.popup_sec_avatar');
    popupChangeAvatar.classList.add('popup_opened');
  };
  function handleEditProfileClick () {
    const popupProfile = document.querySelector('.popup_sec_profile');
    popupProfile.classList.add('popup_opened');
  };
  function handleAddPlaceClick () {
    const popupNewCard = document.querySelector('.popup_sec_new');
    popupNewCard.classList.add('popup_opened');
  };

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick}></div>
        <div className="profile__info">
          <h1 className="profile__info-title">Кусто</h1>
          <button className="profile__info-edit-button" onClick={handleEditProfileClick} type="button"></button>
          <p className="profile__info-status">Иследователь</p>
        </div>
        <button className="profile__button" onClick={handleAddPlaceClick} type="button"></button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;
