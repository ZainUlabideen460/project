import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="p-8">
            <CardContent className="p-0 space-y-8">
              <div>
                <p className="text-muted-foreground mb-6">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At Stars Coaching Academy, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you voluntarily provide to us, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Educational background and qualifications</li>
                      <li>Course enrollment and payment information</li>
                      <li>Communication preferences</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                    <p className="leading-relaxed">
                      When you visit our website, we may automatically collect certain information, including:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>IP address and browser information</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website information</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <div className="text-muted-foreground space-y-2">
                  <p className="leading-relaxed">We use the collected information for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide and maintain our educational services</li>
                    <li>Process course enrollments and payments</li>
                    <li>Communicate with you about courses, updates, and promotions</li>
                    <li>Improve our website and services</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and ensure security</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist in our operations</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Encryption of sensitive data</li>
                    <li>Regular security assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Secure data storage and transmission</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    We use cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. You can control cookie settings through your browser preferences.
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Types of Cookies We Use:</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Essential cookies for website functionality</li>
                      <li>Analytics cookies to understand user behavior</li>
                      <li>Preference cookies to remember your settings</li>
                      <li>Marketing cookies for relevant advertisements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Access and review your personal information</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Restrict processing of your information</li>
                    <li>Data portability rights</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Third-Party Links</h2>
                <div className="text-muted-foreground">
                  <p className="leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Children's Privacy</h2>
                <div className="text-muted-foreground">
                  <p className="leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
                <div className="text-muted-foreground">
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p><strong>Stars Coaching Academy</strong></p>
                    <p>Email: privacy@starscoaching.site</p>
                    <p>Phone: +91 88255 92070</p>
                    <p>Address: 123 Tech Hub, Innovation District, New Delhi, India 110001</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;