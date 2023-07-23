import { LoginForm } from "components/LoginForm";
import css from '../../Modules/phoneBook.module.css';

export default function Login() {
    return (
    <div>
    <span className={`${css.logInLogo}`}>Use your registered infromation to Log In🫶</span>
    <LoginForm/>
    </div>
    )
}