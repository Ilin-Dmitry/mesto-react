function Card ({card, onCardClick}) {

  function handleClick () {
    onCardClick(card)
  }

  return (
    <article className="element">
      <img className="element__picture" src={card.link} alt={card.name} onClick={handleClick}/>
      <button className="element__remove" type="button"></button>
      <div className="element__wrapper">
        <h2 className="element__name">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__like-number">{card.likes.length}</span>
        </div>
      </div>
    </article>
  )
}

export default Card;