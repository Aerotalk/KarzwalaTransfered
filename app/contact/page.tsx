import { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Karzwala",
    description: "Get in touch with us for your financial needs.",
};

export default function ContactUsPage() {
    return (
        <div className="min-h-screen bg-white py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="h-[3px] w-12 bg-[#F46300]"></div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1E3B]">
                            Let&apos;s Catch up!
                        </h1>
                    </div>

                    {/* Content Container */}
                    <div className="bg-[#f0f2f5] rounded-[2rem] p-6 sm:p-10 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                            {/* Left Side: Form */}
                            <div>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2">
                                            Full Name <span className="text-[#F46300]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            className="w-full bg-white px-4 py-3.5 rounded-xl border border-transparent focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none shadow-sm transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                                            Phone No. <span className="text-[#F46300]">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full bg-white px-4 py-3.5 rounded-xl border border-transparent focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none shadow-sm transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                                            Email <span className="text-[#F46300]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full bg-white px-4 py-3.5 rounded-xl border border-transparent focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none shadow-sm transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                                            Message <span className="text-[#F46300]">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            className="w-full bg-white px-4 py-3.5 rounded-xl border border-transparent focus:ring-2 focus:ring-[#F46300] focus:border-transparent outline-none shadow-sm transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#F46300] hover:bg-[#d95800] text-white font-bold py-4 rounded-xl transition-colors shadow-md text-lg"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>

                            {/* Right Side: Map & Contact Details */}
                            <div className="flex flex-col h-full">
                                {/* Google Maps Embed */}
                                <div className="w-full h-[300px] sm:h-[350px] bg-gray-200 rounded-3xl overflow-hidden mb-8 shadow-sm border border-gray-100/50 relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.609279148767!2d77.2798539!3d28.6314643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcad2225acab%3A0x6bde1e220a2e0a2e!2sVeer%20Savarkar%20Block%2C%20Guru%20Nanak%20Nagar%2C%20Shakarpur%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location"
                                        className="absolute inset-0"
                                    ></iframe>
                                </div>

                                {/* Contact Information List */}
                                <div className="space-y-6 flex-grow flex flex-col justify-end">
                                    {/* Phone */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#F46300] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Phone className="w-5 h-5 fill-current" />
                                        </div>
                                        <span className="text-gray-800 font-medium text-lg">
                                            9266328731
                                        </span>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#F46300] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-800 font-medium text-lg">
                                            customerservice@loaninneed.in
                                        </span>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#F46300] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-800 font-medium text-base leading-relaxed max-w-sm">
                                            OFFICE NO-202, PLOT, 9, Veer Savarkar Block, Guru Nanak Nagar, Shakarpur, Delhi, 110092
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

