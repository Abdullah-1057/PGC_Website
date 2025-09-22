import { Link } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Card from './Card';
import Badge from './Badge';

export default function EventCard({ event }) {
  
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <Badge variant="primary" className="text-xs">
          {event.category}
        </Badge>
      </div>
      
      <h3 className="text-lg font-semibold text-brand-secondary-900 mb-2">
        {event.title}
      </h3>
      
      <p className="text-brand-muted-600 mb-4 line-clamp-2">
        {event.description}
      </p>
      
      <div className="flex items-center text-sm text-brand-muted-500 mb-4">
        <MapPinIcon className="h-4 w-4 mr-2" />
        <span>{event.location}</span>
      </div>
      
      <Link
        to={`/events/${event.slug}`}
        className="text-brand-primary-500 hover:text-brand-primary-600 font-medium text-sm"
      >
        Learn More →
      </Link>
    </Card>
  );
}
