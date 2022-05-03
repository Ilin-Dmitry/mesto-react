import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('Jacques-Yves Cousteau');
  const [userDescription , setUserDescription ] = React.useState('ocean researcher');
  const [userAvatar, setUserAvatar] = React.useState('https://pressanews.ru/wp-content/uploads/2015/07/Kem-byl-ZHak-Iv-Kusto-i-chem-on-byl-tak-znamenit.jpg');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile()
    .then(res => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    })
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
    .then(res => {
      setCards(res)
    })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" style={{backgroundImage: `url(${userAvatar})`}} onClick={props.onEditAvatar} ></div>
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button className="profile__info-edit-button" onClick={props.onEditProfile} type="button"></button>
          <p className="profile__info-status">{userDescription}</p>
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
