import React from "react";
import data1 from "../../data/Blogs"; 

const tagStyles = {
    "Credit Cards": "bg-red-100 text-red-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md ",  
    "Finance Tips": "bg-green-200 text-green-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md",  
    "Credit Score": "bg-purple-200 text-purple-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md",
    "Loans": "bg-green-200 text-green-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md",
    "default": "bg-purple-200 text-purple-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-md",
};

const RecentBlogs = () => {
    const blogs = data1.blogs;

    return (
        <div className="bg-gray-50 py-10 px-8 mt-4 ">
            <h2 className="text-xl text-bold  text-black mb-8">
                Our recent blogs
            </h2>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
                
                <div className="flex flex-col  space-y-8">
                    {blogs.slice(0, 2).map((blog, index) => (
                        <div key={index} className="flex items-start">
                            <div className="w-1/3">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-32 shadow-md object-cover w-96"
                                />
                            </div>
                            <div className="ml-6 flex-1">
                                <p className="text-sm text-purple-600">{blog.date}</p>
                                <h3 className="text-lg font-semibold text-gray-800 mt-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 text-sm  mt-2">{blog.description}</p>
                                <div className="flex flex-wrap mt-4">
                                    {blog.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className={tagStyles[tag] || tagStyles.default}  
                                        >
                                            {tag}

                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col">
                    <div>
                        <img
                            src={blogs[2].image}
                            alt={blogs[2].title}
                            className=" shadow-md object-cover h-44 w-full"
                        />
                    </div>
                    <div className="mt-6">
                        <p className="text-sm text-purple-700">{blogs[2].date}</p>
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">
                            {blogs[2].title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2">{blogs[2].description}</p>
                        <div className="flex flex-wrap mt-4">
                            {blogs[2].tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={tagStyles[tag] || tagStyles.default}  
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogs;
