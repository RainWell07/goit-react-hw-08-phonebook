import { useDispatch } from 'react-redux';
import { register } from 'Redux/Authorization/ApiOperations';
import css from '../Modules/phoneBook.module.css'

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={`${css.basicFont} ${css.form}`} onSubmit={handleSubmit} autoComplete="on">
        <label className={`${css.basicFont} ${css.label}`}>Username:
            <input className={`${css.basicFont} ${css.input}`}  required type="text" name="name" aria-invalid="false" />
        </label>
        <label className={`${css.basicFont} ${css.label}`}>Email:
            <input className={`${css.basicFont} ${css.input}`} required type="email" name='email' aria-invalid="false" />
        </label>
        <label className={`${css.basicFont} ${css.label}`}>Password:
        <input className={`${css.basicFont} ${css.input}`} required type='password' name='password' aria-invalid="false"  />
        </label>
        <button className={`${css.basicFont} ${css.button}`} type="submit">Register</button>
    </form>
);
};