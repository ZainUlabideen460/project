import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services.
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
                  Welcome to Stars Coaching Academy. These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    By accessing and using the Stars Coaching Academy website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Course Enrollment and Payment</h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Enrollment Process</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Course enrollment is subject to availability and our admission criteria</li>
                      <li>We reserve the right to cancel or postpone courses due to insufficient enrollment</li>
                      <li>Students must provide accurate and complete information during enrollment</li>
                      <li>Enrollment confirmation will be sent via email upon successful registration</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Payment Terms</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Course fees must be paid in full before the course start date</li>
                      <li>All payments are in Indian Rupees (INR) unless otherwise specified</li>
                      <li>Payment can be made through approved payment methods only</li>
                      <li>Late payment may result in suspension of access to course materials</li>
                      <li>Additional charges may apply for payment processing fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Refund and Cancellation Policy</h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Student Cancellation</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Full refund if cancelled 7 days before course start date</li>
                      <li>50% refund if cancelled 3-6 days before course start date</li>
                      <li>No refund if cancelled within 2 days of course start date</li>
                      <li>No refund after course commencement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Institute Cancellation</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Full refund if we cancel the course</li>
                      <li>Alternative course options may be offered</li>
                      <li>Refund processing time: 7-14 business days</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Student Responsibilities</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">As a student, you agree to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Attend classes regularly and punctually</li>
                    <li>Complete assignments and projects within specified deadlines</li>
                    <li>Maintain respectful behavior towards instructors and fellow students</li>
                    <li>Not share course materials with unauthorized individuals</li>
                    <li>Use course materials for personal learning purposes only</li>
                    <li>Provide feedback and participate in course evaluations</li>
                    <li>Inform us of any technical issues or concerns promptly</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
                <div className="text-muted-foreground space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Our Content</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>All course materials, content, and resources are our intellectual property</li>
                      <li>Students receive a limited license to use materials for personal learning</li>
                      <li>Reproduction, distribution, or commercial use is strictly prohibited</li>
                      <li>Recording of live sessions without permission is not allowed</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Student Work</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Students retain ownership of their original work and projects</li>
                      <li>We may showcase student work for promotional purposes with consent</li>
                      <li>Students grant us a license to use their work for educational purposes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Code of Conduct</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">All students must adhere to our code of conduct:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Maintain professional and respectful communication</li>
                    <li>No harassment, discrimination, or inappropriate behavior</li>
                    <li>Respect intellectual property and confidentiality</li>
                    <li>No disruptive behavior during classes or online sessions</li>
                    <li>Follow academic integrity and avoid plagiarism</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    Violation of the code of conduct may result in suspension or termination from the course without refund.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    Stars Coaching Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Technical failures or interruptions in service</li>
                    <li>Actions of third-party service providers</li>
                    <li>Employment outcomes or career advancement</li>
                    <li>Compatibility issues with student devices or software</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
                <div className="text-muted-foreground">
                  <p className="leading-relaxed">
                    Your privacy is important to us. Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of information as outlined in our Privacy Policy.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Technical Requirements</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">Students are responsible for ensuring they have:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Reliable internet connection for online classes</li>
                    <li>Compatible devices and software for course participation</li>
                    <li>Updated browsers and necessary plugins</li>
                    <li>Basic technical skills to navigate online platforms</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    We provide technical support, but cannot guarantee compatibility with all devices or resolve all technical issues.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
                <div className="text-muted-foreground">
                  <p className="leading-relaxed">
                    We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <div className="text-muted-foreground">
                  <p className="leading-relaxed">
                    These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p><strong>Stars Coaching Academy</strong></p>
                    <p>Email: info@starscoaching.site</p>
                    <p>Phone: +91 88255 92070</p>
                    <p>Address: 123 Tech Hub, Innovation District, New Delhi, India 110001</p>
                    <p>Website: www.starscoaching.site</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground">
                  By enrolling in our courses or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;