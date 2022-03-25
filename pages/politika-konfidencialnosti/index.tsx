import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"


const PrivacyPolicy: NextPage = () => {
  return (
    <Layout 
      title='Политика конфиденциальности компании Терминал-М | 
      Строительство. Отделка. Проектирование' 
      desc='Политика конфиденциальности компании Терминал-М | 
      Строительство. Отделка. Проектирование'
      ogTitle='Политика конфиденциальности компании Терминал-М | 
      Строительство. Отделка. Проектирование'>
        <section className={styles.privacyPolicy}>
          <div className={styles.privacyPolicy__container}>
            <h2 className={styles.privacyPolicy__title}>
              Кто мы
            </h2>
            <p className={styles.privacyPolicy__text}>
              Наш адрес сайта: https://www.terminal-m31.ru/
            </p>
            <h1 className={styles.privacyPolicy__title}>
              Какие персональные данные мы собираем и с какой целью
            </h1>
            <h2 className={styles.privacyPolicy__title}>
              Комментарии
            </h2>
            <p className={styles.privacyPolicy__text}>
              Если посетитель оставляет комментарий на сайте, 
              мы собираем данные указанные в форме комментария, 
              а также IP адрес посетителя и данные user-agent 
              браузера с целью определения спама.
            </p>
            <p className={styles.privacyPolicy__text}>
              Анонимизированная строка создаваемая из вашего 
              адреса email (“хеш”) может предоставляться сервису 
              Gravatar, чтобы определить используете ли вы его. 
              Политика конфиденциальности Gravatar доступна 
              здесь: https://automattic.com/privacy/ . 
              После одобрения комментария ваше изображение профиля 
              будет видимым публично в контексте вашего комментария.
            </p>
            <h2 className={styles.privacyPolicy__title}>
              Медиафайлы
            </h2>
            <p className={styles.privacyPolicy__text}>
              Если вы зарегистрированный пользователь и загружаете 
              фотографии на сайт, вам возможно следует избегать 
              загрузки изображений с метаданными EXIF, так как они 
              могут содержать данные вашего месторасположения по GPS. 
              Посетители могут извлечь эту информацию скачав 
              изображения с сайта.
            </p>
            <h2 className={styles.privacyPolicy__title}>
              Формы контактов
            </h2>
            <h3 className={styles.privacyPolicy__title}>
              Куки
            </h3>
            <p className={styles.privacyPolicy__text}>
              Если вы оставляете комментарий на нашем сайте, 
              вы можете включить сохранение вашего имени, адреса 
              email и вебсайта в куки. Это делается для вашего 
              удобства, чтобы не заполнять данные снова при 
              повторном комментировании. Эти куки хранятся в 
              течение одного года.
            </p>
            <p className={styles.privacyPolicy__text}>
              Если у вас есть учетная запись на сайте и вы войдете 
              в неё, мы установим временный куки для определения 
              поддержки куки вашим браузером, куки не содержит 
              никакой личной информации и удаляется при закрытии 
              вашего браузера.
            </p>
            <p className={styles.privacyPolicy__text}>
              При входе в учетную запись мы также устанавливаем 
              несколько куки с данными входа и настройками экрана. 
              Куки входа хранятся в течение двух дней, куки с 
              настройками экрана – год. Если вы выберете возможность 
              “Запомнить меня”, данные о входе будут сохраняться в 
              течение двух недель. При выходе из учетной записи куки 
              входа будут удалены.
            </p>
            <p className={styles.privacyPolicy__text}>
              При редактировании или публикации статьи в браузере 
              будет сохранен дополнительный куки, он не содержит 
              персональных данных и содержит только ID записи 
              отредактированной вами, истекает через 1 день.
            </p>
            <h3 className={styles.privacyPolicy__title}>
              Встраиваемое содержимое других вебсайтов
            </h3>
            <p className={styles.privacyPolicy__text}>
              Статьи на этом сайте могут включать встраиваемое 
              содержимое (например видео, изображения, статьи и др.), 
              подобное содержимое ведет себя так же, как если бы 
              посетитель зашел на другой сайт.
            </p>
            <p className={styles.privacyPolicy__text}>
              Эти сайты могут собирать данные о вас, использовать куки, 
              внедрять дополнительное отслеживание третьей стороной и 
              следить за вашим взаимодействием с внедренным содержимым, 
              включая отслеживание взаимодействия, если у вас есть 
              учетная запись и вы авторизовались на том сайте.
            </p>
            <h3 className={styles.privacyPolicy__title}>
              Веб-аналитика
            </h3>
            <h2 className={styles.privacyPolicy__title}>
              С кем мы делимся вашими данными
            </h2>
            <h3 className={styles.privacyPolicy__title}>
              Как долго мы храним ваши данные
            </h3>
            <p className={styles.privacyPolicy__text}>
              Если вы оставляете комментарий, то сам комментарий 
              и его метаданные сохраняются неопределенно долго. 
              Это делается для того, чтобы определять и одобрять 
              последующие комментарии автоматически, вместо 
              помещения их в очередь на одобрение.
            </p>
            <p className={styles.privacyPolicy__text}>
              Для пользователей с регистрацией на нашем сайте мы 
              храним ту личную информацию, которую они указывают 
              в своем профиле. Все пользователи могут видеть, 
              редактировать или удалить свою информацию из профиля 
              в любое время (кроме имени пользователя). 
              Администрация вебсайта также может видеть и изменять 
              эту информацию.
            </p>
            <h3 className={styles.privacyPolicy__title}>
              Какие у вас права на ваши данные
            </h3>
            <p className={styles.privacyPolicy__text}>
              При наличии учетной записи на сайте или если вы оставляли 
              комментарии, то вы можете запросить файл экспорта 
              персональных данных, которые мы сохранили о вас, включая 
              предоставленные вами данные. Вы также можете запросить 
              удаление этих данных, это не включает данные, которые 
              мы обязаны хранить в административных целях, по закону 
              или целях безопасности.
            </p>
            <h3 className={styles.privacyPolicy__title}>
              Куда мы отправляем ваши данные
            </h3>
            <p className={styles.privacyPolicy__text}>
              Комментарии пользователей могут проверяться автоматическим 
              сервисом определения спама.
            </p>
          </div>
        </section>
    </Layout>
  )
}

export default PrivacyPolicy