import './ShareOption.css'

import shareIcon from '../assets/images/icon-share.svg'
import FBIcon from '../assets/images/icon-facebook.svg'
import twitIcon from '../assets/images/icon-twitter.svg'
import pintIcon from '../assets/images/icon-pinterest.svg'


export default function ShareOption({ toggle }) {
    return (
        <div className="share-option-container">
            <div className="share-btns-container">
                <span>SHARE</span>
                <img src={FBIcon} alt="Facebook Icon" className="icon" />
                <img src={twitIcon} alt="Twitter Icon" className="icon" />
                <img src={pintIcon} alt="Pinterest Icon" className="icon" />
            </div>
            <button className="share-btn-container" onClick={toggle}>
                <img src={shareIcon} alt="Share Icon" className="share-btn" />
            </button>
        </div>
    )
}