export default function Introduction() {
  return (
    <section className="container mx-auto">
      <p className="my-4">
        Welcome visitor!
      </p>

      <p className="mb-4">
        My name is Jiří Chára and I currently work as a senior software engineer at
        { ' ' }
        <a
          className="underline hover:text-gray-600 hover:decoration-sky-400"
          href="https://www.hpe.com"
        >
          Hewlett Packard Enterprise
        </a>
        . I live in Munich, but I can call many
        places home. I love traveling, music, spicy food, running, coconuts, Thailand, the sun,
        drones, and making long comma-separated lists.
      </p>

      <p>
        I am passionate about building excellent software that improves the lives of those around
        me. I specialize in creating software for clients ranging from small businesses to large
        enterprise corporations. I like to build and contribute to open source to help other
        developers become productive and more successful.
      </p>
    </section>
  );
}
