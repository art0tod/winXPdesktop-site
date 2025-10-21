import WelcomeIcon from "components/WelcomeIcon/WelcomeIcon";
import styles from "./Welcome.module.css";
import linkedin from "../../assets/linkedin.png";
import outlook from "../../assets/outlook_large.png";
import gallery from "../../assets/folder_image.png";
import pdf from "../../assets/pdf.png";
import github from "../../assets/github.png";
import cmd from "../../assets/cmd.png";
import users from "../../assets/users.png";
import butterfly from "../../assets/butterfly.png";
import { AppDirectory } from "@/appData";
import store from "@/redux/store";
import { addTab, setBackBtn } from "@/redux/tabSlice";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

const INTRO = `Здесь будет много текста или мало.`;

const WHYSITE = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis laboriosam suscipit autem vero rerum asperiores sunt provident repellendus deleniti et beatae, pariatur, dolorem earum minus culpa voluptate nostrum reprehenderit!`;

const INTERESTS = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam minus quo, dolorum libero officiis quos quibusdam officia, voluptate nihil consequatur illo molestiae voluptatem culpa assumenda harum animi. Consequuntur, reiciendis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam minus quo, dolorum libero officiis quos quibusdam officia, voluptate nihil consequatur illo molestiae voluptatem culpa assumenda harum animi. Consequuntur, reiciendis!`;

const INTERESTS2 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam minus quo, dolorum libero officiis quos quibusdam officia, voluptate nihil consequatur illo molestiae voluptatem culpa assumenda harum animi. Consequuntur, reiciendis!`;

const INTERESTS3 = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam minus quo, dolorum libero officiis quos quibusdam officia, voluptate nihil consequatur illo molestiae voluptatem culpa assumenda harum animi. Consequuntur, reiciendis!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quam minus quo, dolorum libero officiis quos quibusdam officia, voluptate nihil consequatur illo molestiae voluptatem culpa assumenda harum animi. Consequuntur, reiciendis!
`;

interface props {
  id: number;
}

const Welcome = ({ id }: props) => {
  const currTabID = useSelector((state: RootState) => state.tab.id);
  const backBtnActive = useSelector(
    (state: RootState) =>
      state.tab.tray[state.tab.tray.findIndex((tab) => tab.id === id)]
        .backBtnActive
  );

  const [aboutmeView, setAboutmeView] = useState(false);

  const handleRunApp = (e: number) => {
    const newTab = { ...AppDirectory.get(e), id: uuidv4(), zIndex: currTabID };
    store.dispatch(addTab(newTab));
  };
  const handleSwitchView = () => {
    setAboutmeView(true);
    store.dispatch(setBackBtn({ id: id, backBtnActive: true }));
  };
  useEffect(() => {
    setAboutmeView(backBtnActive);
  }, [backBtnActive]);
  return (
    <div className={styles.main}>
      {!aboutmeView ? (
        <div>
          <h3 className={styles.welcome_text}>
            Добро пожаловать в Windows XP.
          </h3>
          <p className={styles.subtitle}>
            Узнайте больше нажав на любую из иконок ниже!
          </p>
          <div className={styles.content}>
            <div className={styles.leftpanel}>
              <WelcomeIcon
                img={butterfly}
                text={"Нажми меня"}
                tooltip="Нажми"
                onClick={handleSwitchView}
              />
              {/* <WelcomeIcon
                img={github}
                text={"My GitHub Profile"}
                tooltip="My Brain Dump"
                onClick={() => {
                  window.open(
                    "https://github.com/firwer",
                    "_blank",
                    "noreferrer"
                  );
                }}
              /> */}
              {/* <WelcomeIcon
                img={linkedin}
                text={"My Linkedin"}
                tooltip="Connect with me!"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/poh-wei-pin-7b9061183/",
                    "_blank",
                    "noreferrer"
                  );
                }}
              /> */}
              {/* <WelcomeIcon
                img={pdf}
                text={"Adobe Acrobat"}
                tooltip="My Curriculum Vitae"
                onClick={() => {
                  window.open("./Resume.pdf");
                }}
              /> */}
            </div>
            <div className={styles.rightpanel}>
              {/* <WelcomeIcon
                img={cmd}
                text={"My Work"}
                tooltip="Interesting projects I have done"
                onClick={() => handleRunApp(2)}
              /> */}
              <WelcomeIcon
                img={outlook}
                text={"Почта"}
                tooltip="Написать письмо!"
                onClick={() => handleRunApp(1)}
              />
              <WelcomeIcon
                img={gallery}
                text={"Галлерея"}
                tooltip="Нажми чтобы увидеть!"
                onClick={() => handleRunApp(4)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className={styles.welcome_text}>Привет, [имя]!</h3>
          <p className={styles.subtitle}></p>
          <div className={styles.content}>
            {/* <div className={styles.pic_col}>
              <div className={styles.photo_placeholder}>
                <Image
                  alt="profile placeholder"
                  src={users.src}
                  width={160}
                  height={160}
                  className={styles.profile_icon}
                />
                <p className={styles.placeholder_text}>
                  Personal imagery has been removed.
                </p>
              </div>
            </div> */}
            <div className={styles.text_col}>
              <p className={styles.subtitle}>{INTRO}</p>
              <h3 className={styles.subtitle_header}>Заголовок</h3>
              <p className={styles.subtitle}>{WHYSITE}</p>
              <h3 className={styles.subtitle_header}>Ещё заголовок</h3>
              <p className={styles.subtitle}>{INTERESTS}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS2}</p>
              <br></br>
              <p className={styles.subtitle}>{INTERESTS3}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
