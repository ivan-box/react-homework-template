import PropTypes from 'prop-types';

const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              style={{ backgroundColor: randomColor() }}
              className="item"
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;

function randomColor() {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
}

// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />
