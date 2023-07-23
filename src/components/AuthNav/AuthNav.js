import { NavLink } from "react-router-dom";
import css from '../../Modules/phoneBook.module.css';


export default function AuthNav() {
    return (
    <div className={`${css.basicFont} ${css.headerNav}`}>
    <NavLink className={css.linkHeader} to="register">
    Registration
    </NavLink>
    <NavLink className={css.linkHeader} to="/login">
    Log In
    </NavLink>
    </div>
    );
};