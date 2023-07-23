import {useAuth} from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Authorization/ApiOperations';
import css from "../../Modules/phoneBook.module.css";


export default function UserMenu() {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return (
    <div className={css.logout}>
    <p className={`${css.basicFont} ${css.greetings}`}>Welcome, {user.name}</p>
    <button className={css.logoutBtn} type="button" onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
    );
};