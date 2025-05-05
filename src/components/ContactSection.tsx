
import React from 'react';
import FadeIn from './animations/FadeIn';
import Button from './ui-custom/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Visit Our Store</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Address</h4>
                    <p className="text-neutral-600">
                      Cross Road, S R Puram-517167, Chittoor District, Andhra Pradesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-neutral-600">
                      PH: 9989394522, 9949922107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Store Hours</h4>
                    <p className="text-neutral-600">
                      Monday - Saturday: 9:30 AM - 8:30 PM<br />
                      Sunday: 10:30 AM - 6:30 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button>
                  Get Directions
                </Button>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
              {/* Placeholder for map or store image */}
              <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                <p className="text-neutral-600">Store Location Map</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
