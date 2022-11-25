import React from 'react';

const Blogs = () => {
    return (
        <div className='items-center gap-10 md:py-20'>
            <div className="card w-2/3 mb-8 mx-auto bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">what are the different ways to manage state!</h2>
                    <p className='text-justify'>you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”, and it’s one of the most common things you will do writing React code. The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-2/3 mb-8 mx-auto bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p className='text-justify'>Suppose, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.
                        Prototypal inheritance is a language feature that helps in that.
                        In JavaScript, objects have a special hidden property that is either null or references another object. That object is called “a prototype”:
                        When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.
                        The property is internal and hidden, but there are many ways to set it.</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-2/3 mb-8 mx-auto bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <p className='text-justify'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them. </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
            <div className="card w-2/3 mb-8 mx-auto bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p className='text-justify'>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies
                    AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.
                    Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.
                    </p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;