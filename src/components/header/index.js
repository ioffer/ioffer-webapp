import logoicon from '../../assets/images/logo.svg'
import favicon from '../../assets/images/fav.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTags, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
// import './style.scss'

export default function Header() {
    let searchInput;
    return (
        <div className="header">
            <div className="outer-container">
                <a href="/" className='menu-bar'>
                    <figure>
                        <FontAwesomeIcon icon={faBars}/>
                    </figure>
                </a>
                <div className='searchBar'>
                    <a href='/'>
                        <FontAwesomeIcon icon={faSearch} alt="logo"/>
                    </a>
                    <input type="text" className='search-input font-roboto' placeholder='Search here' value={searchInput} />
                </div>
                <a href='/'>
                    {/*<FontAwesomeIcon icon={faHeart} alt="logo" color={'red'} />*/}
                    <img src = {favicon} alt="fav" width="24px" height="24px" fill="red"/>
                </a>
            </div>
        </div>
    )
}