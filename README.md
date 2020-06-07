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

- Utilize Browser debugger

  - Bad Idea because we will have to implement it for every browser we wish \
    the application to work on.

- Make use of Generator functions & methods

  - Good solution because we can pause code execution and yield result at \
    each code block we want to represent on the UI

  - Trade-off will be dealing state management complexity

- Generate future states ahead of time on action ( Action creator function invocation )

  - Gives us the ability to play / pause while avoiding managing and working \
    with complex / unnecessary design overhead.

  - Trade-off is using higher computational power before rendering results to user \
    this might slow the UI response time by few milliseconds depending on the Big-O \
    of each algorithm / data structure method.

#### Second : Step Forward / Backward through code

This one is rather obvious we can store history object to step backwards and a pointer \
state that keeps track if we are at the latest state or not, so the application decides whether \
to call next() on the generator or just show the next state stored in Redux.

- Note

Solution number 4 already solved this problem because we store state ahead of time

#### Third : Working with Different Modules

This application needs to be designed in order to work with different types of Data Structures \
& Algorithms. In order to do so we can't rely on one state structure. We can eaither

- Use a Flux like approach to manage multiple stores
  - This will complicate the application more
- Dispatch an action that changes the state to match the state desired for each module.
  - We will need to design a top level reducer that dispatch action from **App.tsx**

#### Fourth : Visualizing State

- If we consider the 3rd and 4th solution stated above we can consider generating \
  the necessary properties for D3 svgs from the state generator functions.
- Each D3 shape can be controlled by a React Component.

## Codebase Structure

src\
&nbsp; | --- store \
&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; | --- functions\
&nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; | --- reducers\
&nbsp; | --- components \
&nbsp; | --- modules \
&nbsp; | --- actions

- functions directory is where the logic of algorithms & data structure reside.

- modules directory is where JSX components that act as Module Container.

- actions is action creators directory and I like to think about it as the \
  connecting part between the UI and the application logic.
