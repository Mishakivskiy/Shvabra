import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaStar } from "react-icons/fa";
import shop_1 from './image/shop-img.jpg';
import shop_2 from './image/shop-img_2.jpg';
import shop_3 from './image/shop-img_3.jpg';
import shop_4 from './image/shop-img_4.jpg';
import shop_5 from './image/shop-img_5.jpg';
import shop_6 from './image/shop-img_6.jpg';
import shop_7 from './image/shop-img_7.jpg';
import shop_8 from './image/shop-img_8.jpg';
import shop_10 from './image/shop-img_10.jpg';
import shop_11 from './image/shop-img_11.jpg';
import shop_12 from './image/shop-img_12.jpg';
import shop_13 from './image/shop-img_13.jpg';
import shop_14 from './image/shop-img_14.jpg';
import shop_15 from './image/shop-img_15.jpg';
import './App.scss';

import axios from 'axios';

function App() {
  const [user, setUser] = useState('')
  const [phone, setPhone] = useState('')

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const sendMessage = async () => {
    console.log('work')
    try {
      const response = await axios.post(`https://api.telegram.org/bot6308111254:AAGq9e52F2ZTw_GpS9OZekauCL4IQfTVYkU/sendMessage`, {
        chat_id: '389582669',
        text: 'Замовлення товару міні-швабра:\n' + "Ім'я користувача: " + user + '\n' + "Номер телефону: " + phone
      });
      console.log('Message sent:', response.data);
      setUser('');
      setPhone('');
      alert('Повідомлення надіслано!');
      setIsOpen(false);
    } catch (error) {
      console.error('Помилка відправлення повідомлення:', error);
      alert('Помилка відправлення повідомлення');
    }
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '20px',
      width: '300px'
    },
  };

  return (
    <div className="App">
      <div className='container'>
        <div>
          <img className='image' src={shop_1} alt='' />
        </div>
        <div>
          <ul className='list'>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Підходить для будь-яких поверхонь
              </p>
            </li>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Пришвидшує прибирання у 2 рази
              </p>
            </li>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Віджим в одне натискання
              </p>
            </li>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Стильний та компактний дизайн
              </p>
            </li>
          </ul>
        </div>
        <div className='btn-block'>
          <div className='price'>
            <div>
              <p className='price__text'>
                ЗВИЧАЙНА ЦІНА:
              </p>
              <p className='price__num'>
                525 грн.
              </p>
            </div>
            <div>
              <p className='price__text1'>
                ЦІНА ПО АКЦІЇ:
              </p>
              <p className='price__num1'>
                395 грн.
              </p>
            </div>
          </div>
          <div className='price__btn-block'>
            <button className='price__btn' onClick={openModal}>ЗАМОВИТИ ЗІ ЗНИЖКОЮ</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              {/* <button onClick={closeModal}>close</button> */}
              <div className='modal-title'>
                Міні-швабра з віджимом
              </div>
              <form className='modal-form' onSubmit={e => {e.preventDefault();sendMessage(); }}>
                <label className='modal-form__label'>Ваше ім'я</label>
                <input className='modal-form__input'
                       type='text'
                       value={user}
                       onChange={e => setUser(e.target.value)}
                       required />
                <label className='modal-form__label'>Ваш телефон</label>
                <input className='modal-form__input'
                       type='tel'
                       value={phone}
                       onChange={e => setPhone(e.target.value)}
                       required />
                <div className='call'>
                  Менеджер звʼяжеться з Вами для підтвердження замовлення
                </div>
                <div className='order-block'>
                  <button className='order' type='submit'>
                    Оформити замовлення
                  </button>
                </div>
              </form>
            </Modal>
          </div>
          <div className='itemAc'>
            Залишилось товару по акції: 8 шт.
          </div>
        </div>
        <div>
          <img src={shop_2} alt='' />
        </div>
        {/* <div>
          <img src={shop_4} alt='' />
        </div> */}
        <div>
          <img src={shop_3} alt='' />
        </div>
        <div>
          <img src={shop_5} alt='' />
        </div>
        <div>
          <img src={shop_6} alt='' />
        </div>
        <div>
          <img src={shop_7} alt='' />
        </div>
        <div>
          <div className='video-title'>
            Живий відео-огляд:
          </div>
          <div>
            <iframe
              title="YouTube Video"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ZfSdK8_LGLc"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <img src={shop_8} alt='' />
        </div>
        <div className='clients'>
          <div className='clients-title'>
            Відгуки наших клієнтів
          </div>
          <div>
            <div className='client-block'>
              <div className='ava-nam'>
                <div className='avatar'>
                  K
                </div>
                <div className='name-date'>
                  <div className='name'>
                    Катерина
                  </div>
                  <div className='date'>
                    10 січ. 2024р.
                  </div>
                </div>
              </div>
              <div className='rate'>
                <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' />
              </div>
              <div className='comment'>
                Просто знахідка! Дуже зручна штука, не потрібно діставати цю величезну. Просто протерла поверхні і часу менше займає. Прийшла швидко і упакована добре,рекомендую!
              </div>
              <div className='image-client-block'>
                <img className='first-image' src={shop_10} alt='' />
                <img className='second-image' src={shop_11} alt='' />
              </div>

            </div>
            <div>
              <div className='client-block'>
                <div className='ava-nam'>
                  <div className='avatar'>
                    М
                  </div>
                  <div className='name-date'>
                    <div className='name'>
                      Марія
                    </div>
                    <div className='date'>
                      1 груд. 2023р.
                    </div>
                  </div>
                </div>
                <div className='rate'>
                  <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' />
                </div>
                <div className='comment'>
                  Маленька помічниця! Просто Супер 😍 Зручна, дійсно не залишає розводів, полегшила мені прибирання.Замовила одразу 2 шт, одна для машини, інша для квартири, за свою ціну просто знахідка.
                </div>
                <div className='image-client-block'>
                  <img className='first-image' src={shop_12} alt='' />
                  <img className='second-image' src={shop_13} alt='' />
                </div>

              </div>

            </div>
            <div>
              <div className='client-block'>
                <div className='ava-nam'>
                  <div className='avatar'>
                    А
                  </div>
                  <div className='name-date'>
                    <div className='name'>
                      Ангеліна
                    </div>
                    <div className='date'>
                      23 груд. 2023р.
                    </div>
                  </div>
                </div>
                <div className='rate'>
                  <FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' /><FaStar className='star' />
                </div>
                <div className='comment'>
                  Подарив чоловік, навіть не знала що таке інсує, що тільки не придумають😂. Дуже зручна міні швабра, тепер прибирання проходить набагато якісніше і швидше, користуюсь близько місяця, нарікань немає, замовлю ще декілька подружкам.
                </div>
                <div className='image-client-block'>
                  <img className='first-image' src={shop_14} alt='' />
                  <img className='second-image' src={shop_15} alt='' />
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <img src={shop_1} alt=""/>
        </div>
        <div>
          <ul className='list'>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Підходить до будь-яких поверхонь
              </p>
            </li>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Пришвидшує прибирання у 2 рази
              </p>
            </li>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Віджим в одне натискання
              </p>
            </li>
            <li className='list__item'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-6 w-6 text-green-500 mr-4"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>
              <p className='list__item-text'>
                Стильний та компактний дизайн
              </p>
            </li>
          </ul>
        </div> */}
        <div className='btn-block'>
          <div className='price'>
            <div>
              <p className='price__text'>
                ЗВИЧАЙНА ЦІНА:
              </p>
              <p className='price__num'>
                525 грн.
              </p>
            </div>
            <div>
              <p className='price__text1'>
                ЦІНА ПО АКЦІЇ:
              </p>
              <p className='price__num1'>
                395 грн.
              </p>
            </div>
          </div>
          <div className='price__btn-block'>
              <div className='modal-title1'>
                Міні-швабра з віджимом
              </div>
              <form className='modal-form1' onSubmit={e => {e.preventDefault();sendMessage(); }}>
                <label className='modal-form1__label1'>Ваше ім'я</label>
                <input className='modal-form1__input1'
                       type='text'
                       value={user}
                       onChange={e => setUser(e.target.value)}
                       required />
                <label className='modal-form1__label1'>Ваш телефон</label>
                <input className='modal-form1__input1'
                       type='tel'
                       value={phone}
                       onChange={e => setPhone(e.target.value)}
                       required />
                <button className='price__btn' type='submit'>Оформити замовлення</button>
              </form>
              <div className='call1'>
                Менеджер звʼяжеться з Вами для підтвердження замовлення
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
