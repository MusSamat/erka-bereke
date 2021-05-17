import React from "react";
import './ServiceSection.css'

const ServiceSection = () => {
    return(
        <div className="container">

            <div className='serviceSection'>
                <div className='serviceItems'>
                    <figure className="m-0">
                        <img src="assets/images/service/icon-apple.jpg"/>
                    </figure>
                    <div>
                         <h4>Дайыма жаңы</h4>

                        <span> Erkа Bereke дүкөнүнөн күн сайын  жаны
                            товарларды cатып ал
                                </span>
                    </div>
                </div>
                <div className='serviceItems'>
                    <figure className="m-0">
                        <img src="assets/images/service/icon-leaf.jpg"/>
                    </figure>
                    <div >
                         <h4>Органикалык таза азыктар &amp;</h4>

                        <span>Ата-Мекендик жана сырттан ташылган кепилдиктүү товар
                                </span>
                    </div>
                </div>
                <div className='serviceItems'>
                    <figure className="m-0">
                        <img src="assets/images/service/icon-medal.jpg"/>
                    </figure>
                    <div >
                         <h4>Сапаттуу</h4>

                        <span>Ишенимдүү гана компаниялардын товарлары
                                </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceSection