import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    // Change this for a mailchimp API or something
    window.location.href = `mailto:nionelibarra@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} | contacts: ${formData.email}`;
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-3xl font-semibold text-center'>
          I have got just what you need.{' '}
          <span className='decoration-[#F7AB0A] underline'>Lets Talk.</span>
        </h4>
        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>+63 966 761 3212</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>
            027, Purok 2A, Apokon, Tagum City, Davao del Norte 8100
          </p>
        </div>
        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2xl'>nionelibarra@gmail.com</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'
        >
          <div className='flex space-x-2 '>
            <input
              {...register('name')}
              placeholder='Name'
              className='contactInput'
              type='text'
            />
            <input
              {...register('email')}
              placeholder='Email'
              className='contactInput'
              type='email'
            />
          </div>
          <input
            {...register('subject')}
            placeholder='Subject'
            className='contactInput'
            type='text'
          />
          <textarea
            {...register('message')}
            placeholder='Message'
            className='contactInput'
          />
          <button
            type='submit'
            className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
          >
            Contact Neyo!
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;