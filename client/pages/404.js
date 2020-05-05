import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Link href='/posts'>
        <button>Take me Home</button>
      </Link>
    </div>
  );
}
