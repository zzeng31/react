import React, { useEffect, useState, useCallback } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import { API } from "./API";
import { useFetchTask } from "./hooks/useFetchTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTasks = useCallback((tasksObj) => {
    console.log(tasksObj);
    const loadedTasks = [];
    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }
    console.log(loadedTasks);
    setTasks(loadedTasks);
  }, []);

  const { error, isLoading, sendRequest: fetchTasks } = useFetchTask();
  const setTasksHandler = (task) => {
    setTasks((prevTask) => [...prevTask, task]);
  };
  useEffect(() => {
    fetchTasks({ url: API }, transformTasks);
  }, []);
  return (
    <React.Fragment>
      <NewTask
        transformTasks={transformTasks}
        setTasksHandler={setTasksHandler}
      />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
