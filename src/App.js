import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    // Развернуть WebApp на весь экран и инициализировать
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Развернуть на весь экран
      tg.enableClosingConfirmation(); // Подтверждение при закрытии
      tg.BackButton.show(); // Показать кнопку "Назад" (если нужно)
    }
  }, []);

  return (
    <div className="app-container">
      {/* Шапка */}
      <div className="header">
        <span className="settings-text">Настройки</span>
        <img 
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/QvXoZLybfH/l191uh5k_expires_30_days.png" 
          className="avatar" 
          alt="Аватар"
        />
        <span className="username">Resistent</span>
      </div>

      {/* Основное меню */}
      <div className="main-menu">
        <div className="menu-item">
          <img src="Shape.svg" className="menu-icon" alt="Трейд" />
          <span className="menu-text menu-underline">Ссылка на трейд обмен</span>
          <img src="arrow.svg" className="arrow-icon" alt=">" />
        </div>
        <div className="menu-item">
          <img src="Vec.svg" className="menu-icon" alt="Язык" />
          <span className="menu-text menu-underlinee">Язык</span>
          <img src="arrow.svg" className="arrow-icon" alt=">" />
        </div>
        <div className="menu-item">
          <img src="Soob.svg" className="menu-icon" alt="Сообщество" />
          <span className="menu-text menu-underlineee">Сообщество</span>
          <img src="arrow.svg" className="arrow-icon" alt=">" />
        </div>
      </div>

      {/* Последние скины */}
      <div className="section">
        <h3 className="section-title">Последние скины</h3>
        <div className="items-grid">
          <div className="item-card">
            <img src="knife.svg" className="item-image" alt="Нож градиент" />
            <div className="item-info">
              <span className="item-name">Нож градиент</span>
              <span className="item-price">$5.99</span>
            </div>
          </div>
          <div className="item-card">
            <img src="M4.svg" className="item-image" alt="М4A4" />
            <div className="item-info">
              <span className="item-name">М-4 Заебатый</span>
              <span className="item-price">$5.99</span>
            </div>
          </div>
        </div>
      </div>

      {/* Выведены в Steam */}
      <div className="section">
        <h3 className="section-title">Выведены в Steam</h3>
        <div className="single-item-container">
          <div className="single-item-card">
            <img src="knife.svg" className="item-image" alt="Нож градиент" />
            <div className="item-info">
              <span className="item-name">Нож градиент</span>
              <span className="item-price">$5.99</span>
            </div>
          </div>
        </div>
      </div>

      {/* Продано */}
      <div className="section">
        <h3 className="section-title">Продано</h3>
        <div className="single-item-container">
          <div className="single-item-card">
            <img src="knife.svg" className="item-image" alt="Продано" />
            <span className="item-price">$5.99</span>
          </div>
        </div>
      </div>

      {/* Нижнее меню */}
      <div className="bottom-nav">
        <button className="nav-btn active">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M12 22V12" stroke="white" strokeWidth="2"/>
            <path d="M7 7L17 12" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        <button className="nav-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11L12 2L21 11V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V11Z" stroke="#A2A2B5" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="nav-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="#A2A2B5" strokeWidth="2"/>
            <path d="M12 16V12H8" stroke="#A2A2B5" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="nav-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.3431 18.6569 16 17 16H7C5.34315 16 4 17.3431 4 19V21" stroke="#A2A2B5" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="7" r="4" stroke="#A2A2B5" strokeWidth="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
