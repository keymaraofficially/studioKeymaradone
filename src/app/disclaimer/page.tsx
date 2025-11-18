
export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="prose max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Disclaimer</h1>
        <p className="text-sm text-muted-foreground">Last updated: November 2025</p>

        <p>All content on Keymara is provided for educational purposes only.
        We do not offer marketing services, campaign management, or financial advice.</p>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">No Professional Guarantees</h2>
        <p>Any strategies, tutorials, or recommendations are shared for learning.
        We do not guarantee outcomes such as revenue, leads, or growth.</p>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">Accuracy of Information</h2>
        <p>We aim to keep information accurate and up-to-date, but tools and platforms may change over time.</p>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">External Links</h2>
        <p>Keymara is not responsible for external websites or third-party tools referenced in guides.</p>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">Contact</h2>
        <p>For clarification, email us at <a href="mailto:support@keymara.com" className="font-semibold text-foreground hover:text-primary">support@keymara.com</a></p>
      </div>
    </div>
  );
}
