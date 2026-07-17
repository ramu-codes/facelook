import { useSalon } from '../context/SalonContext.jsx';
import { PageHero, SectionHead, RevealGroup, RevealItem, CtaBand } from '../components/ui.jsx';
import { VideoCard, TestimonialCard } from '../components/cards.jsx';

export default function VideoGallery() {
  const c = useSalon();
  return (
    <>
      <PageHero
        title="Video Gallery"
        crumb={c.worldName}
        img={c.videos[0].poster}
        note="Watch the house at work — rituals, artists and client stories in motion."
      />

      <section className="section textured">
        <div className="container">
          <SectionHead eyebrow="In Motion" title="Films from the Floor" />
          <RevealGroup className="grid-2">
            {c.videos.map((v) => (
              <RevealItem key={v.title}>
                <VideoCard v={v} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section on-cream">
        <div className="container">
          <SectionHead center eyebrow="Video Testimonials" title="Clients, On Camera" text="Unscripted words from the people who keep coming back." />
          <RevealGroup className="grid-2">
            {c.testimonials.slice(0, 2).map((t) => (
              <RevealItem key={t.who}>
                <TestimonialCard t={t} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand img={c.videos[1].poster} title="Your Story Could Be Next" btnTo={`${c.base}/booking`} />
    </>
  );
}
