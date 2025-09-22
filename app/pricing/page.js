import Container from '@/components/Container'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import Reveal from '@/components/Reveal'
import { pricingData } from '@/data/pricing'

export const metadata = {
  title: 'Fee Structure',
  description: 'Transparent and affordable fee structure for all our programs at PGC Jhang. Quality education made accessible.',
}

export default function Pricing() {
  return (
    <div className="pt-16">
      <Section background="white" padding="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-secondary-500 mb-6">
                Fee Structure
              </h1>
              <p className="text-xl text-brand-muted-600 max-w-3xl mx-auto">
                Transparent and affordable fee structure for all our programs. 
                We believe quality education should be accessible to everyone.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {pricingData.map((plan, index) => (
              <Reveal key={plan.id} delay={index * 0.1}>
                <div className={`bg-white rounded-xl shadow-lg border-2 p-8 relative ${
                  plan.popular ? 'border-brand-primary-500' : 'border-brand-muted-200'
                }`}>
                  {plan.popular && (
                    <Badge variant="primary" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-brand-secondary-500 mb-2">
                      {plan.program}
                    </h3>
                    <div className="text-4xl font-bold text-brand-primary-500 mb-2">
                      {plan.monthlyFee}
                    </div>
                    <p className="text-brand-muted-600">per month</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between">
                      <span className="text-brand-muted-600">Admission Fee:</span>
                      <span className="font-semibold">{plan.admissionFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-600">Annual Fee:</span>
                      <span className="font-semibold">{plan.annualFee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-muted-600">Lab Fee:</span>
                      <span className="font-semibold">{plan.labFee}</span>
                    </div>
                    <div className="flex justify-between border-t pt-4">
                      <span className="font-semibold text-brand-secondary-500">Total (First Year):</span>
                      <span className="font-bold text-brand-primary-500">
                        {plan.totalFirstYear}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    href="/admissions" 
                    className="w-full"
                    variant={plan.popular ? 'primary' : 'outline'}
                  >
                    Apply Now
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="bg-brand-muted-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-brand-secondary-500 mb-6 text-center">
                Important Notes
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-brand-secondary-500 mb-3">Payment Terms</h3>
                  <ul className="space-y-2 text-sm text-brand-muted-600">
                    <li>• Monthly fees are due by the 10th of each month</li>
                    <li>• Late payment charges: -- after due date</li>
                    <li>• Admission fee is non-refundable</li>
                    <li>• Fee structure may change annually</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-brand-secondary-500 mb-3">Scholarships Available</h3>
                  <ul className="space-y-2 text-sm text-brand-muted-600">
                    <li>• Merit-based scholarships up to 50%</li>
                    <li>• Need-based financial assistance</li>
                    <li>• Sibling discount: 10% for second child</li>
                    <li>• Early bird discount: 5% if paid annually</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </div>
  )
}
