


const Feedback = ({results, total, positive}) => {
  return <div >
    <ul>
      <li>Good: {results.good}</li>
      <li>Neutral: {results.neutral}</li>
      <li>Bad: {results.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
      
  </ul>
</div>
}
export default Feedback;