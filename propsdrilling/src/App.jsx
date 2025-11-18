import React from 'react'
import Card from './assets/components/Card'

const App = () => {
  return (
    <>
    <h1 id='heading'>Props Driling</h1>
    <div className="container">
      <Card user="Tooba Sarwar" followers = {1022} img="https://images.unsplash.com/photo-1762422412014-1447147a455b?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Influencer  | Blogger | Graphic Designer | Learner"/>
      <Card user = "Maheen Khan" followers = {3522} img="https://images.unsplash.com/photo-1762423780942-63e8603ab746?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="  YouTuber | Blogger | Graphic Designer | Learner"/>
      <Card user = "Iman Ali" followers = {1722} img="https://images.unsplash.com/photo-1762422411037-f113fa29e5ea?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Influencer | YouTuber | Blogger | Learner"/>
      <Card user = "Aiman Khan" followers = {1092} img="https://images.unsplash.com/photo-1730451306804-f7d3b0a3c4d5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Influencer | YouTuber |  Graphic Designer | Learner"/>
      <Card user = "Laiba Hamid" followers = {1328} img="https://plus.unsplash.com/premium_photo-1761359334133-29f3e6fe1a0e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Influencer | YouTuber | Blogger | Graphic Designer "/>
      <Card user = "Rija Shah" followers = {9876} img="https://images.unsplash.com/photo-1761438180295-9ea187978263?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" des="Influencer | YouTuber | Blogger | Graphic Designer | Tech"/>
    </div>
    </>
  )
}

export default App