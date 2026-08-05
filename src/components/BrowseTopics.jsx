function BrowseTopics({ topics }) {
  return (
    <div className="info-card">

      <h2>Topics</h2>

      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            {topic.title}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default BrowseTopics;