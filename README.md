# Algo | Data Structures & Algorithms Visualizer

- React / Redux
- D3.js
- TypeScript
- Inspired from VisuAlgo

## Design Approach

Complex applications need a lot of design and descision making ahead of jumping and start \
writing any code. I realized this as working on this project; working on the sorting module \
got really complicated when I started binding Generator functions with Redux.

### **How I decided to approach the complexity problem ?**

In this README file you will find the decisions I made for the approach \
of solving the complexitiy problem of building this application.

### Let's Define The Complex Parts of The Project!

When we are looking to visualize code execution, its state and \
step through it **forward / backward** there is a possibility \
to implement that using 3 different methods.

#### First : Play / Pause Code Execution

- Redesign each Data Structure & Algorithm we wish to visualize in a way that each code block \
  is a function then we execute each function as a step.

  - Bad Idea because we will increase complexity

- Utilize the Browser debugger
  - Bad Idea because we will have to implement it for every browser we wish \
    the application to work on.
- Make use of Generator functions & methods
  - Best available solution because we can pause code execution and yield result at \
    each code block we want to represent on the UI

For playing until finishing we can make use of the done property on the returned value. \
So far we have an approach on how to step forward & pause code execution.

#### Second : Step Forward / Backward through code

This one is rather obvious we can store history object to step backwards and a pointer \
state that keeps track if we are at the latest state or not, so the application decides whether \
to call next() on the generator or just show the next state stored in Redux.

- Note

We can utilize the solution of storing state history in Redux with the Generator functions \
solution to auto generate steps However this solution seems only viable in sorting \
algorithms, Because we will have to work with real time input / output with other \
Data Structures.

#### Third : Working with Different Modules

This application needs to be designed in order to work with different types of Data Structures \
& Algorithms. In order to do so we can't rely on one state structure. We can eaither

- Use a Flux like appraoach to manage multiple stores
  - This will complicate the application more
- Dispatch an action that changes the state to match the state desired for each module.
  - We will need to design a top level reducer that dispatch action from **App.tsx**

#### Fourth : Visualizing State

**WILL ADD SOLUTION SOON USING D3**

## Codebase Structure

src\
&nbsp; | --- store \
&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; | --- functions\
&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; | --- reducers\
&nbsp; | --- components \
&nbsp; | --- modules \
&nbsp; | --- actions
