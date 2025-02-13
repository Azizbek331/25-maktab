import { Link } from "react-router-dom";
import "./Contact.css"



function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Biz bilan bog'laning</h1>
        <p>Maktabning asosiy maqsadi - iqtidorli yoshlarni tarbiyalashga qaratilganini ifodalaydi</p>
      </div>
      
  

<div className="parents-info">
  <h2>Hurmatli ota-onalar!</h2>
  <p>Farzandingiz ta'limi - bizning asosiy vazifamiz. Savollaringiz va takliflaringiz biz uchun muhim!</p>
  <div className="services-grid">
    <div className="service-item">
      <span className="service-icon">📚</span>
      <h3>O'quv jarayoni</h3>
      <p>Dars jadvali, fanlar va o'quv dasturlari haqida ma'lumot olish</p>
    </div>
    <div className="service-item">
      <span className="service-icon">🎓</span>
      <h3>O'quvchi yutuqlari</h3>
      <p>Farzandingizning baholari va yutuqlari bilan tanishish</p>
    </div>
    <div className="service-item">
      <span className="service-icon">👨‍🏫</span>
      <h3>O'qituvchilar</h3>
      <p>Malakali o'qituvchilar bilan uchrashuvlar tashkil etish</p>
    </div>
    <div className="service-item">
      <span className="service-icon">💡</span>
      <h3>Qo'shimcha darslar</h3>
      <p>To'garaklar va qo'shimcha mashg'ulotlarga yozilish</p>
    </div>
    <div className="service-item">
      <span className="service-icon">🏆</span>
      <h3>Sport va madaniyat</h3>
      <p>Sport musobaqalari va madaniy tadbirlarda ishtirok etish</p>
    </div>
    <div className="service-item">
      <span className="service-icon">🌟</span>
      <h3>Iqtidorli bolalar</h3>
      <p>Iqtidorli o'quvchilar uchun maxsus dasturlar va imkoniyatlar</p>
    </div>
  </div>
</div>
      
      <div className="contact-info-grid">
        <div className="info-card">
          <div className="icon-wrapper">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="info-content">
            <h3>Telefon raqamlar</h3>
            <div className="contact-list">
              <div className="contact-item">
                <span className="label">Direktor:</span>
                <a href="tel:+998901234567">+998 95 228 60 25</a>
              </div>
              <div className="contact-item">
                <span className="label">O'quv bo'limi:</span>
                <a href="tel:+998912345678">+998 93 405 94 50</a>
              </div>
              <div className="contact-item">
                <span className="label">Qabulxona:</span>
                <a href="tel:+998933456789">+998 95 228 60 25</a>
              </div>
            </div>
          </div>
        </div>

        <div className="info-card">
          <div className="icon-wrapper">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="info-content">
            <h3>Email manzillar</h3>
            <div className="contact-list">
              <div className="contact-item">
                <span className="label">Direktor:</span>
                <a href="mailto:direktor@25maktab.uz">direktor@25maktab.uz</a>
              </div>
              <div className="contact-item">
                <span className="label">O'quv bo'limi:</span>
                <a href="mailto:study@25maktab.uz">study@25maktab.uz</a>
              </div>
              <div className="contact-item">
                <span className="label">Umumiy:</span>
                <a href="mailto:info@25maktab.uz">info@25maktab.uz</a>
              </div>
            </div>
          </div>
        </div>

        <div className="info-card">
          <div className="icon-wrapper">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="info-content">
            <h3>Bizning manzil</h3>
            <div className="address-content">
              <p className="main-address">Namangan viloyati, Namangan tumani</p>
              <p>Tinchlik ko'chasi, 25-maktab</p>
              <div className="transport-info">
                <p className="transport-title">Jamoat transporti:</p>
                <p>Avtobuslar: 10, 18, 8</p>
                <p>Bekat: "Markaziy shifoxona"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="info-card">
          <div className="icon-wrapper">
            <i className="fas fa-clock"></i>
          </div>
          <div className="info-content">
            <h3>Ish vaqtlari</h3>
            <div className="schedule-list">
              <div className="schedule-item">
                <span className="day">Dushanba - Juma:</span>
                <span className="time">8:00 - 17:00</span>
              </div>
              <div className="schedule-item">
                <span className="day">Shanba:</span>
                <span className="time">8:00 - 13:20</span>
              </div>
              <div className="schedule-item break">
                <span className="day">Tushlik tanaffus:</span>
                <span className="time">11:15 - 11:45</span>
              </div>
              <div className="schedule-item closed">
                <span className="day">Yakshanba:</span>
                <span className="time">Dam olish kuni</span>
              </div>
            </div>
          </div>
        </div>
      </div>


  

      <form className="contact-form">
        <h2 className="h2-class">Xabar qoldirish</h2>
        <p className="form-description">Barcha savol va takliflaringizni quyidagi forma orqali yuborishingiz mumkin</p>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Ism-familiyangiz *</label>
            <input type="text" id="name"  placeholder="Ism - familiyangizni kiriting"/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefon raqamingiz *</label>
       
<input 
  type="tel"
  id="phone"
  name="phone"
  pattern="\+998 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}"
  maxLength="17"
  placeholder="+998 90 123 45 67"
  onChange={(e) => {
    let value = e.target.value;
    
  
    if (!value.startsWith('+998')) {
      return;
    }
    

    const numbers = value.replace(/\D/g, '');
    

    if (numbers.length >= 3) {
      let formatted = '+' + numbers.substring(0, 3);
      if (numbers.length > 3) formatted += ' ' + numbers.substring(3, 5);
      if (numbers.length > 5) formatted += ' ' + numbers.substring(5, 8);
      if (numbers.length > 8) formatted += ' ' + numbers.substring(8, 10);
      if (numbers.length > 10) formatted += ' ' + numbers.substring(10, 12);
      
      e.target.value = formatted;
    }
  }}
  style={{ letterSpacing: '1px' }}
/>


          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email manzilingizni kiriting * </label>
            <input type="email" id="email" placeholder="example@gmail.com" />
            
          </div>
          <div className="form-group">
            <label htmlFor="category">Murojaat turini tanlang *</label>
            <select id="category" required>
              <option value="">Tanlang</option>
              <option value="question">Savol</option>
              <option value="suggestion">Taklif</option>
              <option value="complaint">Shikoyat</option>
              <option value="gratitude">Minnatdorchilik</option>
              <option value="other">Boshqa</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Xabaringiz *</label>
          <textarea  id="message" rows="5" placeholder="Xabar qoldiring..."></textarea>
        </div>

        <div className="form-footer">
          <p className="required-note">* Majburiy maydonlar</p>
          <Link to={"/"}>
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
            Xabarni yuborish
          </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Contact;