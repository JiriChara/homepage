import notFoundImage from '../../../assets/why-you-no.png';

export default function NotFound() {
  return (
    <article className="container mx-auto py-10 flex flex-col items-center space-y-4">
      <img
        alt="Why You No!"
        src={notFoundImage}
      />

      <h2 className="text-xl">
        404
      </h2>
    </article>
  );
}
