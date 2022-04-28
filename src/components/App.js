import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__container">

          <Header />
          <Main />
          <Footer />

          <section className="popup popup_sec_profile">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_profile" method="post" name="formNameStatus">
                <h2 className="popup__heading">Редактировать профиль</h2>
                <input className="popup__input popup__input_set_name" type="text" name="name" value="Жак-Ив Кусто" placeholder="Введите имя" minLength="2" maxLength="40" required />
                <span className="popup__error name-error"></span>
                <input  className="popup__input popup__input_set_status" type="text" name="status" value="Исследователь океана" placeholder="Введите статус" minLength="2" maxLength="200" required />
                <span className="popup__error status-error"></span>
                <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button"></button>
            </div>
          </section>

          <section className="popup popup_sec_avatar">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_avatar" method="post" name="formNewAvatar" noValidate>
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
              <form className="popup__form popup__form_sec_new" method="post" name="formNewItem" noValidate>
                <h2 className="popup__heading">Новое место</h2>
                <input className="popup__input popup__input_set_place" type="text" name="place" value="" placeholder="Название" minLength="2" maxLength="30" required />
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
              <form className="popup__form popup__form_sec_remove-confirm" method="post" name="formRemoveConfirm" noValidate>
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
