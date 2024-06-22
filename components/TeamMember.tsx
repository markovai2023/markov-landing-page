import React from "react";

interface TeamMemberProps {
  name: string;
  title: string;
  previousExperience: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  previousExperience,
}) => {
  return (
    <div className="p-4">
      <div className="text-center">
        <h3 className="text-lg font-bold">
          {name}, {title}
        </h3>
      </div>
      <div className="text-center text-base">
        <p className="">{previousExperience}</p>
      </div>
    </div>
  );
};

export default TeamMember;
