import React from 'react';

const skills = [
  'Python', 'HTML/CSS', 'JavaScript', 'TypeScript', 'SQL', 'Java',
  'React', 'Next.js', 'Bootstrap', 'Node.js', 'Express.js', 'Git/GitHub'
];

const SkillsSection: React.FC = () => {
    return (
        <div id="skills" className="bg-[url('/path/to/starry-background.jpg')] bg-cover text-center text-white py-8 px-4 sm:px-8">
            <div className="container mx-auto">
                <h2 className="relative m-4 md:m-16 uppercase tracking-widest md:tracking-[20px] text-gray-500 font-bold text-center text-3xl md:text-6xl">Skills</h2>
                <p className="text-center text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                  Here is a snapshot of the technologies and tools I have dabbled with. 
                  <br/>
                  I am always learning and hope to expand my skill set continuously!
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skills.map((skill, index) => (
                        <div key={index} className="transform transition duration-500 hover:scale-110">
                            <div className="p-4 bg-white/10 rounded-lg shadow-lg hover:bg-white/20">
                                <h5 className="text-xl font-medium">{skill}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
