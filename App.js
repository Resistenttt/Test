import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      {/* Основной контент */}
      <div className="content">
        {/* Шапка */}
        <div className="header">
          <span className="header-text">Настройки</span>
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/l191uh5k_expires_30_days.png"
            className="avatar"
            alt="Аватар"
          />
          <span className="username">Resistent</span>
        </div>

        {/* Блок настроек */}
        <div className="settings-block">
          <div className="settings-item">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/nf6ommyf_expires_30_days.png"
              className="icon"
              alt="Трейд"
            />
            <span>Ссылка на трейд обмен</span>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/sly7s145_expires_30_days.png"
              className="arrow"
              alt="Стрелка"
            />
          </div>

          <div className="settings-item">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/secr5svg_expires_30_days.png"
              className="icon"
              alt="Язык"
            />
            <span>Язык</span>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/6q19fe5n_expires_30_days.png"
              className="arrow"
              alt="Стрелка"
            />
          </div>

          <div className="settings-item">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/xrjs67gv_expires_30_days.png"
              className="icon"
              alt="Сообщество"
            />
            <span>Сообщество</span>
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/so0lwhew_expires_30_days.png"
              className="arrow"
              alt="Стрелка"
            />
          </div>
        </div>

        {/* Секция с предметами */}
        <div className="items-container">
          <h3 className="section-title">Последние скины</h3>
          <div className="items-grid">
            <div className="item-card">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/avzal9yx_expires_30_days.png"
                className="item-image"
                alt="Нож градиент"
              />
              <div className="item-info">
                <span className="item-name">Нож градиент</span>
                <span className="item-price">$5.99</span>
              </div>
            </div>

            <div className="item-card">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/olvzgtw4_expires_30_days.png"
                className="item-image"
                alt="М4A4"
              />
              <div className="item-info">
                <span className="item-name">М-4 Заебатый</span>
                <span className="item-price">$5.99</span>
              </div>
            </div>
          </div>
        </div>

        {/* Секция "Выведены в Steam" */}
        <div className="items-container">
          <h3 className="section-title">Выведены в Steam</h3>
          <div className="items-grid">
            <div className="item-card">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/4q77fhvk_expires_30_days.png"
                className="item-image"
                alt="Нож градиент"
              />
              <div className="item-info">
                <span className="item-name">Нож градиент</span>
                <span className="item-price">$5.99</span>
              </div>
            </div>
          </div>
        </div>

        {/* Секция "Продано" */}
        <div className="items-container">
          <h3 className="section-title">Продано</h3>
          <div className="items-grid">
            <div className="item-card">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/tknbjedv_expires_30_days.png"
                className="item-image"
                alt="Продано"
              />
              <div className="item-info">
                <span className="item-price">$5.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижнее меню (точные параметры из Figma) */}
      <div className="bottom-nav">
        <button className="nav-btn active">Меню</button>
        <button className="nav-btn">Кейсы</button>
        <button className="nav-btn">Рефералы</button>
        <button className="nav-btn">Настройки</button>
      </div>
    </div>
  );
};

export default App;