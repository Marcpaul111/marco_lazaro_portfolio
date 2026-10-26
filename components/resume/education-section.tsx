import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

type Education = {
  duration: string;
  institute: string;
  subject: string;
};

function EducationSection() {
  const Education: Education[] = [
    {
      duration: 'Expected in 2021',
      institute: 'KodeGo',
      subject: 'Full Stack Web Development',
    },
    {
      duration: '2016 - 2020',
      institute: 'Core Gateway College Inc.',
      subject: 'Business Administration Major in Business Management',
    },
  ];
  return (
    <div>
      <div className="text-fontGray">
        My academic journey, spanning over 4 years, has been a journey of
        growth, learning, and innovation.
      </div>
      <div className="mx-4 max-w-xl py-12">
        <div className="relative border-l-4 border-Secondary py-4 pl-8">
          <div className="mb-0 space-y-12">
            {Education.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="absolute -left-2">
                  {/* <div className="h-5 w-5 rounded-full bg-Secondary"></div> */}
                  <FaDotCircle className="mt-2 h-3 w-3 text-Secondary" />
                </div>

                <p className="mb-2 text-Secondary">{item.duration}</p>
                <h3 className="text-2xl font-semibold">{item.subject}</h3>
                <p className="mb-3 text-lg">{item.institute}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
