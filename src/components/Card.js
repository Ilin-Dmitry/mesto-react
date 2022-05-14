import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Card ({card, onCardClick, onCardLike}) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`${isOwn && 'element__remove'}`);
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`element__like ${isLiked && 'element__like_active'}`)

  function handleClick () {
    onCardClick(card)
  }

  function handleCardClick () {
    onCardLike(card)
  }

  return (
    <article className="element">
      <img className="element__picture" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className={cardDeleteButtonClassName} type="button"></button>
      <div className="element__wrapper">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} onClick={handleCardClick} type="button"></button>
          <span className="element__like-number">{card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;