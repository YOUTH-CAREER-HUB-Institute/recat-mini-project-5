import React from 'react'
import { useRouteError, NavLink, useNavigate } from 'react-router-dom';


const ErrorPages = () => {
    const error = useRouteError();
    console.log(error);

    const naviagte = useNavigate();
    const handleGoBack = ()=>{
        naviagte(-1);
    }

    if (error.status === 404) {
        return (
            <section className="min-h-screen flex items-center h-full p-16 dark:text-gray-800 bg-base-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-orange-500">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                        <div className="flex gap-2 justify-center">
                        <NavLink rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</NavLink>
                        <NavLink onClick={handleGoBack} rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded dark:bg-orange-600 dark:text-gray-50">Go Back</NavLink>
                        </div>

                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <h1>404 Error page</h1>
        )
    }

}

export default ErrorPages;
