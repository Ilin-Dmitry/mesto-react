import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';




function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true)
  };
  // function handleEditProfileClick () {
  //   console.log('hi');
  //   const popupProfile = document.querySelector('.popup_sec_profile');
  //   popupProfile.classList.add('popup_opened');
  // };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <div className="page__container">

          <Header />
          <Main onEditProfile={handleEditProfileClick}/>
          <Footer />
          <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>{<h2 className="popup__heading">hello-mello</h2>}</PopupWithForm>

          {/* <section className="popup popup_sec_profile">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_profile" method="post" name="formNameStatus">
                <h2 className="popup__heading">Редактировать профиль</h2>
                <input className="popup__input popup__input_set_name" type="text" name="name" defaultValue="Жак-Ив Кусто" placeholder="Введите имя" minLength="2" maxLength="40" required />
                <span className="popup__error name-error"></span>
                <input  className="popup__input popup__input_set_status" type="text" name="status" defaultValue="Исследователь океана" placeholder="Введите статус" minLength="2" maxLength="200" required />
                <span className="popup__error status-error"></span>
                <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button"></button>
            </div>
          </section> */}

          <section className="popup popup_sec_avatar">
            <div className="popup__container">
              <form className="popup__form popup__form_sec_avatar" method="post" name="formNewAvatar" noValidate>
                <h2 className="popup__heading">Обновить аватар</h2>
                <input  className="popup__input popup__input_set_avatar" type="url" name="avatarLink" defaultValue="" placeholder="Ссылка на аватар" required />
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
                <input className="popup__input popup__input_set_place" type="text" name="place" defaultValue="" placeholder="Название" minLength="2" maxLength="30" required />
                <span className="popup__error place-error"></span>
                <input  className="popup__input popup__input_set_link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" required />
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
