import { RegisterForm } from "components/RegisterForm";
import css from "../../Modules/phoneBook.module.css";

export default function Register() {
    return (
    <div className={`${css.container}`}>
    <span className={` ${css.registerLogo}`}>Hi👋 Register, please!</span>
    <RegisterForm/>
    </div>
    );
};