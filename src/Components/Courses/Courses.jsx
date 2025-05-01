import Image from 'next/image';

const Courses = () => {
    const courses = [
        {
            title: "Web Design Fundamentals",
            duration: "4 Weeks",
            level: "Beginner",
            author: "By John Smith",
            description:
                "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            imageUrl: "/image_2.png",
        },
        {
            title: "Web Design Fundamentals",
            duration: "4 Weeks",
            level: "Beginner",
            author: "By John Smith",
            description:
                "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            imageUrl: "/image_3.png",
        },
    ];

    return (
        <div className="px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Courses</h2>
                        <p className="text-gray-600 max-w-4xl text-xs">
                            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit
                            dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                        </p>
                    </div>
                    <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-all text-sm">
                        View All
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-[#f0f0f0f7] rounded-xl shadow p-4">
                            <div className="rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={course.imageUrl}
                                    alt={course.title}
                                    width={500}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="flex gap-2 text-sm mb-2">
                                <span className="bg-white px-3 py-1 rounded-md text-gray-700">{course.duration}</span>
                                <span className="bg-white px-3 py-1 rounded-md text-gray-700">{course.level}</span>
                                <span className="ml-auto text-gray-700 font-medium">{course.author}</span>
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">{course.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">{course.description}</p>
                            <button className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition-all">
                                Get it Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;