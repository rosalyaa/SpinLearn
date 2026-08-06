function ExplanationCard({ topic }) {

  console.log("Topic received:", topic);   // <-- Add this line

  if (!topic) return null;

  return (
    <div className="info-card">

      <div className="section">
        <h2>Explanation</h2>
        <p>{topic.explanation}</p>
      </div>

      {topic.example && (
        <div className="section">
          <h2>Example</h2>
          <p>{topic.example}</p>
        </div>
      )}

      {topic.advantages && (
        <div className="section">
          <h2>Advantages</h2>
          <ul>
            {topic.advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {topic.limitations && (
        <div className="section">
          <h2>Limitations</h2>
          <ul>
            {topic.limitations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default ExplanationCard;