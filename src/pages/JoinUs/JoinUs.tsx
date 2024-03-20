import Subheader from "components/UI/Header/Subheader";
import styles from './joinus.module.scss';
export default function JoinUsPage() {
    return (
        <main>
            <Subheader/>
            <section className={styles.join}>
                <div className={'join__container'}>
                    <div className={styles.join__role}>
                        <button>Для учнів</button>
                        <button>Для викладачів</button>
                        <button>Для адміністрації</button>
                    </div>
                    <div className={styles.join__form_wrapper}>
                        <div className={styles.join__form_secondwrapper}>
                            <h1 className={styles.join__form_title}>Авторизація</h1>
                            <form className={styles.join__form}>
                                <label>ПІБ:</label>
                                <input type={'text'} placeholder={'введіть ваше призвище, імʼя та по-ба...'}/>
                                <label>Ваша роль:</label>
                                <select>
                                    <option>Для учнів</option>
                                    <option>Для викладачів</option>
                                    <option>Для адміністрації</option>
                                </select>
                                <label>Електронна поштова адреса:</label>
                                <input type={'email'} placeholder={'введіть email'}/>
                                <label>Пароль:</label>
                                <input type={'password'} placeholder={'введіть пароль'}/>
                                <div className={styles.join__form_btns}>
                                    <a target={'_blank'} href={"https://fredytest.kyiv.ua/auth/login"}
                                       className={styles.join__form_btns_join}>Приєднатися</a>
                                    <span>чи</span>
                                    <a href={"https://fredytest.kyiv.ua/auth/login"}
                                       className={styles.join__form_btns_google}>Увійти із Google</a>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

