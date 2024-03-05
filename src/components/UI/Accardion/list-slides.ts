import laptopSlideF from "assets/img/laptop-slider-1.png"
import laptopSlideS from "assets/img/laptop-slider-2.png"

export type TAccardionProps = {
  id?: number;
  image: string;
  title: string;
  subtitle: string;
  pageName:string;
  isOpen?:boolean;
  onToggle?: () => void;
};

export const AccardionProps: TAccardionProps[] = [
  {
    id: 1,
    image: laptopSlideF,
    title:' -  це ваш особистий органайзер для успішного навчання',
    subtitle:'Зручне меню на головній сторінці дозволяє швидко переглядати розклад і отримувати посилання на онлайн уроки. Одна сторінка для новин, повідомлень з класних бесід, дедлайнів та рейтингу дозволяє тримати все під контролем.\n' +
        '\n' +
        'Швидкий доступ до журналу оцінок і зручних тестів з кожного предмету допомагає вам відстежувати свій прогрес. А функція зв\'язку із однокласниками та викладачами створює ефективну платформу для обміну інформацією та спілкування. Зробіть навчання легшим та цікавішим з нашим додатком!',
    pageName:'Для учнів',
    isOpen:true,
  },
  {
    id: 2,
    image: laptopSlideS,
    title:' обʼєднує проведення онлайн уроків, надання та перевірку завдань та звʼязок із усіма учасниками навчального процесу в одному місці',
    subtitle:'Розклад, надання оцінок, автоматичний журнал відвідувань, чати із колегами та учнями доступні для кожного викладача. Автоматична розсилка новин та оголошень - це базові інструменти для полегшення дистанційного навчання у застосунку. З Intellecta викладачі можуть легко управляти всіма аспектами дистанційного навчання, зосереджуючись на наданні якісної освіти.',
    pageName:'Для викладачів',
    isOpen:false,
  },
  {
    id: 3,
    image: laptopSlideF,
    title:' спрощує процес створення розкладу, забезпечуючи зрозумілу та просту структуру, що дозволяє ефективно вести організацію та слідкувати за навчальним процесом.',
    subtitle:'Розклад, надання оцінок, автоматичний журнал відвідувань, чати із колегами та учнями доступні для кожного викладача. Автоматична розсилка новин та оголошень - це базові інструменти для полегшення дистанційного навчання у застосунку. З Intellecta викладачі можуть легко управляти всіма аспектами дистанційного навчання, зосереджуючись на наданні якісної освіти.',
    pageName:'Для адміністрації навчальних закладів',
    isOpen:false,
  },
];
