function Card ({card}) {
  return (
    <article className="element">
      <img className="element__picture" src={card.link} alt={card.name} />
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

// function Card ({card}) {
//   console.log('link =>', card);
//   return (
//     <article className="element">
//         <img className="element__picture" src={card.link} alt={card.name} />
//         <button className="element__remove" type="button"></button>
//         <div className="element__wrapper">
//           <h2 className="element__name">Uhh</h2>
//           <div className="element__like-container">
//             <button className="element__like" type="button"></button>
//             <span className="element__like-number">{card.likes}</span>
//           </div>
//         </div>
//     </article>
//   )
// }