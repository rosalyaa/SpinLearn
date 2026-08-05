import {
  FiBook,
  FiCode,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

function ExplanationCard({ topic }) {

  if (!topic) return null;

  return (

    <div className="info-card fade">

      <div className="section">

        <h2>
          <FiBook />
          Explanation
        </h2>

        <p>{topic.explanation}</p>

      </div>

      <div className="section">

        <h2>
          <FiCode />
          Example
        </h2>

        <p>{topic.example}</p>

      </div>

      <div className="section">

        <h2>
          <FiCheckCircle />
          advantages
        </h2>

        <ul>
          {topic.advantages.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

      <div className="section">

        <h2>
          <FiAlertCircle />
          limitations
        </h2>

        <ul>
          {topic.limitations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>

    </div>

  );
}

export default ExplanationCard;