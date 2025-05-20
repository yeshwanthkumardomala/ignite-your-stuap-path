
import React from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <Layout>
      <div className="pt-16 md:pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Privacy Policy"
              subtitle="Last updated: May 15, 2023"
            />
            
            <div className="prose prose-lg max-w-none mt-10">
              <p>
                At Stuap, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              
              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you register on our platform, create or modify your profile, sign up for our newsletter, or communicate with us.
              </p>
              <p>
                The personal information we collect may include:
              </p>
              <ul>
                <li>Name, email address, phone number, and other contact details</li>
                <li>Educational background and career interests</li>
                <li>Profile information, including your profile picture</li>
                <li>Course enrollment and progress data</li>
                <li>Payment information when you purchase our services</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, personalizing, and improving our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending administrative messages, updates, and promotional materials</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Monitoring and analyzing trends, usage, and activities</li>
                <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>We may share your personal information in the following situations:</p>
              <ul>
                <li>With service providers who perform services on our behalf</li>
                <li>With mentors and instructors as necessary to provide our services</li>
                <li>In response to a legal request if we believe disclosure is required by law</li>
                <li>If we believe your actions are inconsistent with our user agreements or to protect the rights of Stuap</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.
              </p>

              <h2>Your Choices</h2>
              <p>You can access, update, or delete your account information by logging into your account settings. You can also opt-out of receiving promotional emails from us by following the instructions in those emails.</p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@stuap.com" className="text-primary hover:underline">privacy@stuap.com</a>.
              </p>
              
              <div className="mt-12 border-t pt-8">
                <h2>Terms of Service</h2>
                <p>
                  For information about our terms of service, please visit our <Link to="/terms" className="text-primary hover:underline">Terms of Service page</Link>.
                </p>
                
                <h2>Refund Policy</h2>
                <p>
                  For information about our refund policy, please visit our <Link to="/refund-policy" className="text-primary hover:underline">Refund Policy page</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
