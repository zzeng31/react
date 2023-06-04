import { useState, useEffect, useCallback } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import { API } from "../../API";
import { useFetchTask } from "../../hooks/useFetchTask";
const NewTask = ({ transformTasks, setTasksHandler }) => {
  const { isLoading, error, sendRequest } = useFetchTask();
  const addTasks = useCallback((taskText, taskName) => {
    console.log(taskText, taskName);
    setTasksHandler({
      id: taskName.name,
      text: taskText,
    });
  });
  const enterTaskHandler = useCallback((enteredValue) => {
    sendRequest(
      {
        url: API,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          text: enteredValue,
        },
      },
      addTasks.bind(null, enteredValue)
    );
    // ).then(() => {
    //   sendRequest({ url: API }, transformTasks);
    // });
  }, []);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
