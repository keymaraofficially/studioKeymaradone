import { Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="text-center mb-12">
        <Users className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-headline font-bold">
          About Keymara
        </h1>
        <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
          We're on a mission to simplify marketing automation and help businesses connect with their customers in meaningful ways.
        </p>
      </div>

      <div className="bg-card border rounded-lg p-8 space-y-6 text-center">
        <h2 className="text-2xl font-headline font-bold">Our Story</h2>
        <p className="text-muted-foreground">
          Keymara was founded with the belief that powerful marketing tools should be accessible to everyone, not just large corporations. Our platform is designed to be intuitive, intelligent, and effective, empowering you to create campaigns that deliver real value.
        </p>
        <p className="text-muted-foreground">
          From automating customer journeys to providing data-driven insights, we're here to support your growth every step of the way.
        </p>
      </div>
    </div>
  );
}
