import ContactForm from '@/components/contact-form';
import InstagramFeed from '@/components/instagram-feed';

export function ContactSection({
  instagramAccount,
}: {
  instagramAccount: string;
}) {
  return (
    <>
      <hr className='w-full border-border my-4 lg:my-0' />

      <div className='flex gap-4 lg:flex-row md:flex-row sm:flex-col flex-col'>
        <div className='flex flex-col gap-4 lg:basis-1/2 basis-full'>
          <h2 className='font-bold lg:text-4xl text-2xl text-primary uppercase'>
            Contact Us
          </h2>
          <ContactForm />
        </div>
        <div className='lg:basis-1/2 basis-full flex justify-center'>
          <InstagramFeed account={instagramAccount} />
        </div>
      </div>
    </>
  );
}
