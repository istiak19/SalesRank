const FaqSection = () => {
    return (
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-6xl mx-auto">
            <p className="text-xs sm:text-sm text-[#001C4A] font-medium mb-3 text-center sm:text-left">
                Frequently <br className="hidden sm:block" /> asked questions
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 mb-10 md:mb-12 leading-tight text-center">
                Constant collaboration is how we <br className="hidden md:block" />
                roll. Let’s see if we are a good fit.
            </h2>
            <div className="space-y-4">
                {/* Accordion Item 1 */}
                <div className="collapse collapse-plus border-b border-gray-300 bg-transparent rounded-none">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title px-0 flex items-start gap-3 sm:gap-4">
                        <span className="text-[#b19a61] font-medium min-w-[1.5rem] sm:min-w-[2rem] text-base sm:text-lg">
                            01
                        </span>
                        <div>
                            <div className="text-base sm:text-lg font-semibold text-gray-900">
                                Why should I choose Humestic?
                            </div>
                        </div>
                    </div>
                    <div className="collapse-content px-2 sm:px-6 md:px-10 text-sm text-gray-500 leading-relaxed">
                        Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media,
                        or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales,
                        are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back.
                    </div>
                </div>

                {/* Accordion Item 2 */}
                <div className="collapse collapse-plus border-b border-gray-300 bg-transparent rounded-none">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title px-0 flex items-start gap-3 sm:gap-4">
                        <span className="text-[#b19a61] font-medium min-w-[1.5rem] sm:min-w-[2rem] text-base sm:text-lg">
                            02
                        </span>
                        <div className="text-base sm:text-lg font-semibold text-gray-900">
                            I like your works, how do we start a project?
                        </div>
                    </div>
                    <div className="collapse-content px-2 sm:px-6 md:px-10 text-sm text-gray-500 leading-relaxed">
                        Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                    </div>
                </div>

                {/* Accordion Item 3 */}
                <div className="collapse collapse-plus border-b border-gray-300 bg-transparent rounded-none">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title px-0 flex items-start gap-3 sm:gap-4">
                        <span className="text-[#b19a61] font-medium min-w-[1.5rem] sm:min-w-[2rem] text-base sm:text-lg">
                            03
                        </span>
                        <div className="text-base sm:text-lg font-semibold text-gray-900">
                            What info is required to get a quotation?
                        </div>
                    </div>
                    <div className="collapse-content px-2 sm:px-6 md:px-10 text-sm text-gray-500 leading-relaxed">
                        Go to "My Account" settings and select "Edit Profile" to make changes.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;