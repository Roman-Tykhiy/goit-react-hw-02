


const Feedback = ({results, total}) => {
  return <div >
    <ul>
      <li>Good: {results.good}</li>
      <li>Neutral: {results.neutral}</li>
      <li>Bad: {results.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {Math.round((results.good / total) * 100)}%</li>
      
  </ul>
</div>
}
export default Feedback;