import ChatBox from '../ChatBox/ChatBox';
import {
    ArrowPathIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
    ClipboardDocumentIcon,
    SpeakerWaveIcon,
} from '@heroicons/react/24/outline';
import { MdDescription } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { BsCheckCircle, BsGraphUp } from 'react-icons/bs';


const Coach = () => {
    const icons = [
        { icon: ArrowPathIcon, label: 'Refresh' },
        { icon: HandThumbUpIcon, label: 'Thumbs Up' },
        { icon: HandThumbDownIcon, label: 'Thumbs Down' },
        { icon: ClipboardDocumentIcon, label: 'Copy' },
        { icon: SpeakerWaveIcon, label: 'Sound' },
    ]

    return (
        <div className='bg-gradient-to-r from-[#0f172a] to-[#1d4ed8] text-white p-8 md:p-16 lg:px-20'>
            <h4 className="text-[#FCE38A] text-xl">Live AI Coach</h4>
            <h2 className="text-4xl mb-6 font-semibold">Take a Suggestion Coaching</h2>
            <div className="flex flex-col items-center lg:flex-row gap-8">
                {/* Left Column */}
                <div className="lg:w-2/3 w-full">
                    <ChatBox />
                </div>

                {/* Sidebar */}
                <div className="bg-gray-100 rounded-full py-6 px-2 flex flex-col items-center gap-6 shadow-lg w-14">
                    {icons.map(({ icon: Icon, label }, idx) => (
                        <button
                            key={idx}
                            className="text-gray-700 hover:text-blue-600"
                            title={label}
                        >
                            <Icon className="h-6 w-6" />
                        </button>
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6 w-full lg:w-80">
                    {/* Real-time Analysis Card */}
                    <div className="bg-gray-100 text-gray-800 p-8 rounded-xl w-fit shadow-md">
                        <h3 className="font-semibold text-lg mb-4">Real-time Analysis</h3>
                        <div className="bg-white p-3 rounded-lg mb-3">
                            <div className="flex items-center gap-2 text-sm font-medium text-green-600 mb-1">
                                <BsCheckCircle className="text-green-600" />
                                Confidence Level
                            </div>
                            <div className="w-full bg-gray-200 h-2 rounded-full">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }} />
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                            <div className="flex items-center gap-2 text-sm font-medium text-gray-800 mb-1">
                                <BsGraphUp className="text-blue-600" />
                                Confidence Level
                            </div>
                            <p className="text-xs text-gray-500">85% improvement in objection handling</p>
                        </div>
                    </div>

                    {/* Quick Actions Card */}
                    <div className="bg-gray-100 text-gray-800 p-4 rounded-xl w-fit shadow-md">
                        <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex flex-col items-start bg-white px-4 py-3 rounded-md hover:shadow transition">
                                <MdDescription className="text-blue-900 text-xl mb-1" />
                                <span className="text-sm font-medium text-gray-700">Generate Script</span>
                            </button>
                            <button className="flex flex-col items-start bg-white px-4 py-3 rounded-md hover:shadow transition">
                                <BiSolidMessageRounded className="text-blue-900 text-xl mb-1" />
                                <span className="text-sm font-medium text-gray-700">Practice Pitch</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coach;