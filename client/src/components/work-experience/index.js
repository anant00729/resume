import React from "react";
import {
  ExpWrapper,
  ExpLabel,
  ExpDuration,
  TaskTitle,
  TaskItem,
  TaskWrapper,
  TaskLabel,
  TaskBullet,
  WorkExpLabel,
  WorkExpLabelUnderline,
  ExpTitleAndDurationWrapper,
  ProjectLink,
} from "./styles";

function WorkExperience({ work_experience }) {
  return (
    <>
      <WorkExpLabel>
        <WorkExpLabelUnderline>PROJECT WORK</WorkExpLabelUnderline>
      </WorkExpLabel>
      {work_experience.map(
        ({ title = "", duration = "", project_link = "", tasks = [] }, i) => (
          <ExpWrapper key={i}>
            <ExpTitleAndDurationWrapper>
              <ExpLabel>{title}</ExpLabel>
              <ExpDuration>{duration}</ExpDuration>
            </ExpTitleAndDurationWrapper>
            <ProjectLink>{project_link}</ProjectLink>
            <TaskTitle>Description/Tasks</TaskTitle>
            <TaskWrapper>
              {tasks.map((task = "", index) => (
                <TaskItem key={index} isFirst={!index}>
                  <TaskBullet>•</TaskBullet>
                  <TaskLabel>{task}</TaskLabel>
                </TaskItem>
              ))}
            </TaskWrapper>
          </ExpWrapper>
        )
      )}
    </>
  );
}

export default WorkExperience;
