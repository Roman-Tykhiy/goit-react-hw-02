import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import { use } from "react";
import Notification from "./components/Notification/Notification";

const App = () => {
  const Results = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [NewResults, setNewResults] = useState(() => {
    const saveFeedback = JSON.parse(localStorage.getItem(`feedback`)) 
    
    if (saveFeedback !== null) {
      return saveFeedback;
    }
    return Results;
  });
  const updateFeedback = feedbackType => {
    setNewResults((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }))
  };
const totalFeedback = NewResults.good + NewResults.neutral + NewResults.bad;
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    if (totalFeedback === 0) {
      setIsOpen(true)
      return
    };
    setIsOpen(false)
  }, [totalFeedback]);
 
  

  const reset = () => {
    setNewResults(Results);
  }
  
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(NewResults))
  }, [NewResults]);
  
  return (
<>
      <Description/>
      <Options updateFeedback={updateFeedback} reset={reset} total={totalFeedback}/>
      {!isOpen&&<Feedback results={NewResults} total={totalFeedback} />}
      {isOpen&&<Notification/>}
    </>
    
  )
  
};

export default App;