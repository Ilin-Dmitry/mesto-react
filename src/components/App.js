import {useState, useEffect} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import {CardsContext} from '../contexts/CardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  };
  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  };
  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  };
  function handleCardClick (clickedCard) {
    setSelectedCard(clickedCard)
  }

  function handleSetCards (cards) {
    setCards(cards)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  useEffect (() => {
    api.getProfile()
    .then(res => {
      setCurrentUser(res)
    })
    api.getInitialCards()
    .then(res => {
      setCards(res);
    })
  }, [])

  function handleUpdateUser({name, about}) {
    api.editProfile(name, about)
      .then(res => {
        setCurrentUser(res)
      })
      .finally(
        closeAllPopups()
      )
  }

  function handleUpdateAvatar ({avatar}) {
    api.setAvatar(avatar)
      .then((res) => {
        setCurrentUser(res)
      })
      .finally(
        closeAllPopups()
      )

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="page">
          <div className="page__container">

            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onSetCards={handleSetCards} />
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}></EditProfilePopup>

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}></EditAvatarPopup>

            <PopupWithForm name="newPlace" title="Новое место" submitBtnText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
              <input className="popup__input popup__input_set_place" type="text" name="place" defaultValue="" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__error place-error"></span>
              <input className="popup__input popup__input_set_link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" required />
              <span className="popup__error link-error"></span>
            </PopupWithForm>



            <PopupWithForm name="removeConfirm" title="Вы уверены?" />

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

          </div>
        </div>
      </CardsContext.Provider>

    </CurrentUserContext.Provider>
  );
}

export default App;
