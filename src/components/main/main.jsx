import { useState } from "react";
import { sendPrompt } from "../../config/gemini";
import { assets } from "../../assets/assets";
import './Main.css'

const Main = () => {

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
  if (!input) return;

  setLoading(true);
  const res = await sendPrompt(input);
  setResponse(res);
  setLoading(false);
};

  return (
    <div className='main h-screen'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Chikki.</span></p>
          <p>How can i help you today</p>
        </div>

        <div className="result">
          {loading ? <p>Thinking...</p> : <p>{response}</p>}
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
          <input
            type="text"
            placeholder="Enter a prompt here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img
              src={assets.send_icon}
              alt=""
              onClick={handleSend}
            />
          </div>
        </div>

        <p className="bottom-info">
          Gemini may display inaccurate info, so double-check responses.
        </p>

      </div>

    </div>
  )
}

export default Main;