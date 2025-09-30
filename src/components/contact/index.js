import "./style.css"

export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        <h3 className="contact__sub-title">Contact me</h3>
        <p className="contact__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <form className="contact__form">
          <div className="contact__row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="contact__input"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="contact__input"
              required
            />
          </div>
          <div className="contact__row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact__input"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="contact__input"
            />
          </div>
          <div className="contact__row">
            <select name="topic" className="contact__input2" required>
              <option value="">Select one...</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="contact__row">
            <textarea
              name="message"
              placeholder="Type your message..."
              className="contact__textarea"
              required
            ></textarea>
          </div>
          <div className="contact__row">
            <label>
              <input type="checkbox" name="terms" required /> I accept the terms</label>
          </div>
          <div className="contact__row">
            <button type="submit" className="contact__btn-submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}
