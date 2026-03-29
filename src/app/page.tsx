import HeroSection from '@/components/HeroSection';
import MerchTeaser from '@/components/MerchTeaser';
import EventCalendar from '@/components/EventCalendar';
import BroadcastFeed from '@/components/BroadcastFeed';
import MembershipSection from '@/components/MembershipSection';
import SponsorsSection from '@/components/SponsorsSection';

export default function HomePage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <MembershipSection />
      <MerchTeaser />
      <EventCalendar />
      <BroadcastFeed />
      <SponsorsSection />
    </main>
  );
}
