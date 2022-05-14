import {useContext} from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';
import api from '../utils/Api';

function Main(props) {

  const currentUser = useContext(CurrentUserContext);
  const {name, about, avatar} = currentUser;
  const cards = useContext(CardsContext);

  console.log('props of main', props)

  function handleCardLike (card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log('card =>', card)
    api.addLike(card._id)
      .then((newCard) => {
        props.onSetCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      });
  }


  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" style={{backgroundImage: `url(${avatar})`}} onClick={props.onEditAvatar} ></div>
        <div className="profile__info">
          <h1 className="profile__info-title">{name}</h1>
          <button className="profile__info-edit-button" onClick={props.onEditProfile} type="button"></button>
          <p className="profile__info-status">{about}</p>
        </div>
        <button className="profile__button" onClick={props.onAddPlace} type="button"></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike}/>
          )
        })}
      </section>
    </main>
  );
}

export default Main;
