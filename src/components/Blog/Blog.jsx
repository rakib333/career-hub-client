

const Blog = () => {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='bg-yellow-50 p-10 rounded-md'>
                <h1 className='text-2xl font-semibold'>1.When the Context API is used ?</h1>
                <p>The Context API helps share data between components .Context API allows pass data through a component tree without props. This makes it easier to share data between components.To using the Context API in your applications, you will need to follow a few simple steps.Firstly Create a Context Object then  Wrap Components with a Provider finally Consume the Context</p>
            </div>
            <div className='bg-blue-50 rounded-md p-10 mt-10'>
                <h1 className='text-2xl font-semibold'>2.What is the react custom hook ?</h1>
                <p>The React documentation on building your own hooks defines custom hooks in a simple way.Custom Hooks are functions. Usually, they start with the word use.A custom Hook does not need to have a specific signature. We can decide what it takes as arguments, and what, to return.</p>
            </div>
            <div className='bg-red-50 rounded-md p-10 mt-10'>
                <h1 className='text-2xl font-semibold'>3.What is useRef in react ?</h1>
                <p>useRef in react returns a mutable reference object that does not trigger re-rendering of the component when they change and persist throughout their lifetimes. This object has a current property that holds a mutable value.</p>
            </div>
            <div className='bg-purple-50 rounded-md p-10 mt-10'>
                <h1 className='text-2xl font-semibold'>4.What is useMemo in react ?</h1>
                <p>The useMemo Hook in React is a performance optimization tool that allows you to memoize expensive computations and avoid unnecessary re-renders. When you use useMemo, you can calculate the value of a variable or function once and reuse it across multiple renders, rather than recalculating it every time your component re-renders</p>
            </div>
        </div>
    );
};

export default Blog;