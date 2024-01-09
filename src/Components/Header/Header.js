import React,{useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebseContext } from '../../store/Context';
function Header() {
  const {user} =useContext(AuthContext)
  const {firebase} = useContext(FirebseContext)
  const Navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {/* <span>Login</span> */}
          <span>{user ? ` Welcome-${user.displayName}` :<p onClick={()=>{
            Navigate('/login')
          }}>Login</p> }</span>
          <hr />
        </div>
       {user && <span onClick={()=>{
       firebase.auth().signOut();
        Navigate('/login')
       }}>LogOut</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
              Navigate('/create')
            }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
