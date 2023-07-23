import { useAuth } from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";
import css from '../../Modules/phoneBook.module.css';


export const Navigation = () => {
    const {isLoggedIn} = useAuth();

    return(
    <nav style={{display:"flex", gap:"58%"}}>
    <NavLink className={css.phoneBookLogo} to="/">
    PhoneBook
    </NavLink>
    {isLoggedIn && (
    <NavLink className={css.contactsLogo} to="/contacts">
    Contacts
    </NavLink>
    )}
    </nav>
    );
};