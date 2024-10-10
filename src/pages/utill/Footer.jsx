import Lab from "../lab/lab.module.css";

export default function Footer() {
    return (
        <div>
            <footer>
                <div id={Lab.info_window}>
                    <span>
                        Copyright 2023. 전곽 실험실안전관리위원회 All rights
                        reserved.
                    </span>
                    <span>
                        <u>dobby is free</u>
                    </span>
                </div>
            </footer>
        </div>
    );
}
