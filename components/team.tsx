import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <section>
      <div className="py-12 md:py-20 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          {/* ---------------- */}
          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-4xl mx-auto p-8">
              <h2 className="text-4xl font-bold text-center mb-2">
                Meet Our Team
              </h2>
              <p className="text-xl mb-5 text-gray-400">
                We are a small team focused on design, infrastructures, and AI.
                We have 6 people and an incredible set of advisors.
              </p>
              <div className="">
                <TeamMember
                  name="Hai Phan, PhD"
                  title="Co-Founder, CEO"
                  previousExperience="Previously: Researcher & Engineer at CMU, Adobe, Meta, Fossil Group"
                />
                <TeamMember
                  name="Vu (Anthony) Le"
                  title="Co-Founder, Founding Engineer"
                  previousExperience="CS Ph.D @ University of Massachusetts Amherst"
                />
                <TeamMember
                  name="Phu Kieu"
                  title="iOS Developer"
                  previousExperience=""
                />

                <TeamMember
                  name="Thai Pham"
                  title="Web Developer"
                  previousExperience=""
                />
                <TeamMember
                  name="Steve Nguyen"
                  title="ML & System Engineer"
                  previousExperience="Previously at Apple, Amazon, Tesla"
                />
                <TeamMember
                  name="Joseph Vo"
                  title="Full Stack"
                  previousExperience="University of California, Berkeley"
                />
                <TeamMember
                  name="Drake Pham"
                  title="Backend Developer"
                  previousExperience="University of Kansas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
