import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1' title='Winter 2023' fetchURL={"https://api.jikan.moe/v4/seasons/2023/Winter"} />
        <Row rowID='2' title='Upcoming' fetchURL={"https://api.jikan.moe/v4/seasons/2022/Spring"} />
        <Row rowID='3' title='Recents' fetchURL={"https://api.jikan.moe/v4/seasons/2022/Winter"} />
        <Row rowID='4' title='Random' fetchURL={"https://api.jikan.moe/v4/seasons/2019/Winter"} />
        
    </>
  )
}

export default Home