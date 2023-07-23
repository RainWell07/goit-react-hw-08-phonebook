import css from '../pages.module.css'
export default function Home() {
    return(
        <div className={css.homeOverlay}>
            <h1 className={`${css.homeContainer} ${css.basicFont}`}>Welcome👋</h1>
            <h2 className={`${css.homeContainer} ${css.basicFontHome}`} >Just use <span style={{fontWeight:'bold'}}>Log In</span> or <span style={{fontWeight:'bold'}}>Registration</span> to your personal <span style={{fontWeight:'bolder'}}>Phone</span><span className={css.bookLogo}>Book</span></h2>
        </div>
    );
};