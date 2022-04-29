function ImagePopup () {
  return (
    <section className="popup popup_sec_img">
      <div className="popup__wrapper">
        <img className="popup__image"
          src="https://avatars.mds.yandex.net/get-mpic/5232651/img_id110597853878707768.jpeg/orig" alt="Грузия" />
        <p className="popup__image-title"></p>
        <button className="popup__close-button" type="button"></button>
      </div>
    </section>
  )
}

export default ImagePopup;