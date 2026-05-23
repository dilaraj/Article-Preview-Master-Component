import './AuthorInfo.css'

import authorImg from '../assets/images/avatar-michelle.jpg'
import shareIcon from '../assets/images/icon-share.svg'

export default function AuthorInfo({toggle}) {
    return (
        <div className="article-author-container">
          <div className='author-container'>
            <div className="author-icon">
              <img src={authorImg} alt="Author Image" className='author-img'/>
            </div>
            <div className="author-article-info">
              <span className="author-name">Michelle Appleton</span>
              <span className="article-date">28 Jun 2020</span>
            </div>
          </div>
          <button className="share-btn-container" onClick={toggle}>
            <img src={shareIcon} alt="Share Icon" className="share-btn" />
          </button>

        </div>
    )
}