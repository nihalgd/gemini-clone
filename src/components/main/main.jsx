import { assets } from "../../assets/assets";
import './Main.css'

const main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Nihal.</span></p>
          <p>How can i help you today</p>
        </div>
        <div className="cards">

          <div className="card">
            <p>Suggest beautiful places to see an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>

          <div className="card">
            <p>Briefly summarize this concept: Urban planning</p>
            <img src={assets.bulb_icon} alt="" />
          </div>

          <div className="card">
            <p>Brainstrom team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="" />
          </div>

          <div className="card">
            <p>Impove the readability of the following code </p>
            <img src={assets.compass_icon} alt="" />
          </div>

        </div>
      </div>

      <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder="Enter a prompt here" />
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
          </div>
          <p>
            Gemini may dispatch inaccurate info, including about people,
            so double-check its responses. Your Privacy and Gemini Apps
          </p>
        </div>
      </div>

    </div>
  )
}

export default main