import Image from "next/image";

const stats = [
    {
        icon: '/layout.png',
        value: '2000+',
        label: 'Your protection',
    },
    {
        icon: '/dot.png',
        value: '7001+',
        label: 'Provide tailored',
    },
]

const Banner = () => {
    return (
        <div className="py-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Column */}
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Your AI-<br />Powered<br />Sales Coach
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Image
                            src="/ai-bot.jpg"
                            alt="AI Bot"
                            width={192}
                            height={192}
                            className="rounded-xl shadow-lg"
                        />
                        <p className="text-gray-600 max-w-sm text-center sm:text-left">
                            Get real-time coaching, script suggestions, and deal-closing strategies powered by advanced AI technology.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-6 pt-6">
                        {stats.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center p-4 space-x-4 flex-1 min-w-[140px]"
                            >
                                <div className="bg-white shadow-lg p-3 rounded-2xl">
                                    <Image src={item.icon} alt={item.label} width={32} height={32} />
                                </div>
                                <div>
                                    <p className="text-xl font-semibold text-gray-900">{item.value}</p>
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* AI Robot Image */}
                        <Image
                            src="/image_1.png"
                            alt="AI Robot"
                            width={450}
                            height={500}
                            className="rounded-3xl mx-auto"
                        />

                        {/* Text Card */}
                        <div className="mt-6 lg:mt-0">
                            <div className="bg-white rounded-3xl shadow-lg p-8  w-72 sm:w-96 
                      mx-auto lg:absolute lg:bottom-3 lg:left-8 lg:-translate-x-1/2">
                                <div className="flex justify-between text-blue-900 font-semibold text-5xl mb-4">
                                    <span>721+</span>
                                    <span>1000+</span>
                                </div>
                                <p className="font-semibold text-gray-800 text-lg text-center lg:text-left">
                                    Growth is our priority.
                                </p>
                                <p className="text-sm text-gray-600 mt-2 text-center lg:text-left">
                                    As a full-service business agency, we specialize in helping companies of all sizes optimize their operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;