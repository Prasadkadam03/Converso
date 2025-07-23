import CompanionCard from "@/components/CompanionCard";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            <CompanionCard
                id="123"
                name="Neura the Brainy Explorer"
                topic="Neural Network of the Brain"
                subject="science"
                duration={45}
                color="#ffda6e"
            />
            <CompanionCard
                id="456"
                name="Countsy the Number Wizard"
                topic="Derivatives & Integrals"
                subject="maths"
                duration={30}
                color="#e5d0ff"
            />
            <CompanionCard
                id="789"
                name="Verba the Vocabulary Builder"
                topic="language"
                subject="English Literature"
                duration={30}
                color="#BDE7FF"
            />
        </section>

        <section className="home-section">
            
        </section>
    </main>
  )
}

export default Page