import Footer from "../utill/Footer";
import Header from "../utill/Header";
import style from "./rental_page.module.css";
function Rental_page() {
    return (
        <>
            <Header />
            <main>
                <div className={style.lt}>
                    <div className={style.mlt}>
                        <p className={style.labmap}>UV-VIS 분광광도계</p>
                        <div className={style.left}>5/50 남음</div>
                        <div className={style.arrow}>
                            <a href="./메인.html">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/img/icons/arrow.svg"
                                    }
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.box_detail}>
                        <div className={style.list_outbox}>
                            <div className={style.list_box}>
                                <h3>대여 개수</h3>
                                <input
                                    type="number"
                                    name="count"
                                    defaultValue="1"
                                    placeholder="직접 입력"
                                />
                                <h3>대표 학생(학번 이름)</h3>
                                <span className={style.txt}>
                                    <input
                                        type="text"
                                        name="stdnt_num"
                                        placeholder="직접 입력"
                                    />
                                    <input
                                        type="'text"
                                        name="stdnt_name"
                                        placeholder="직접 입력"
                                    />
                                </span>
                                <h3>담당 교사</h3>
                                <select name="tcher">
                                    <option value="">선택</option>
                                    <option value="앙용해">양용해T</option>
                                    <option value="이주숙">이주숙T</option>
                                    <option value="윤정강">윤정강T</option>
                                    <option value="이기춘">이기춘T</option>
                                </select>
                                <div className={style.submt}>
                                    <input
                                        type="submit"
                                        name="sub"
                                        value="대여"
                                    />
                                </div>
                            </div>
                        </div>
                        <div id="equipt_img">
                            <img
                                src="../imgs/lab/biology/생명과학실험실 UB-VIS 임시.png"
                                alt="생명과학 실험실 UV-VIS 분광광도계"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
export default Rental_page;
