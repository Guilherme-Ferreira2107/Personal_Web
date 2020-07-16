import React from 'react';
import './styles.scss';

const Codecademy = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-2 img-codecademy">
                    <div className="ImgB">                                                                
                        <div>
                            <img src="https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/4391/Codecademy.jpg" alt="Codecademy" />
                        </div>
                    </div>
                </div>

                <div className="col-sm-10 text-right">
                <div className="titleB">
                    <h4>Reactjs, Javascript, Mysql e NodeJs</h4>
                </div>                                
                <div className="TextB">
                    <p>Na Codecademy obtive uma boa base de conhecimento sobre programação, graças a sua <br />
                    plataforma interativa online de ensino e sua metodologia inovadora desenvolvi uma <br />
                    boa base de conhecimento e fundamentos.</p><br />
                </div>
                <div className="BtnB">
                    <a href="https://www.codecademy.com/">VISITAR SITE</a>
                </div>                                
            </div>
            </div><br /><br />
        </div>
    )
}

export default Codecademy;