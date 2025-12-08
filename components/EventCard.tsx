import Link from "next/link";
import Image from "next/image";

interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    time: string;
    date: string;
}

const EventCard = ({ title, image, slug, time, date, location }: Props) => {
    return (
        <Link href={`/events/${slug}`} id='event-card'>
          <Image className='poster' src={image} alt={title} width={410} height={300} />
            <h3>{title}</h3>

            <div className='flex flex-row gap-2'>
                <Image src='/icons/pin.svg' alt='location' width={14} height={14} />
                <p>{location}</p>
            </div>

            <div className='datetime'>
                <div>
                    <Image src='/icons/calendar.svg' alt='date' width={14} height={14} />
                    <p>{date}</p>
                </div>
                <div>
                    <Image src='/icons/clock.svg' alt='time' width={14} height={14} />
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    )
}
export default EventCard
