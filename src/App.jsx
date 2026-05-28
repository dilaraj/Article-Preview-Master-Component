import './App.css'
import { useState } from 'react'

import articleImg from './assets/images/drawers.jpg'

import AuthorInfo from './AuthorInfoComponent/AuthorInfo'
import ShareOption from './ShareOptionComponent/ShareOption'

export default function App() {
  const [isOpened, setIsOpened] = useState(true)

  const toggle = () => {
    setIsOpened(!isOpened)
  }

  return (
    <div className="article-preview-master-container">
      <div className="article-img-container">
        <img src={articleImg} alt="Article Img" className="article-img" />
      </div>
      <div className="article-info-main-container">
        <div className="article-info-container">
          <div className="article-header">
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
          </div>
          <div className="article-preview-content">
            Ever been in a room and felt like something was missing? Perhaps it felt slighlty bare and uninviting. I've got some simple tips to help you make any room feel complete.
          </div>
        </div>
        {isOpened ? 
          (<AuthorInfo toggle={toggle}/>)
          :
          (<ShareOption toggle={toggle}/>)
        }
      </div>
      
      
    </div>
  )
}