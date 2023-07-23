import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "Redux/operations";
import { selectError, selectIsLoading } from "Redux/selectors";
import css from '../../Modules/phoneBook.module.css';
import cssPages from '../pages.module.css'
import { ThreeDots } from 'react-loader-spinner';



export default function Contacts() {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const isLoading = useSelector(selectIsLoading);
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    return (
    <div className={cssPages.contactsContainer}>
    <ContactForm/>
    <Filter/>
    {isLoading && !error && (
      <div className={css.loadingOverlay}>
      <b className={css.FetchLogo}><ThreeDots  height={290} width={300} color="#5a5aed"/></b>
      </div>
      )}
    <ContactList/>
    </div>
    );
};
