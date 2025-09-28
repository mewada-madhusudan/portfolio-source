import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { profileData } from "../lib/profileData";

const AboutSection = () => {
    const { professional_skills, technical_highlights } = profileData;

    const skillCategories = [
        { title: "Languages", skills: professional_skills.languages, color: "bg-blue-900/50 text-blue-300 border-blue-400" },
        { title: "ML Frameworks", skills: professional_skills.ml_frameworks, color: "bg-green-900/50 text-green-300 border-green-400" },
        { title: "Data Processing", skills: professional_skills.data_processing, color: "bg-purple-900/50 text-purple-300 border-purple-400" },
        { title: "Cloud Services", skills: professional_skills.cloud_services, color: "bg-orange-900/50 text-orange-300 border-orange-400" },
        { title: "Tools", skills: professional_skills.tools, color: "bg-red-900/50 text-red-300 border-red-400" },
        { title: "Industries", skills: professional_skills.industries, color: "bg-indigo-900/50 text-indigo-300 border-indigo-400" },
    ];

    return (
        <section id="about" className="py-20 px-4 bg-gray-900 text-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Passionate about leveraging AI and Machine Learning to solve complex business problems
                    </p>
                </motion.div>

                {/* Technical Highlights */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center text-white">Technical Highlights</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                {technical_highlights.map((highlight, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                                        <p className="text-gray-300">{highlight}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                                viewport={{ once: true }}
                                            >
                                                <Badge
                                                    variant="outline"
                                                    className={`${category.color} hover:scale-105 transition-transform cursor-default`}
                                                >
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;