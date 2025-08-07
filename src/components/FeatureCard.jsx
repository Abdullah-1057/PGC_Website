import Card from './Card';
import Reveal from './Reveal';

export default function FeatureCard({ feature, index }) {
  const IconComponent = feature.icon;
  
  return (
    <Reveal delay={index * 0.1}>
      <Card className="p-6 text-center h-full">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary-100 rounded-lg mb-4">
          <IconComponent className="h-6 w-6 text-brand-primary-500" />
        </div>
        <h3 className="text-lg font-semibold text-brand-secondary-900 mb-2">
          {feature.title}
        </h3>
        <p className="text-brand-muted-600">
          {feature.description}
        </p>
      </Card>
    </Reveal>
  );
}
