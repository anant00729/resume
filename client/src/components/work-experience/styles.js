import styled from "styled-components";

export const ExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

export const ExpLabel = styled.label`
  font-weight: 600;
  font-size: 24px;
`;

export const ExpDuration = styled.label`
  margin-top: 2px;
  color: #666666;
  font-weight: 600;
`;

export const TaskTitle = styled.label`
  margin-top: 10px;
  color: #f79c48;
  font-weight: 600;
  font-size: 20px;
`;

export const TaskItem = styled.li`
  margin-left: 8px;
  display: flex;
  align-items: center;
  margin-top: ${(p) => (p.isFirst ? "unset" : "8px")};
`;

export const TaskBullet = styled.label`
  font-size: 30px;
  color: #f79c48;
`;

export const TaskWrapper = styled.ul`
  list-style: none;
  padding: 8px 0 0 0;
  margin: 0;
`;

export const TaskLabel = styled.label`
  margin-left: 8px;
  line-height: 21px;
`;

export const WorkExpLabel = styled.label`
  color: #f79c48;
  font-weight: 700;
  font-size: 28px;
`;

export const WorkExpLabelUnderline = styled.u`
  text-decoration: none;
  border-bottom: 3px solid #f79c48;
  border-radius: 4px;
`;

export const ExpTitleAndDurationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const ProjectLink = styled.label`
  margin-top: 2px;
  color: #666666;
  font-weight: 600;
`;
