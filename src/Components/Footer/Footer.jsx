const Footer = () => {
    return (
        <footer className="text-blue-900 px-4 sm:px-6 lg:px-8 py-10 md:py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                {/* Branding */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-yellow-400 w-8 h-8 rounded" /> {/* Logo placeholder */}
                        <span className="text-xl font-semibold">Logo</span>
                    </div>
                    <p className="text-sm leading-relaxed mb-4">
                        SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business...
                    </p>
                    <div className="flex space-x-4 text-blue-800 text-lg">
                        <i className="fab fa-facebook-f hover:text-blue-600 transition" />
                        <i className="fab fa-twitter hover:text-blue-600 transition" />
                        <i className="fab fa-linkedin-in hover:text-blue-600 transition" />
                        <i className="fab fa-instagram hover:text-pink-500 transition" />
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-semibold mb-3 text-lg">Navigation</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="hover:text-blue-700 cursor-pointer">Service</li>
                        <li className="hover:text-blue-700 cursor-pointer">Agency</li>
                        <li className="hover:text-blue-700 cursor-pointer">Case Study</li>
                        <li className="hover:text-blue-700 cursor-pointer">Resource</li>
                        <li className="hover:text-blue-700 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* License */}
                <div>
                    <h4 className="font-semibold mb-3 text-lg">License</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                        <li className="hover:text-blue-700 cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-blue-700 cursor-pointer">Copyright</li>
                        <li className="hover:text-blue-700 cursor-pointer">Email Address</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-3 text-lg">Contact</h4>
                    <ul className="space-y-4 text-sm text-gray-700">
                        <li className="flex items-center gap-3">
                            <i className="fas fa-phone-alt text-blue-600" /> (406) 555-0120
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fas fa-envelope text-blue-600" /> Hey@boostim.com
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-map-marker-alt text-blue-600 mt-1" />
                            <span>
                                2972 Westheimer Rd. Santa Ana,<br /> Illinois 85486
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;