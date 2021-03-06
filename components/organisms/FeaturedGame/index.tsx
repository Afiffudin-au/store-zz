import React, { useCallback, useEffect, useState } from 'react'
import GameItem from '../../molecules/GameItem'
import { getFeaturedGame } from '../../../api-services/player'
import { GameItemTypes } from '../../../api-services/data-types'
function FeaturedGame() {
  const [gameList, setGameList] = useState([])
  const getFeatureGameList = useCallback(async () => {
    const res = await getFeaturedGame()
    setGameList(res.data)
  }, [])
  useEffect(() => {
    getFeatureGameList()
  }, [])
  return (
    <section className='featured-game pt-50 pb-50'>
      <div className='container-fluid'>
        <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className='d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4'
          data-aos='fade-up'>
          {/* {gameList?.map((item: GameItemTypes, index: number) => (
            <GameItem
              key={item._id}
              id={item._id}
              title={item.name}
              category={item.category.name}
              thumbnail={item.thumbnail}
            />
          ))} */}
        </div>
        <div className='row justify-content-center'>
          {gameList?.map((item: GameItemTypes, index: number) => (
            <GameItem
              key={item._id}
              id={item._id}
              title={item.name}
              category={item.category.name}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedGame
