import ReactMarkdown from "react-markdown";
import { useState, useRef } from "react";
import { sendPrompt } from "../../config/gemini";
import { assets } from "../../assets/assets";
import './Main.css'

const Main = () => {

  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const typingRef = useRef(null); // ✅ FIXED

  // ✅ Typing animation (SAFE)
  const typeText = (text) => {
    clearInterval(typingRef.current);

    let i = 0;
    setResponse("");

    typingRef.current = setInterval(() => {
      if (!text) return;

      setResponse((prev) => prev + text.charAt(i));
      i++;

      if (i >= text.length) {
        clearInterval(typingRef.current);
      }
    }, 15);
  };

  // ✅ FINAL HANDLE SEND (FULL SAFE)
  const handleSend = async () => {
    if (!input.trim() || loading) return;

    try {
      setLoading(true);

      const res = await sendPrompt(input);

      if (!res) {
        setResponse("No response received");
        return;
      }

      typeText(res);

    } catch (error) {
      console.log(error);
      setResponse("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className='main h-screen'>

      {/* NAV */}
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">

        {/* GREET */}
        <div className="greet">
          <p><span>Hello, Nihal</span></p>
          <p>How can I help you today</p>
        </div>

        {/* RESULT */}
        {loading ? (
          <div className="result">
            <p>Thinking...</p>
          </div>
        ) : response ? (
          <div className="result">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        ) : null}

        {/* CARDS */}
        {!response && !loading && (
          <div className="cards">

            <div className="card">
              <p>Suggest beautiful places for a road trip</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
              <p>Briefly summarize: Urban planning</p>
              <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
              <p>Brainstorm team bonding activities</p>
              <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
              <p>Improve readability of code</p>
              <img src={assets.compass_icon} alt="" />
            </div>

          </div>
        )}

      </div>

      {/* BOTTOM */}
      <div className="main-bottom">

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter a prompt here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />

          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img
              src={assets.send_icon}
              alt=""
              onClick={!loading ? handleSend : null}
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