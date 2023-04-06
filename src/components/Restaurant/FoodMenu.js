import React from 'react'
import menu_logo from '../../assets/images/menu_logo.png'

const FoodMenu = () => {
  const menu = [
    { name: 'Poulet yassa avec du riz', price: '9€' },
    { name: 'Boulette de boeuf sauce arachide du riz/couscous', price: '9€' },
    { name: 'Riz au gras au poisson', price: '9€' },
    { name: 'Boulette de boeuf sauce arachide du riz/couscous', price: '9€' },
    { name: 'Kedjienou de Voiaille', price: '11€' },
    { name: 'Kedjienou de dinde au gingembre garni de riz et légumes', price: '11€' },
    { name: 'Ailes de poulet au four', price: '10€' },
    { name: 'Saucisses libanaises	', price: '10€' },
    { name: 'Spaghtti Bolonaise	', price: '7€' },
    { name: 'Boulette de viande sauce tomate	', price: '7€' },
    { name: 'Coquelet au four	', price: '13€' },
    { name: "Boulette de poulet pate D'Archide", price: '9€' },
    { name: 'Télé jazz goie de Volaille	', price: '7,50€' },
    { name: 'Télé jazz poulet	', price: '9€' },
    { name: '', price: '' },
  ]

  return (
    <div className="container">
      <div className="kf-titles align-center">
        <div className="kf-subtitle" data-animate="active">
          Choisissez le meilleur menu
        </div>
        <h3 className="kf-title" data-animate="active">
          Kaffen Popular Foods Menu
        </h3>
      </div>
      <div
        className="kf-menu-items"
        style={{ backgroundImage: `url(${menu_logo})` }}
      >
        <div className="row">
          {menu.map((item) => (
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-menu-item" data-animate="active">
                <div>
                  <h5 className="name">{item.name}</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                  <div className="price">
                    <span>{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodMenu
