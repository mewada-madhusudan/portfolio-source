import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Rocket, Target, TrendingUp } from "lucide-react";
import { profileData } from "../lib/profileData";

const ProjectsSection = () => {
    const { key_projects, certifications, credly_certifications } = profileData;

    const projectIcons = [Rocket, Target, TrendingUp, Rocket];

    return (
        <section id="projects" className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Key Projects & Certifications
                    </h2>
                    <p className="text-xl text-gray-300">
                        Innovative solutions that drive business value
                    </p>
                </motion.div>

                {/* Key Projects */}
                <div className="mb-16">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold mb-8 text-center text-white"
                    >
                        Featured Projects
                    </motion.h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {key_projects.map((project, index) => {
                            const Icon = projectIcons[index];
                            return (
                                <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl text-white">{project.name}</CardTitle>
                                                    <p className="text-sm text-gray-400">{project.description}</p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-sm text-white">Key Achievements:</h4>
                                                <ul className="space-y-2">
                                                    {project.achievements.map((achievement, achIndex) => (
                                                        <motion.li
                                                            key={achIndex}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                                                            viewport={{ once: true }}
                                                            className="flex items-start gap-2 text-sm text-gray-300"
                                                        >
                                                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                                            <span>{achievement}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Certifications */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* IBM Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2 text-white">
                                    <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-400">IBM Academy</Badge>
                                    Certifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="p-3 bg-gray-700/50 rounded-lg border border-gray-600"
                                        >
                                            <h4 className="font-semibold text-white">{cert.name}</h4>
                                            <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Credly Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-xl flex items-center gap-2 text-white">
                                    <Badge variant="secondary" className="bg-green-900/50 text-green-300 border-green-400">Credly</Badge>
                                    Digital Badges
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 max-h-80 overflow-y-auto">
                                    {credly_certifications.slice(0, 5).map((cert, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="p-2 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-600/50"
                                        >
                                            <h4 className="font-medium text-sm text-white">{cert.name}</h4>
                                            <p className="text-xs text-gray-400">{cert.issuer} • {cert.year}</p>
                                            {cert.link && (
                                                <a
                                                    href={cert.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-xs text-blue-400 hover:underline"
                                                >
                                                    View Badge
                                                </a>
                                            )}
                                        </motion.div>
                                    ))}
                                    {credly_certifications.length > 5 && (
                                        <p className="text-xs text-gray-400 text-center pt-2">
                                            +{credly_certifications.length - 5} more certifications
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;