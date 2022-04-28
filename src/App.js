import logo from './images/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">

          <header className="header">
            <img className="logo" src={logo} alt="логотип" />
          </header>

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


            <section className="elements">

            </section>
          </main>

          <footer className="footer">
            <p className="footer__copyright">© 2021 Mesto Russia</p>
          </footer>

          <section className="popup popup_sec_profile">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_profile" method="post" name="formNameStatus">
                <h2 className="popup__heading">Редактировать профиль</h2>
                <input className="popup__input popup__input_set_name" type="text" name="name" value="Жак-Ив Кусто" placeholder="Введите имя" minlength="2" maxlength="40" required />
                <span className="popup__error name-error"></span>
                <input  className="popup__input popup__input_set_status" type="text" name="status" value="Исследователь океана" placeholder="Введите статус" minlength="2" maxlength="200" required />
                <span className="popup__error status-error"></span>
                <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button"></button>
            </div>
          </section>

          <section className="popup popup_sec_avatar">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_avatar" method="post" name="formNewAvatar" novalidate>
                <h2 className="popup__heading">Обновить аватар</h2>
                <input  className="popup__input popup__input_set_avatar" type="url" name="avatarLink" value="" placeholder="Ссылка на аватар" required />
                <span className="popup__error avatarLink-error"></span>
                <button className="popup__submit-button popup__submit-button_type_save" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button"></button>
            </div>
          </section>

          <section className="popup popup_sec_new">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_new" method="post" name="formNewItem" novalidate>
                <h2 className="popup__heading">Новое место</h2>
                <input className="popup__input popup__input_set_place" type="text" name="place" value="" placeholder="Название" minlength="2" maxlength="30" required />
                <span className="popup__error place-error"></span>
                <input  className="popup__input popup__input_set_link" type="url" name="link" value="" placeholder="Ссылка на картинку" required />
                <span className="popup__error link-error"></span>
                <button className="popup__submit-button popup__submit-button_type_create" type="submit">Создать</button>
              </form>
              <button className="popup__close-button" type="button"></button>
            </div>
          </section>

          <section className="popup popup_sec_remove-confirm">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_remove-confirm" method="post" name="formRemoveConfirm" novalidate>
                <h2 className="popup__heading">Вы уверены?</h2>
                <button className="popup__submit-button popup__submit-button_sec_remove-confirm" type="submit">Да</button>
              </form>
              <button className="popup__close-button" type="button"></button>
            </div>
          </section>


          <section className="popup popup_sec_img">
            <div className="popup__wrapper">
              <img className="popup__image" src="https://avatars.mds.yandex.net/get-mpic/5232651/img_id110597853878707768.jpeg/orig" alt="Грузия" />
              <p className="popup__image-title"></p>
              <button className="popup__close-button" type="button"></button>
            </div>
          </section>
        </div>

        <template className="element__template">
          <article className="element">
            <img className="element__picture" src="https://avatars.mds.yandex.net/get-mpic/5232651/img_id110597853878707768.jpeg/orig" alt="Грузия" />
            <button className="element__remove" type="button"></button>
            <div className="element__wrapper">
              <h2 className="element__name"></h2>
              <div className="element__like-container">
                <button className="element__like" type="button"></button>
                <span className="element__like-number"></span>
              </div>

            </div>
        </article>
        </template>
      </div>
    </div>
  );
}

export default App;
