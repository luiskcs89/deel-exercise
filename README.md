# Deel Exercise

In the project directory, you can run:

### `npm start`

It will runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Questions

1. What is the difference between Component and PureComponent? give an example where it might break my app.

A Component will rerender eveytime its Parent Component rerenders, but the Pure Component only rerenders if its props have changed. It could break the app if a prop is passed that doesn't fullfill the equality check and thus rerendering everytime.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

I think it is because ShouldComponentUpdate might block the propagation of the changes made in the context. If ShouldComponentUpdate determines the props are not different it will cause this problem.

3. Describe 3 ways to pass information from a component to its PARENT.

First you can add a prop on the Child that is a function in the parent that receives the information and does something with it, like setting it in the state. Second you can add a Context which encompaces the Parent and the Child and then set the information in the child using that context. Finally I would use a state management system like Redux and the child can dispatch an action that changes the information and the parent can be subscribed to that store and receive the changes.

4. Give 2 ways to prevent components from re-rendering.

Using React.memo() and using PureComponent

5. What is a fragment and why do we need it? Give an example where it might break my app.

We need it so a component can return multiple elements. I think they could cause issues with styling if used incorrectly.

6. Give 3 examples of the HOC pattern.

I have used HOC for example: withStyles, to define a theme that will be used for various components; withTranslation, to define translation data for multilanguage components, such as the translations files it should use; withWidth, to allow the components to receive data on the screen width and react accordingly, and multiple others.

7. what's the difference in handling exceptions in promises, callbacks and async...await.

With a promise, you get a rejection that you can catch. With async / await you will have to use a try catch around the call. But in the end they are very similar.

8. How many arguments does setState take and why is it async.

2 arguments: the state change, and a callback. It is async for performance and for the rerendering.

9. List the steps needed to migrate a Class to Function Component.

You have to remove the class and convert to a function. Convert all the class methods to functions and remove the uses of `this`. Remove the constructor, change the uses of setState to useState and useEffect hooks and also change all the life cycle methods to useEffect. Change the render method to a return. 

10. List a few ways styles can be used with components.

You can use inline styles using the style prop. You can use normal CSS, with a separate CSS file that is imported into the Component and use the className prop to set the class. You can use CSS in js, this is the way some libraries like Material UI work and defien a styles variable that contains the classes and styles then is also used in the className prop.

11. How to render an HTML string coming from the server.

You'll have to set it in a tag by using the dangerouslySetInnerHTML prop.
