import "./style/header.sass"
import { useState } from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import Modal1 from "./modal/SellerForm";
import Modal2 from "./modal/ContactForm";

const Header = () => { 
    const [modal1Open, setModal1Open] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <button onClick={() => {setModal1Open(true)}}>
              <img src="./images/mobile/mobile-checklist.png" alt="Check List" />
              <span>Satıcı Kaydı</span>
            </button>
          ),
        },
        {
          key: '2',
          label: (
            <button onClick={() => {setModal2Open(true)}}>
              <img src="./images/mobile/mobile-phone.png" alt="Check List" />
              <span>İletişim</span>
            </button>
          ),
        },
        {
          key: '3',
          label: (
            <a rel="noopener noreferrer" href="#why-container">
              Neden Tedarika?
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a rel="noopener noreferrer" href="#solution-container">
              Çözümlerimiz
            </a>
          ),
        },
        {
          key: '5',
          label: (
            <a rel="noopener noreferrer" href="#statistic-container">
              Rakamlarla Tedarika
            </a>
          ),
        },
        {
          key: '6',
          label: (
            <a rel="noopener noreferrer" href="#vision-container">
              Hakkımızda
            </a>
          ),
        },
    ];

    return (
        <header>
            <Modal2 modal2Open={modal2Open} setModal2Open={setModal2Open} />
            <Modal1 modal1Open={modal1Open} setModal1Open={setModal1Open} />
            <div className="header-container">
                <div className="logo">
                    <img src="./images/tedarika.png" alt="Site Logo | Tedarika" />
                </div>
                <div className="text-buttons">
                    <a href="#why-container">
                        Neden Tedarika?
                    </a>
                    <a href="#solution-container">
                        Çözümlerimiz
                    </a>
                    <a href="#statistic-container">
                        Rakamlarla Tedarika
                    </a>
                    <a href="#vision-container">
                        Vizyonumuz
                    </a>
                </div>
                <div className="action-buttons">
                    <button onClick={() => {setModal1Open(true)}}>
                        <img src="./images/mobile/check-list-vector.png" alt="" />
                        <span>Satıcı Kaydı</span>
                    </button>
                    <button onClick={() => {setModal2Open(true)}} id="contact">
                        <img src="./images/mobile/phone-vector.png" alt="" />
                        <span>İletişim</span>
                    </button>
                </div>
                <Dropdown
                    menu={{
                    items,
                    }}
                    placement="bottomRight"
                    overlayStyle={{backgroundColor:"#ADD28E"}}
                >
                    <div className="mobile-menu">
                        <img src="./images/header-icon/Menu.png" alt="Menu Mobile" />
                    </div>
                </Dropdown>
                
            </div>
        </header>
    );
}

export default Header;