import {useState, useEffect, useContext} from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const user = useContext(CurrentUserContext);
  const {name, about, avatar} = user;


  const [cards, setCards] = useState([]);


  useEffect(() => {
    api.getInitialCards()
    .then(res => {
      setCards(res)
    })
  }, [])

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
            <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
          )
        })}
      </section>
    </main>
  );
}

export default Main;
