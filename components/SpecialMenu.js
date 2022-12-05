import Image from 'next/image';
import React from 'react'
import SubHeading from './SubHeading'
import menu from '../public/menu.png'
import MenuItem from './MenuItem';

function SpecialMenu() {
    const wines = [
        {
          title: 'Chapel Hill Shiraz',
          price: '$56',
          tags: 'AU | Bottle',
        },
        {
          title: 'Catena Malbee',
          price: '$59',
          tags: 'AU | Bottle',
        },
        {
          title: 'La Vieillw Rose',
          price: '$44',
          tags: 'FR | 750 ml',
        },
        {
          title: 'Rhino Pale Ale',
          price: '$31',
          tags: 'CA | 750 ml',
        },
        {
          title: 'Irish Guinness',
          price: '$26',
          tags: 'IE | 750 ml',
        },
      ];
    const cocktails = [
        {
          title: 'Aperol Sprtiz',
          price: '$20',
          tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
        },
        {
          title: "Dark 'N' Stormy",
          price: '$16',
          tags: 'Dark rum | Ginger beer | Slice of lime',
        },
        {
          title: 'Daiquiri',
          price: '$10',
          tags: 'Rum | Citrus juice | Sugar',
        },
        {
          title: 'Old Fashioned',
          price: '$31',
          tags: 'Bourbon | Brown sugar | Angostura Bitters',
        },
        {
          title: 'Negroni',
          price: '$26',
          tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
        },
    ];
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
        <div className='app__specialMenu-title'>
            <SubHeading title="Menu That Fits You Palatte"/>
            <h1 className='headtext__cormorant'>Today's Special</h1>
        </div>

        <div className='app__specialMenu-menu'>
            <div className='app__specialMenu-menu-wine flex__center'>
                <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
                <div className='app__specialMenu-menu_items'>
                    {wines.map((wine, index)=> (
                        <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
                    ))}
                </div>
            </div>
            <div className='app__specialMenu-menu_img'>
                <Image src={menu} alt="menu img"/>
            </div>
            <div className='app__specialMenu-menu-cocktails flex__center'>
                <p className='app__specialMenu-menu_heading'>Cocktails</p>
                <div className='app__specialMenu-menu_items'>
                    {cocktails.map((cocktail, index)=> (
                        <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                    ))}
                </div>
            </div>
        </div>

        <div style={{marginTop: '15px'}}>
            <button type='button' className='custom__button'>View More</button>
        </div>
    </div>
  )
}

export default SpecialMenu