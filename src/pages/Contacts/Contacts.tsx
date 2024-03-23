import {Slider} from "components/UI/Slider/Slider/Slider";
import {CardContact} from "components/UI/Card/CardContact";

export default function ContactsPage() {
    return (
        <main>
            <section>
                <div className={'__container'}>
                    <Slider/>
                </div>
            </section>
            <section>
                <div className={'__container'}>
                    <CardContact/>
                </div>
            </section>
            <section>
                <div className={'__container'}>
                    <h1>Наша команада</h1>
                </div>
            </section>
            <section>
                <h1>Контакти</h1>
                <h2>У вас залишилися питання?</h2>
                <a href={'mailto:support@intellecta.ua'}>+380 97 907 1001</a>
                <h2>Хочете спробувати платформу для дистанційного навчання?</h2>
                <a href={'tel:+380 97 907 1001'}>+380 97 907 1001</a>
            </section>
        </main>
    );
}

