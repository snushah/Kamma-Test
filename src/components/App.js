import React from "react";
import ReactDOM from "react-dom";

import { DragDropContext } from "react-beautiful-dnd";
import initialData from "./initial-data";
import Column from "./Column";
import logosvg from "./images/logo.svg";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  background: #eee;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Logo = styled.img`
  background: transparent;
  width: 160px;
  margin-bottom: 30px;
  border: 1px solid red;
  align-self: flex-end;
  align-items: center;
  color: #34485c;
  margin-top: 0px;
`;

class App extends React.Component {
  state = initialData;

  onDragEnd = (result) => {
    // TODO: reorder our column
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          <Logo src={logosvg} />
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => this.state.tasks[taskId]
            );

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default App;
