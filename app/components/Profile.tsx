// module
import Image from "next/image";

// stylesheet
import styles from "styles/components/Profile/Profile.module.css";
import thumbStyles from "styles/components/Profile/ProfileThumb.module.css";
import navStyles from "styles/components/Profile/ProfileNav.module.css";
import infoStyles from "styles/components/Profile/ProfileInfo.module.css";

// config
import pathConfig from "../../next.config";

// fontawesome
import { IconDefinition, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faSquareInstagram, faVimeo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
config.autoAddCss = false

export default function ProfileInfo(): JSX.Element {
    const imagePath: string = getData();

    return (
        <div className={styles.profileContainer}>
            <div className={thumbStyles.profileThumbContainer}>
                <Image
                    className={thumbStyles.profileImage}
                    src={`${imagePath}/static/images/profile_image.png`}
                    alt="프로필 이미지"
                    width={300}
                    height={300}
                    style={{
                        objectFit: "cover"
                    }}
                    priority={true}
                ></Image>
            </div>
            <div className={infoStyles.profileInfoContainer}>
                <div className={infoStyles.profileNameContainer}>
                    <span className={infoStyles.profileName}>- name -</span>
                </div>
                <div className={infoStyles.profileSubContainer}>
                    <span className={infoStyles.profileSub}>
                        Full-stack | Backend
                    </span>
                </div>
            </div>
            <div className={navStyles.profileNavContainer}>
                <Link className={navStyles.linkContainer} href={""} target="_blank">
                    <div className={navStyles.githubContainer}>
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </div>
                </Link>
                <Link className={navStyles.linkContainer} href={""} target="_blank">
                    <div className={navStyles.velogContainer}>
                        <FontAwesomeIcon icon={faVimeo} size="3x" />
                    </div>
                </Link>
                <Link className={navStyles.linkContainer} href={""} target="_blank">
                    <div className={navStyles.instagramContainer}>
                        <FontAwesomeIcon icon={faSquareInstagram} size="3x" />
                    </div>
                </Link>
                <Link className={navStyles.linkContainer} href={""}>
                    <div className={navStyles.mailContainer}>
                        <FontAwesomeIcon icon={faEnvelope} size="3x" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

function getData(): string {
    const href: string[] = [
        "https://github.com/cHr1s0326", 
        "https://velog.io/@chr1s0", 
        "https://www.instagram.com/ch_r1s0/", 
        "mailto:qudcksrlf1@gmail.com"
    ];
    const target: boolean[] = [true, true, true, false];
    const className: string[] = ["githubContainer", "velogContainer", "instagramContainer", "mailContainer"];
    const icon: IconDefinition[] = [faGithub, faVimeo, faSquareInstagram, faEnvelope];

    return pathConfig.basePath;
}