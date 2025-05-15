import React, { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.expand();
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
		<div className="single-item-card">
          <img src="knife.svg" className="item-image" alt="Нож градиент" />
          <div className="item-info">
            <span className="item-name">Нож градиент</span>
            <span className="item-price">$5.99</span>
          </div>
        </div>
      </div>

      {/* Продано */}
      <div className="section">
        <h3 className="section-title">Продано</h3>
        <div className="single-item-card">
          <img src="knife.svg" className="item-image" alt="Продано" />
          <span className="item-price">$5.99</span>
        </div>
      </div>

      {/* Нижнее меню */}
      <div className="bottom-nav">
        <button className="nav-btn active"><svg width="66" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.3408 9.80159L35.652 4.11209C34.9479 3.41008 33.9943 3.01587 33 3.01587C32.0058 3.01587 31.0521 3.41008 30.348 4.11209L24.6593 9.80159C24.4496 10.0099 24.2833 10.2578 24.1702 10.5309C24.057 10.8039 23.9992 11.0968 24 11.3923V18.7551C24 19.3518 24.2371 19.9241 24.659 20.3461C25.081 20.768 25.6533 21.0051 26.25 21.0051H39.75C40.3467 21.0051 40.919 20.768 41.341 20.3461C41.763 19.9241 42 19.3518 42 18.7551V11.3923C42.0009 11.0968 41.943 10.8039 41.8298 10.5309C41.7167 10.2578 41.5504 10.0099 41.3408 9.80159ZM35.25 19.5051H30.75V16.5546C30.75 15.9579 30.9871 15.3856 31.409 14.9636C31.831 14.5416 32.4033 14.3046 33 14.3046C33.5967 14.3046 34.169 14.5416 34.591 14.9636C35.013 15.3856 35.25 15.9579 35.25 16.5546V19.5051ZM40.5 18.7551C40.5 18.954 40.421 19.1448 40.2803 19.2854C40.1397 19.4261 39.9489 19.5051 39.75 19.5051H36.75V16.5546C36.75 15.56 36.3549 14.6062 35.6517 13.9029C34.9484 13.1997 33.9946 12.8046 33 12.8046C32.0054 12.8046 31.0516 13.1997 30.3484 13.9029C29.6451 14.6062 29.25 15.56 29.25 16.5546V19.5051H26.25C26.0511 19.5051 25.8603 19.4261 25.7197 19.2854C25.579 19.1448 25.5 18.954 25.5 18.7551V11.3923C25.5007 11.1936 25.5797 11.0031 25.7198 10.8621L31.4085 5.17484C31.8313 4.75404 32.4035 4.5178 33 4.5178C33.5965 4.5178 34.1687 4.75404 34.5915 5.17484L40.2803 10.8643C40.4198 11.0048 40.4987 11.1944 40.5 11.3923V18.7551Z" fill="#A2A2B5"/>
</svg>

</button>
        <button className="nav-btn"><svg width="74" height="24" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31 6.16667V17.1667C31 17.5704 31.2427 17.9345 31.6154 18.0897L41 22M31 6.16667L40.2308 2.32051C40.7231 2.11538 41.2769 2.11538 41.7692 2.32051L46 4.08333L51 6.16667M31 6.16667L36 8.25L41 10.3333M41 10.3333V22M41 10.3333L51 6.16667M41 22L50.3846 18.0897C50.7573 17.9345 51 17.5704 51 17.1667V6.16667" stroke="#A2A2B5" stroke-width="1.5" stroke-linejoin="round"/>
<path opacity="0.3" d="M36 8.25016L46 4.0835" stroke="#A2A2B5" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
</button>
        <button className="nav-btn"><svg width="66" height="24" viewBox="0 0 66 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M31 4C28.9289 4 27.25 5.67893 27.25 7.75C27.25 9.82107 28.9289 11.5 31 11.5C33.0711 11.5 34.75 9.82107 34.75 7.75C34.75 5.67893 33.0711 4 31 4ZM28.75 7.75C28.75 6.50736 29.7574 5.5 31 5.5C32.2426 5.5 33.25 6.50736 33.25 7.75C33.25 8.99264 32.2426 10 31 10C29.7574 10 28.75 8.99264 28.75 7.75Z" fill="#A2A2B5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 13C25.9289 13 24.25 14.6789 24.25 16.75C24.25 18.8211 25.9289 20.5 28 20.5H34C36.0711 20.5 37.75 18.8211 37.75 16.75C37.75 14.6789 36.0711 13 34 13H28ZM25.75 16.75C25.75 15.5074 26.7574 14.5 28 14.5H34C35.2426 14.5 36.25 15.5074 36.25 16.75C36.25 17.9926 35.2426 19 34 19H28C26.7574 19 25.75 17.9926 25.75 16.75Z" fill="#A2A2B5"/>
<path d="M26.7521 10.3887C26.5944 10.1353 26.2985 10 26 10C24.7574 10 23.75 8.99264 23.75 7.75C23.75 6.50736 24.7574 5.5 26 5.5C26.2985 5.5 26.5944 5.36473 26.7521 5.11135C26.7591 5.10014 26.7661 5.08896 26.7732 5.07782C27.0358 4.66331 26.9027 4.0764 26.415 4.0227C26.2787 4.0077 26.1403 4 26 4C23.9289 4 22.25 5.67893 22.25 7.75C22.25 9.82107 23.9289 11.5 26 11.5C26.1403 11.5 26.2787 11.4923 26.415 11.4773C26.9027 11.4236 27.0358 10.8367 26.7732 10.4222C26.7661 10.411 26.7591 10.3999 26.7521 10.3887Z" fill="#A2A2B5"/>
<path d="M23.7083 18.3169C23.5948 18.1275 23.3944 18 23.1736 18H23C21.7574 18 20.75 16.9926 20.75 15.75C20.75 14.5074 21.7574 13.5 23 13.5H23.1736C23.3944 13.5 23.5948 13.3725 23.7083 13.1831C23.9854 12.7208 23.6847 12 23.1457 12H23C20.9289 12 19.25 13.6789 19.25 15.75C19.25 17.8211 20.9289 19.5 23 19.5H23.1457C23.6847 19.5 23.9854 18.7792 23.7083 18.3169Z" fill="#A2A2B5"/>
<path d="M35.2268 10.4222C34.9642 10.8367 35.0973 11.4236 35.585 11.4773C35.7213 11.4923 35.8597 11.5 36 11.5C38.0711 11.5 39.75 9.82107 39.75 7.75C39.75 5.67893 38.0711 4 36 4C35.8597 4 35.7213 4.0077 35.585 4.0227C35.0973 4.0764 34.9642 4.66331 35.2268 5.07782C35.2339 5.08896 35.2409 5.10014 35.2479 5.11134C35.4056 5.36472 35.7015 5.5 36 5.5C37.2426 5.5 38.25 6.50736 38.25 7.75C38.25 8.99264 37.2426 10 36 10C35.7015 10 35.4056 10.1353 35.2479 10.3887C35.2409 10.3999 35.2339 10.411 35.2268 10.4222Z" fill="#A2A2B5"/>
<path d="M38.2917 18.3169C38.0146 18.7792 38.3153 19.5 38.8543 19.5H39C41.0711 19.5 42.75 17.8211 42.75 15.75C42.75 13.6789 41.0711 12 39 12H38.8543C38.3153 12 38.0146 12.7208 38.2917 13.1831C38.4052 13.3725 38.6056 13.5 38.8264 13.5H39C40.2426 13.5 41.25 14.5074 41.25 15.75C41.25 16.9926 40.2426 18 39 18H38.8264C38.6056 18 38.4052 18.1275 38.2917 18.3169Z" fill="#A2A2B5"/>
</svg>
</button>
        <button className="nav-btn"><svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4" cy="4" r="4" transform="matrix(-1 0 0 1 12 1)" fill="white" stroke="white" stroke-width="1.5"/>
<path d="M1 14.9347C1 14.0743 1.54085 13.3068 2.35109 13.0175V13.0175C6.00404 11.7128 9.99596 11.7128 13.6489 13.0175V13.0175C14.4591 13.3068 15 14.0743 15 14.9347V16.2502C15 17.4376 13.9483 18.3498 12.7728 18.1818L11.8184 18.0455C9.28565 17.6837 6.71435 17.6837 4.18162 18.0455L3.22721 18.1818C2.0517 18.3498 1 17.4376 1 16.2502V14.9347Z" fill="white" stroke="white" stroke-width="1.5"/>
</svg>
</button>
      </div>
    </div>
  );
}

export default App;
