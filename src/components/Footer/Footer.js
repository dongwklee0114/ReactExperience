import React from 'react';
import styles from './footer.css';
import InnerConatiner from "components/InnerContainer/InnerConatiner";

function Footer(props) {
    const desc = <p className="desc">모든 이미지는 무료로 배포 중인 이미지를 사용하였습니다.</p>
    const copyRight = <div className="copyright">
        © Copyright <b><span>redking011444</span></b>. All Rights Reserved
        <br/>
        {desc}
    </div>
    return <>
        <footer className="footer lightBrownBg">
            <InnerConatiner content={copyRight}/>
        </footer>
    </>;
}

export default Footer;
