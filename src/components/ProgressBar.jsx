function ProgressBar({ completed, total }) {

  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (

    <div className="progress-card">

      <h3>Learning Progress</h3>

      <div className="progress-track">

        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

      <p>

        {completed} / {total} Topics Completed

      </p>

    </div>

  );

}

export default ProgressBar;