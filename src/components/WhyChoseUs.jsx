'use client'
import React, { useState } from 'react'
import { 
    Users, 
    Award, 
    HeartPulse, 
    Calendar,
} from 'lucide-react';

function WhyChooseUs() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: Users,
            title: "Expert Team",
            description: "Our board-certified specialists bring decades of combined experience in ENT care, ensuring you receive the highest quality treatment.",
            color: "from-[#8B489A] to-[#795F9F]"
        },
        {
            icon: Award,
            title: "Advanced Technology",
            description: "We invest in state-of-the-art diagnostic and treatment equipment to provide precise and effective care for all ENT conditions.",
            color: "from-[#795F9F] to-[#8B489A]"
        },
        {
            icon: HeartPulse,
            title: "Comprehensive Care",
            description: "From routine check-ups to complex surgeries, we offer a complete range of ENT services under one roof for your convenience.",
            color: "from-[#795F9F] to-[#8B489A]"
        },
        {
            icon: Calendar,
            title: "Easy Access",
            description: "With minimal wait times and convenient scheduling, we ensure you get the care you need when you need it most.",
            color: "from-[#795F9F] to-[#8B489A]"
        }
    ];

    return (
        <div className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br  opacity-50" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Radiant ENT?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#795F9F] to-[#8B489A] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                                    activeFeature === index
                                        ? 'bg-white shadow-lg scale-105'
                                        : 'hover:bg-white/50'
                                }`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.color}`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-10 blur-3xl transition-all duration-500`} />
                        <img
                            src="/spec-2.svg"
                            alt="Feature illustration"
                            className="rounded-xl shadow-xl relative z-10 transform transition-all duration-500 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
