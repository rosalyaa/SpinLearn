import "./App.css";
import { useState } from "react";
import topics from "./data/topics";
import Header from "./components/Header";
import TopicCard from "./components/TopicCard";
import ExplanationCard from "./components/ExplanationCard";
import BrowseTopics from "./components/BrowseTopics";
import CategoryDropdown from "./components/CategoryDropdown";
import {
  FiShuffle,
  FiBookOpen,
} from "react-icons/fi";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";

function App() {
  const categories = Object.keys(topics);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [activeTab, setActiveTab] = useState("random");
  const [completedTopics, setCompletedTopics] = useState([]);
  const totalTopics = Object.values(topics)
  .flat()
  .length;
  function spinTopic() {

  const topicList = topics[selectedCategory];

  if (topicList.length === 0) {
    alert("No topics available.");
    return;
  }

  setShowExplanation(false);
  setIsSpinning(true);

  let count = 0;

  const interval = setInterval(() => {

    const random =
      topicList[Math.floor(Math.random() * topicList.length)];

    setCurrentTopic(random);

    count++;

    if (count >= 20) {

      clearInterval(interval);

      const finalTopic =
        topicList[Math.floor(Math.random() * topicList.length)];

      setCurrentTopic(finalTopic);

      setIsSpinning(false);

    }

  }, 100);

}
  return (
    <div className="app">

      <Header />
      <ProgressBar

completed={completedTopics.length}

total={totalTopics}

/>
      <div className="glass-card">

        <div className="tabs">

  <button
    className={activeTab === "random" ? "active" : ""}
    onClick={() => setActiveTab("random")}
  >
    Random Topic
  </button>

  <button
    className={activeTab === "browse" ? "active" : ""}
    onClick={() => setActiveTab("browse")}
  >
    Browse Topics
  </button>

</div>

        <p className="description">
          Select a category and generate a random topic.
        </p>
      
        <CategoryDropdown
  categories={categories}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
/>

      </div>

      {activeTab === "random" ? (
  <>
    <TopicCard topic={currentTopic} />
    <Timer />
  </>
) : (
  <BrowseTopics topics={topics[selectedCategory]} />
)}

      {activeTab === "random" && (
<div className="buttons">

        <button
  className="spin"
  onClick={spinTopic}
  disabled={isSpinning}
>
          <>
  <FiShuffle />
  <span>
  {isSpinning ? "Spinning..." : "Spin Topic"}
</span>
</>
        </button>

        <button
          className="explain"
          onClick={() => {
            if (currentTopic) {
              setShowExplanation(true);
            }
          }}
        >
          <>
  <FiBookOpen />
  <span>Explain</span>
</>
        </button>
        <button

className="complete"

disabled={
  !currentTopic ||
  completedTopics.includes(currentTopic.title)
}

onClick={() => {

  if (
    currentTopic &&
    !completedTopics.includes(currentTopic.title)
  ) {

    setCompletedTopics([
      ...completedTopics,
      currentTopic.title,
    ]);

  }

}}

>

{completedTopics.includes(currentTopic?.title)

? "Completed ✓"

: "Mark Learned"}

</button>

      </div>
)}

      {showExplanation && (
        <ExplanationCard topic={currentTopic} />
      )}

    </div>
  );
}

export default App;