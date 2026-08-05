function TopicCard({ topic }) {

  return (

    <div className="fade">

      <p className="ready">
      </p>

      <h2 className="topic-title">

        {topic ? topic.title : "Click Spin to Generate"}

      </h2>

    </div>

  );

}

export default TopicCard;