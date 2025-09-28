import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";
import { profileData } from "../lib/profileData";

const ExperienceSection = () => {
    const { work_experience } = profileData;

    return (
        <section id="experience" className="py-20 px-4 bg-gray-800">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                        Professional Experience
                    </h2>
                    <p className="text-xl text-gray-300">
                        {profileData.experience_summary.total_years} years of experience across multiple industries
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-green-400 transform md:-translate-x-0.5" />

                    <div className="space-y-12">
                        {work_experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-col md:gap-8`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-800 transform md:-translate-x-1/2 z-10 shadow-lg shadow-blue-400/50" />

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                    <Card className="hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                                        <CardHeader>
                                            <div className="flex flex-col gap-2">
                                                <CardTitle className="text-xl text-white">{job.position}</CardTitle>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <Building className="w-4 h-4" />
                                                    <span className="font-semibold text-blue-400">{job.company}</span>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-400">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{job.duration}</span>
                                                    </div>
                                                    {job.location && (
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>{job.location}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {job.description && (
                                                <p className="text-gray-300">{job.description}</p>
                                            )}

                                            {job.achievements && (
                                                <div className="space-y-2">
                                                    <h4 className="font-semibold text-sm text-white">Key Achievements:</h4>
                                                    <ul className="space-y-1">
                                                        {job.achievements.map((achievement, achIndex) => (
                                                            <motion.li
                                                                key={achIndex}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: (index * 0.1) + (achIndex * 0.05) }}
                                                                viewport={{ once: true }}
                                                                className="flex items-start gap-2 text-sm text-gray-300"
                                                            >
                                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                                                <span>{achievement}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {job.skills && (
                                                <div className="space-y-2">
                                                    <h4 className="font-semibold text-sm text-white">Skills:</h4>
                                                    <div className="flex flex-wrap gap-1">
                                                        {job.skills.map((skill, skillIndex) => (
                                                            <Badge key={skillIndex} variant="outline" className="text-xs bg-gray-800/50 text-gray-300 border-gray-600">
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;