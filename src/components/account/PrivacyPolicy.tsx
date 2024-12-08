import { BackButton } from '../ui/BackButton';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <BackButton />
      </div>

      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-serif text-primary mb-8">Privacy Policy</h1>
        
        <div className="prose prose-primary">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including your email
            address when you create an account and your meditation progress data.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our
            services, including tracking your meditation progress and personalizing
            your experience.
          </p>

          <h2>3. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or destruction.
          </p>

          <h2>4. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information.
            You can delete your account at any time through the account settings.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us
            at support@endolina.com
          </p>
        </div>
      </div>
    </div>
  );
}