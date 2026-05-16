
export default function CookiePolicyPage() {
  const currentDate = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="prose max-w-none">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Cookie Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: {currentDate}</p>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">What Are Cookies?</h2>
        <p>Cookies are small files stored on your device to improve your browsing experience.</p>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">How We Use Cookies</h2>
        <ul>
          <li>To remember your preferences</li>
          <li>To analyze traffic and engagement</li>
          <li>To improve website speed and usability</li>
        </ul>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Allow the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand traffic and user behavior.</li>
          <li><strong>Preference Cookies:</strong> Remember your settings.</li>
        </ul>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">Your Choices</h2>
        <p>You can accept or decline cookies through the cookie banner. You can also disable cookies in your browser settings.</p>

        <h2 className="text-2xl font-headline font-bold mt-8 mb-4">Contact</h2>
        <p>If you have questions about our cookie usage, email <a href="mailto:contact@keymara.com" className="font-semibold text-foreground hover:text-primary">contact@keymara.com</a></p>
      </div>
    </div>
  );
}
