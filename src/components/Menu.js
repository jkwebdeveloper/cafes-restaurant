import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import menu_logo from '../assets/images/menu_logo.png'
import Plats from './Plats'
import Desserts from './Desserts'
import MenuData from './MenuData'
// import MenuData from './MenuData'

const Menu = () => {
  //   const [plats, setPlats] = useState(false)
  //   const [desserts, setDesserts] = useState(false)

  const [items, setItems] = useState(MenuData)

  const filterItem = (cateItem) => {
    const updateItems = MenuData.filter((curElem) => {
        return curElem.category === cateItem
    })

    setItems(updateItems)
  }

  return (
    <section className="section kf-menu kf-menu-tabs">
      <div className="container">
        <div className="kf-titles align-center">
          <div className="kf-subtitle" data-animate="active">
            Choisissez le meilleur menu
          </div>
          <h3 className="kf-title" data-animate="active">
            Choisissez le meilleur menu
          </h3>
        </div>
        <div className="kf-filter kf-filter-menu" data-animate="active">
          <a to="#" data-href=".all" className="active">
            Toute
          </a>
          <a to="#" data-href=".all">
            Entrées
          </a>
          <a to="#" data-href=".hot-coffee" onClick={() => filterItem('Plats')}>
            Plats
          </a>
          <a
            to="#"
            data-href=".hot-coffee"
            // onClick={() => {
            //   setDesserts(true)
            // }}
          >
            Boissons
          </a>
          <a to="#" data-href=".dessert">
            Desserts
          </a>
          <a to="#" data-href=".dessert">
            Salades
          </a>
        </div>
        {/* {plats == true || desserts == true ? null : ( */}
        <div
          className="kf-menu-items"
          style={{ backgroundImage: `url(${menu_logo})` }}
        >
          <div className="row">
            {items.map((elem) => {
              const { id, name, image, description, price } = elem

              return (
                <div key={id} className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
                  <div className="kf-menu-item" data-animate="active">
                    <div className="image kf-image-hover">
                      <Link to="#" className="has-popup-image">
                        <img src={image} alt={name} />
                      </Link>
                    </div>
                    <div className="desc">
                      <h5 className="name">{name}</h5>
                      <div className="subname">{description}</div>
                      <div className="price">{price}</div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
              <div className="kf-menu-item" data-animate="active">
                <div className="image kf-image-hover">
                  <Link to="#" className="has-popup-image">
                    <img src={require('../assets/images/menu2.jpg')} alt="" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Espresso</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$4.9</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
              <div className="kf-menu-item" data-animate="active">
                <div className="image kf-image-hover">
                  <Link to="#" className="has-popup-image">
                    <img src={require('../assets/images/menu3.jpg')} alt="" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Barista Pouring Syrup</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$3.5</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-coffee">
              <div className="kf-menu-item" data-animate="active">
                <div className="image kf-image-hover">
                  <Link to="#" className="has-popup-image">
                    <img src={require('../assets/images/menu4.jpg')} alt="" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Late</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$6.0</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
              <div className="kf-menu-item" data-animate="active">
                <div className="image kf-image-hover">
                  <Link to="#" className="has-popup-image">
                    <img src={require('../assets/images/menu5.jpg')} alt="" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Cappuccino Arabica</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$2.8</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all dessert">
              <div className="kf-menu-item" data-animate="active">
                <div className="image kf-image-hover">
                  <Link to="#" className="has-popup-image">
                    <img src={require('../assets/images/menu6.jpg')} alt="" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Milk Cream</h5>
                  <div className="subname">2/3 espresso, 1/3 streamed milk</div>
                  <div className="price">$7.5</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
              <div className="kf-menu-item" data-animate="active">
                <div className="image kf-image-hover">
                  <Link to="#" className="has-popup-image">
                    <img
                      src={require('../assets/images/ins_gal1.jpg')}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Italian Burger</h5>
                  <div className="subname">
                    Tomatoes, italian sausage, ground, onions, cheese
                  </div>
                  <div className="price">$12.8</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all fast-food">
              <div className="kf-menu-item" data-animate="active">
                <div className="image kf-image-hover">
                  <Link to="#" className="has-popup-image">
                    <img
                      src={require('../assets/images/ins_gal3.jpg')}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">Chicken Burger</h5>
                  <div className="subname">
                    Ground chicken breast, mustard, paprika, onion
                  </div>
                  <div className="price">$17.5</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* )} */}

        {/* {plats == true ? <Plats /> : null}
        {desserts == true ? <Desserts /> : null} */}
      </div>
    </section>
  )
}

export default Menu
