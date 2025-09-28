import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profileData } from "../lib/profileData";

const HeroSection = () => {
    const { personal_info } = profileData;

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                        className="flex justify-center"
                    >
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-500/20">
                            <img
                                src={profileData.portfolio_metadata.profile_image}
                                alt={personal_info.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Name and Title */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            {personal_info.name}
                        </h1>
                        <div className="space-y-2">
                            <Badge variant="secondary" className="text-lg px-4 py-2 bg-gray-800 text-blue-300 border-blue-400">
                                {personal_info.current_position}
                            </Badge>
                            <p className="text-xl text-gray-300">
                                .. {personal_info.current_company}
                            </p>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-2 text-gray-400"
                    >
                        <MapPin className="w-5 h-5" />
                        <span>{personal_info.location}</span>
                    </motion.div>

                    {/* Summary */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-lg max-w-4xl mx-auto leading-relaxed text-gray-300"
                    >
                        {profileData.summary}
                    </motion.p>

                    {/* Contact Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button asChild className="gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                            <a href={`mailto:${personal_info.email}`}>
                                <Mail className="w-4 h-4" />
                                Email
                            </a>
                        </Button>
                        <Button variant="outline" asChild className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                            <a href={`https://${personal_info.linkedin}`} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button variant="outline" asChild className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                            <a href={personal_info.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </Button>
                        <Button variant="outline" asChild className="gap-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                            <a href={`tel:${personal_info.phone}`}>
                                <Phone className="w-4 h-4" />
                                Call
                            </a>
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
                        >
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;