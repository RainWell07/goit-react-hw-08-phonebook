import css from '../../pages/pages.module.css';
import { Link } from 'react-router-dom';
export default function NotFound() {
    return(
        <div className={css.homeOverlay} style={{marginTop:"100px"}}>
            <h1 className={`${css.homeContainer} ${css.basicFont}`} style={{marginTop:0, marginLeft:"auto", marginRight:"auto"}}>Oops, we have a problem🫢</h1>
            <h2 className={`${css.homeContainer} ${css.basicFontHome}` } style={{fontSize:'23px'}} >It seems that you`ve navigated to a page that no longer <span style={{fontWeight:'bold'}}>exists<br/></span>Please, navigate to our <span style={{fontWeight:'bold'}}>homepage</span> by using the link below - <span style={{fontWeight:'bold'}}><Link to="/">HomePage</Link></span></h2>
        </div>
    );
};