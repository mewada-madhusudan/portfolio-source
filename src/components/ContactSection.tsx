import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from "lucide-react";
import { profileData } from "../lib/profileData";

const ContactSection = () => {
    const { personal_info, education, experience_summary } = profileData;

    return (
        <section id="contact" className="py-20 px-4 bg-gray-800">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-gray-300">
                        Ready to collaborate on your next AI/ML project
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                                    >
                                        <Mail className="w-5 h-5 text-blue-400" />
                                        <div>
                                            <p className="font-medium text-white">Email</p>
                                            <a
                                                href={`mailto:${personal_info.email}`}
                                                className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                            >
                                                {personal_info.email}
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                                    >
                                        <Phone className="w-5 h-5 text-green-400" />
                                        <div>
                                            <p className="font-medium text-white">Phone</p>
                                            <a
                                                href={`tel:${personal_info.phone}`}
                                                className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                                            >
                                                {personal_info.phone}
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50"
                                    >
                                        <MapPin className="w-5 h-5 text-red-400" />
                                        <div>
                                            <p className="font-medium text-white">Location</p>
                                            <p className="text-sm text-gray-400">{personal_info.location}</p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="flex gap-3">
                                    <Button asChild size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                                        <a href={`https://${personal_info.linkedin}`} target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="w-4 h-4 mr-2" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
                                        <a href={personal_info.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            GitHub
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Education & Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Education */}
                        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2 text-white">
                                    <GraduationCap className="w-5 h-5" />
                                    Education
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/50"
                                    >
                                        <h4 className="font-semibold text-sm text-white">{edu.degree}</h4>
                                        <p className="text-sm text-gray-400">{edu.institution}</p>
                                        <p className="text-xs text-gray-500">{edu.duration}</p>
                                    </motion.div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Experience Summary */}
                        <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl text-white">Experience Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="font-semibold text-sm mb-2 text-white">Industries:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {experience_summary.industries_worked.map((industry, index) => (
                                            <Badge key={index} variant="outline" className="text-xs bg-blue-900/30 text-blue-300 border-blue-400/50">
                                                {industry}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm mb-2 text-white">Key Domains:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {experience_summary.key_domains.map((domain, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs bg-purple-900/30 text-purple-300 border-purple-400/50">
                                                {domain}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-gray-700">
                                    <p className="text-sm text-gray-300">
                                        <span className="font-semibold text-white">{experience_summary.total_years}</span> of professional experience
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {experience_summary.leadership_experience}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 shadow-2xl shadow-blue-500/20">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                            <p className="mb-6 opacity-90">
                                Let's discuss how AI and Machine Learning can transform your business
                            </p>
                            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                                <a href={`mailto:${personal_info.email}?subject=Let's Collaborate&body=Hi Madhusudan, I'd like to discuss a potential collaboration opportunity.`}>
                                    Get In Touch
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;